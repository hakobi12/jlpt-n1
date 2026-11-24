// Vercel Serverless Function: Natural Native Japanese TTS proxy (audio/mpeg)
// GET /api/tts?q=<japanese_text>

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  const raw = typeof req.query?.q === "string" ? req.query.q : "";
  const clean = raw
    .replace(/<[^>]+>/g, " ")
    .replace(/[★☆①②③④＿＿＿_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 190);

  if (!clean) {
    return res.status(400).json({ error: "Missing q parameter" });
  }

  try {
    const upstreamUrl =
      "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&ttsspeed=1&q=" +
      encodeURIComponent(clean);

    const upstream = await fetch(upstreamUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
        "Referer": "https://translate.google.com/",
        "Accept": "audio/mpeg, audio/*;q=0.9, */*;q=0.5"
      }
    });

    if (!upstream.ok) {
      return res.status(502).json({ error: `TTS upstream HTTP ${upstream.status}` });
    }

    const arrayBuf = await upstream.arrayBuffer();
    const buf = Buffer.from(arrayBuf);
    if (!buf.length) {
      return res.status(502).json({ error: "Empty TTS audio response" });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", String(buf.length));
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
    return res.status(200).send(buf);
  } catch (err) {
    return res.status(500).json({ error: err?.message || "TTS proxy error" });
  }
}
