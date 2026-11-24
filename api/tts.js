// Vercel Serverless Function: Ultra-Natural Native Japanese Neural TTS
// Supports Female (ja-JP-NanamiNeural) & Male (ja-JP-KeitaNeural) with natural Japanese intonation.
// GET /api/tts?q=<japanese_text>&voice=female|male

if (!globalThis.crypto || !globalThis.crypto.subtle) {
  try {
    globalThis.crypto = require("crypto").webcrypto;
  } catch {}
}

const { MsEdgeTTS, OUTPUT_FORMAT } = require("msedge-tts");

const VOICE_MAP = {
  female: "ja-JP-NanamiNeural",
  male: "ja-JP-KeitaNeural",
  nanami: "ja-JP-NanamiNeural",
  keita: "ja-JP-KeitaNeural",
  "ja-JP-NanamiNeural": "ja-JP-NanamiNeural",
  "ja-JP-KeitaNeural": "ja-JP-KeitaNeural"
};

async function synthesizeEdgeNeural(text, voiceName) {
  const tts = new MsEdgeTTS();
  try {
    await tts.setMetadata(voiceName, OUTPUT_FORMAT.AUDIO_24KHZ_96KBITRATE_MONO_MP3);
    const { audioStream } = tts.toStream(text);
    const chunks = [];
    for await (const chunk of audioStream) {
      chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
    }
    return Buffer.concat(chunks);
  } finally {
    try { tts.close(); } catch {}
  }
}

async function fallbackGoogleTts(text) {
  const upstreamUrl =
    "https://translate.google.com/translate_tts?ie=UTF-8&client=tw-ob&tl=ja&ttsspeed=1&q=" +
    encodeURIComponent(text.slice(0, 190));

  const upstream = await fetch(upstreamUrl, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
      "Referer": "https://translate.google.com/",
      "Accept": "audio/mpeg, audio/*;q=0.9, */*;q=0.5"
    }
  });
  if (!upstream.ok) throw new Error(`Fallback TTS HTTP ${upstream.status}`);
  return Buffer.from(await upstream.arrayBuffer());
}

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
    .slice(0, 450);

  if (!clean) {
    return res.status(400).json({ error: "Missing q parameter" });
  }

  const voiceKey = typeof req.query?.voice === "string" ? req.query.voice.trim() : "female";
  const voiceName = VOICE_MAP[voiceKey] || VOICE_MAP.female;

  try {
    let buf = null;
    let engine = "edge-neural";
    try {
      buf = await synthesizeEdgeNeural(clean, voiceName);
    } catch (edgeErr) {
      console.warn("Edge Neural TTS failed, falling back:", edgeErr?.message || edgeErr);
      engine = "google-fallback";
      buf = await fallbackGoogleTts(clean);
    }

    if (!buf || !buf.length) {
      return res.status(502).json({ error: "Empty TTS audio response" });
    }

    res.setHeader("Content-Type", "audio/mpeg");
    res.setHeader("Content-Length", String(buf.length));
    res.setHeader("X-TTS-Engine", engine);
    res.setHeader("X-TTS-Voice", voiceName);
    res.setHeader("Cache-Control", "public, max-age=86400, s-maxage=604800");
    return res.status(200).send(buf);
  } catch (err) {
    return res.status(500).json({ error: err?.message || "TTS proxy error" });
  }
};
