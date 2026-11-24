// Vercel Serverless API: Server-side content gating for JLPT N1 (hocn1.vercel.app)
// Verifies Firebase Auth ID Token + Firestore members/{email} status before returning full Markdown.
// Guests & unapproved users ONLY receive the 1st article/question per tab directly from the server.

const FIREBASE_PROJECT_ID = "mythical-mason-515501-r0";
const ADMIN_EMAILS = ["hakobi12@gmail.com"];

function getDriveFilesMap() {
  if (process.env.DRIVE_FILES_JSON) {
    try { return JSON.parse(process.env.DRIVE_FILES_JSON); } catch {}
  }
  return {
    tuvung: process.env.DRIVE_FILE_TUVUNG || "",
    nguphap: process.env.DRIVE_FILE_NGUPHAP || "",
    dochieu: process.env.DRIVE_FILE_DOCHIEU || "",
    nghehieu: process.env.DRIVE_FILE_NGHEHIEU || ""
  };
}

function truncateToFirstArticle(mdText) {
  if (!mdText) return "";
  const lines = mdText.replace(/\r\n/g, "\n").split("\n");
  const out = [];
  let seenFirstH3 = false;

  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (seenFirstH3) break; // Stop right before the 2nd ### article/question
      seenFirstH3 = true;
      out.push(line);
      continue;
    }
    if (seenFirstH3 && (line.startsWith("# ") || line.startsWith("## "))) {
      break; // Stop if a new section/session starts after the 1st article
    }
    out.push(line);
  }
  return out.join("\n").trim();
}

function countArticles(mdText) {
  if (!mdText) return 0;
  return (mdText.match(/^### /gm) || []).length;
}

async function verifyFirebaseIdToken(idToken, apiKey, referer) {
  if (!idToken || !apiKey) return null;
  const res = await fetch(
    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${encodeURIComponent(apiKey)}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Referer": referer || "https://hocn1.vercel.app/"
      },
      body: JSON.stringify({ idToken })
    }
  );
  if (!res.ok) return null;
  const data = await res.json();
  const u = data.users && data.users[0];
  if (!u || !u.email) return null;
  return { uid: u.localId, email: u.email.toLowerCase(), displayName: u.displayName || "" };
}

async function checkMemberStatus(email, idToken) {
  if (ADMIN_EMAILS.includes(email)) {
    return { access: "full", status: "admin", role: "admin" };
  }
  const url = `https://firestore.googleapis.com/v1/projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/members/${encodeURIComponent(email)}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${idToken}` }
  });
  if (!res.ok) {
    return { access: "preview", status: "pending", role: "user" };
  }
  const doc = await res.json();
  const fields = doc.fields || {};
  const status = fields.status?.stringValue || "pending";
  const expiresAt = fields.expiresAt?.stringValue || "";

  if (status === "approved") {
    if (expiresAt && new Date(expiresAt).getTime() < Date.now()) {
      return { access: "preview", status: "expired", expiresAt, role: "user" };
    }
    return { access: "full", status: "approved", expiresAt, role: "user" };
  }
  return { access: "preview", status, expiresAt, role: "user" };
}

module.exports = async function handler(req, res) {
  res.setHeader("Cache-Control", "no-store, max-age=0");

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const driveApiKey = process.env.DRIVE_API_KEY || "";
  const firebaseApiKey = process.env.FIREBASE_API_KEY || driveApiKey;
  const driveFiles = getDriveFilesMap();

  if (!driveApiKey || !driveFiles.tuvung) {
    return res.status(500).json({
      error: "Server chưa cấu hình Environment Variables (DRIVE_API_KEY / DRIVE_FILES_JSON) trên Vercel."
    });
  }

  const referer = process.env.DRIVE_REFERER || "https://hocn1.vercel.app/";

  // 1. Verify optional Firebase ID Token
  let authInfo = { access: "preview", status: "guest", role: "guest", email: "" };
  const authHeader = req.headers.authorization || "";
  const idToken = authHeader.startsWith("Bearer ") ? authHeader.slice(7).trim() : "";

  if (idToken) {
    const user = await verifyFirebaseIdToken(idToken, firebaseApiKey, referer);
    if (user) {
      const member = await checkMemberStatus(user.email, idToken);
      authInfo = { ...member, email: user.email };
    }
  }

  // 2. Fetch all 4 Markdown files from Google Drive server-side
  try {
    const files = {};
    const totalCounts = {};

    await Promise.all(
      Object.entries(driveFiles).map(async ([tabId, fileId]) => {
        if (!fileId) { files[tabId] = ""; totalCounts[tabId] = 0; return; }
        const r = await fetch(
          `https://www.googleapis.com/drive/v3/files/${encodeURIComponent(fileId)}?alt=media&key=${encodeURIComponent(driveApiKey)}`,
          { headers: { Referer: referer } }
        );
        if (!r.ok) throw new Error(`Drive ${tabId} HTTP ${r.status}`);
        const rawMd = await r.text();
        totalCounts[tabId] = countArticles(rawMd);
        files[tabId] = authInfo.access === "full" ? rawMd : truncateToFirstArticle(rawMd);
      })
    );

    return res.status(200).json({
      access: authInfo.access,
      status: authInfo.status,
      role: authInfo.role,
      expiresAt: authInfo.expiresAt || "",
      totalCounts,
      files
    });
  } catch (err) {
    return res.status(502).json({ error: "Không tải được dữ liệu bài học: " + err.message });
  }
};
