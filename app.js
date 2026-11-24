// ==================== SVG ICON HELPERS ====================
const ICONS = {
  star: '<svg class="ico" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  starFill: '<svg class="ico ico-fill" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
  volume: '<svg class="ico" viewBox="0 0 24 24"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>',
  eye: '<svg class="ico" viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  close: '<svg class="ico" viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  moon: '<svg class="ico" viewBox="0 0 24 24"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  sun: '<svg class="ico" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  user: '<svg class="ico" viewBox="0 0 24 24"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  shuffle: '<svg class="ico" viewBox="0 0 24 24"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>',
  refresh: '<svg class="ico" viewBox="0 0 24 24"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>',
  check: '<svg class="ico" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>',
  note: '<svg class="ico" viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  play: '<svg class="ico ico-fill" viewBox="0 0 24 24"><polygon points="6 4 20 12 6 20 6 4"/></svg>',
  pause: '<svg class="ico ico-fill" viewBox="0 0 24 24"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>'
};

// ==================== CONFIGURATION ====================
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyApN00WWVr-l-NPCu9ylxToky99ErH9Bz0",
  authDomain: "mythical-mason-515501-r0.firebaseapp.com",
  projectId: "mythical-mason-515501-r0",
  storageBucket: "mythical-mason-515501-r0.firebasestorage.app",
  messagingSenderId: "45519602571",
  appId: "1:45519602571:web:32f315924014fd99c1658e"
};

const ADMIN_EMAIL = "hakobi12@gmail.com";
const STUDY_TABS = ["tuvung", "nguphap", "dochieu", "nghehieu"];

const KEYS = {
  BOOKMARKS: "jlpt_n1_bookmarks_v2",
  LEGACY_BM: "jlpt_n1_bookmarks_v1",
  MD_CACHE: "jlpt_n1_md_cache_v1",
  LAST_SYNC: "jlpt_n1_last_sync_v1",
  WRONG_IDS: "jlpt_n1_wrong_ids_v1",
  DONE_IDS: "jlpt_n1_done_ids_v1",
  MASTERED_IDS: "jlpt_n1_mastered_ids_v1",
  WRONG_MAP: "jlpt_n1_wrong_map_v2",
  DONE_MAP: "jlpt_n1_done_map_v2",
  MASTERED_MAP: "jlpt_n1_mastered_map_v2",
  LAST_READ: "jlpt_n1_last_read_v1",
  EXAM_HISTORY: "jlpt_n1_exam_history_v1",
  EXAM_DATE: "jlpt_n1_exam_date_v1",
  ACTIVE_EXAM: "jlpt_n1_active_exam_v1",
  NOTES: "jlpt_n1_notes_v1",
  FONT_SCALE: "jlpt_n1_font_scale_v1",
  TTS_RATE: "jlpt_n1_tts_rate_v1",
  TTS_VOICE: "jlpt_n1_tts_voice_v1",
  THEME: "jlpt_n1_theme_v1"
};

let fbAuth = null, fbDb = null, currentUser = null, unsubFirestore = null, unsubMemberDoc = null, unsubAdminMembers = null, pushTimer = null;
let activeUid = "guest";
let isApplyingRemote = false;
let lastFetchError = "";
let accessState = { access: "preview", status: "guest", role: "guest", expiresAt: "", totalCounts: {} };
let adminMembers = [];
let activeAdminTab = "pending";
let lastFetchedAccessKey = "";

let bmState = { items: {}, deleted: {} };
let wrongMap = {};
let doneMap = {};
let masteredMap = {};
let wrongIds = new Set();
let doneIds = new Set();
let masteredIds = new Set();
let lastReadMap = loadJsonFromStorage(KEYS.LAST_READ, {});
let examHistory = [];
let notesMap = {};
let examTargetDate = localStorage.getItem(KEYS.EXAM_DATE) || "2026-12-06";
let ttsRate = parseFloat(localStorage.getItem(KEYS.TTS_RATE) || "0.95") || 0.95;
let ttsVoice = localStorage.getItem(KEYS.TTS_VOICE) || "female";
let fontScale = parseFloat(localStorage.getItem(KEYS.FONT_SCALE) || "1") || 1;
let mdStore = { tuvung: "", nguphap: "", dochieu: "", nghehieu: "" };
let tabItems = { tuvung: [], nguphap: [], dochieu: [], nghehieu: [] };
let parsedQuizBank = [];
let cheatWordsBank = [];

let currentTab = "tuvung";
let onlyBookmarked = false;
let onlyUndone = false;
let onlyWrong = false;
let quizHideMode = false;
let scrollSpyBound = false;
let autoReadObserver = null;
let autoReadTimers = new Map();

let examConfig = { source: "all", day: "all", count: 10, mode: "instant", timerMode: "up" };
let examSession = null;
let examTimerInterval = null;

let fcConfig = { source: "bookmarks", showMastered: false, delaySec: 3 };
let fcDeck = [];
let fcIdx = 0;
let fcFlipped = false;
let fcAutoPlaying = false;
let fcAutoRunId = 0;
let fcAutoTimer = null;
let fcAutoStatus = "";
let fcWakeLock = null;

const JP_RE = /[\u3040-\u30ff\u4e00-\u9fff]/;

// ==================== UTILITIES & PER-UID TIMESTAMPED STORAGE ====================
function escapeHtml(s) {
  return String(s || "").replace(/[&<>"']/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;' }[c]));
}
function showToast(msg, ms = 2800) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove("show"), ms);
}
function setSyncStatus(label, cls = "") {
  const pill = document.getElementById("syncPill");
  document.getElementById("syncLabel").textContent = label;
  pill.className = "sync-pill" + (cls ? " " + cls : "");
}
function scopedKey(baseKey, uid = activeUid) {
  return uid === "guest" ? baseKey : `${baseKey}::${uid}`;
}
function loadJsonFromStorage(key, fallback) {
  try { return JSON.parse(localStorage.getItem(key) || "null") || fallback; }
  catch { return fallback; }
}
function arrayToFlagMap(arr) {
  const map = {};
  (arr || []).forEach(id => { map[id] = { active: true, updatedAt: "2026-01-01T00:00:00.000Z" }; });
  return map;
}
function flagMapToSet(map) {
  const s = new Set();
  Object.entries(map || {}).forEach(([k, v]) => { if (v && v.active) s.add(k); });
  return s;
}
function mergeFlagMaps(localMap, remoteMap) {
  const out = {};
  const keys = new Set([...Object.keys(localMap || {}), ...Object.keys(remoteMap || {})]);
  keys.forEach(k => {
    const l = localMap?.[k], r = remoteMap?.[k];
    if (!l) out[k] = r;
    else if (!r) out[k] = l;
    else out[k] = ((l.updatedAt || "") >= (r.updatedAt || "")) ? l : r;
  });
  return out;
}
function mergeNotesMaps(localMap, remoteMap) {
  const out = {};
  const keys = new Set([...Object.keys(localMap || {}), ...Object.keys(remoteMap || {})]);
  keys.forEach(k => {
    const l = localMap?.[k], r = remoteMap?.[k];
    const lObj = typeof l === "string" ? { text: l, updatedAt: "2026-01-01T00:00:00.000Z" } : l;
    const rObj = typeof r === "string" ? { text: r, updatedAt: "2026-01-01T00:00:00.000Z" } : r;
    if (!lObj) out[k] = rObj;
    else if (!rObj) out[k] = lObj;
    else out[k] = ((lObj.updatedAt || "") >= (rObj.updatedAt || "")) ? lObj : rObj;
  });
  return out;
}
function refreshDerivedSets() {
  wrongIds = flagMapToSet(wrongMap);
  doneIds = flagMapToSet(doneMap);
  masteredIds = flagMapToSet(masteredMap);
}
function setFlagState(map, id, active) {
  map[id] = { active: !!active, updatedAt: new Date().toISOString() };
  refreshDerivedSets();
}
function loadUserStateForUid(uid) {
  activeUid = uid || "guest";
  const rawBm = localStorage.getItem(scopedKey(KEYS.BOOKMARKS, activeUid));
  if (rawBm) {
    try { const p = JSON.parse(rawBm); bmState = { items: p.items || {}, deleted: p.deleted || {} }; }
    catch { bmState = { items: {}, deleted: {} }; }
  } else if (activeUid === "guest" && localStorage.getItem(KEYS.LEGACY_BM)) {
    try { bmState = { items: JSON.parse(localStorage.getItem(KEYS.LEGACY_BM)) || {}, deleted: {} }; }
    catch { bmState = { items: {}, deleted: {} }; }
  } else {
    bmState = { items: {}, deleted: {} };
  }

  wrongMap = loadJsonFromStorage(scopedKey(KEYS.WRONG_MAP, activeUid), null) ||
    (activeUid === "guest" ? arrayToFlagMap(loadJsonFromStorage(KEYS.WRONG_IDS, [])) : {});
  doneMap = loadJsonFromStorage(scopedKey(KEYS.DONE_MAP, activeUid), null) ||
    (activeUid === "guest" ? arrayToFlagMap(loadJsonFromStorage(KEYS.DONE_IDS, [])) : {});
  masteredMap = loadJsonFromStorage(scopedKey(KEYS.MASTERED_MAP, activeUid), null) ||
    (activeUid === "guest" ? arrayToFlagMap(loadJsonFromStorage(KEYS.MASTERED_IDS, [])) : {});
  examHistory = loadJsonFromStorage(scopedKey(KEYS.EXAM_HISTORY, activeUid), []);
  notesMap = loadJsonFromStorage(scopedKey(KEYS.NOTES, activeUid), {});
  refreshDerivedSets();
}
function saveBookmarksLocal() { localStorage.setItem(scopedKey(KEYS.BOOKMARKS), JSON.stringify(bmState)); }
function saveWrongIds(skipCloud = false) {
  localStorage.setItem(scopedKey(KEYS.WRONG_MAP), JSON.stringify(wrongMap));
  if (!skipCloud && currentUser && !isApplyingRemote) scheduleCloudPush();
}
function saveDoneIds(skipCloud = false) {
  localStorage.setItem(scopedKey(KEYS.DONE_MAP), JSON.stringify(doneMap));
  if (!skipCloud && currentUser && !isApplyingRemote) scheduleCloudPush();
}
function saveMasteredIds(skipCloud = false) {
  localStorage.setItem(scopedKey(KEYS.MASTERED_MAP), JSON.stringify(masteredMap));
  if (!skipCloud && currentUser && !isApplyingRemote) scheduleCloudPush();
}
function saveExamHistory(skipCloud = false) {
  examHistory = (examHistory || []).slice(0, 15);
  localStorage.setItem(scopedKey(KEYS.EXAM_HISTORY), JSON.stringify(examHistory));
  if (!skipCloud && currentUser && !isApplyingRemote) scheduleCloudPush();
}
function saveNotesMap(skipCloud = false) {
  localStorage.setItem(scopedKey(KEYS.NOTES), JSON.stringify(notesMap));
  if (!skipCloud && currentUser && !isApplyingRemote) scheduleCloudPush();
}
function getNoteText(id) {
  const n = notesMap[id];
  if (!n || n.deleted) return "";
  return typeof n === "string" ? n : (n.text || "");
}
function toggleNoteBox(idx) {
  const box = document.getElementById("note-box-" + idx);
  if (box) {
    box.classList.toggle("open");
    if (box.classList.contains("open")) box.querySelector("textarea")?.focus();
  }
}
function updateQuestionNote(id, text, btnId) {
  const val = String(text || "").trim();
  const now = new Date().toISOString();
  if (val) notesMap[id] = { text: val, deleted: false, updatedAt: now };
  else notesMap[id] = { text: "", deleted: true, updatedAt: now };
  saveNotesMap();
  const btn = document.getElementById(btnId);
  if (btn) btn.classList.toggle("has-note", !!val);
}
function setFontScale(scale) {
  fontScale = Number(scale) || 1;
  document.documentElement.style.setProperty("--font-scale", String(fontScale));
  localStorage.setItem(KEYS.FONT_SCALE, String(fontScale));
  syncPreferencePills();
}
function setTtsRate(rate) {
  ttsRate = Number(rate) || 0.95;
  localStorage.setItem(KEYS.TTS_RATE, String(ttsRate));
  syncPreferencePills();
}
function setTtsVoice(voice, silent = false) {
  ttsVoice = voice === "male" ? "male" : "female";
  localStorage.setItem(KEYS.TTS_VOICE, ttsVoice);
  syncPreferencePills();
  if (currentTab === "flashcard" && !fcAutoPlaying) renderFlashcardView();
  if (!silent) showToast(ttsVoice === "male" ? "Đã chọn giọng Nam bản xứ (Keita Neural)" : "Đã chọn giọng Nữ bản xứ (Nanami Neural)");
}
function testTtsVoice() {
  speakJapanese("こんにちは。JLPT N1の合格を目指して、一緒に頑張りましょう。");
}
function syncPreferencePills() {
  document.querySelectorAll("#fontScalePills .choice-pill").forEach(b => b.classList.toggle("active", Number(b.dataset.scale) === fontScale));
  document.querySelectorAll("#ttsRatePills .choice-pill").forEach(b => b.classList.toggle("active", Number(b.dataset.rate) === ttsRate));
  document.querySelectorAll("#ttsVoicePills .choice-pill").forEach(b => b.classList.toggle("active", b.dataset.voice === ttsVoice));
}
function toggleDoneItem(id) {
  setFlagState(doneMap, id, !doneIds.has(id));
  saveDoneIds();
  renderCurrentView(true);
}
function editExamTargetDate() {
  const next = prompt("Nhập ngày thi JLPT N1 mục tiêu (định dạng YYYY-MM-DD):", examTargetDate);
  if (next && /^\d{4}-\d{2}-\d{2}$/.test(next.trim())) {
    examTargetDate = next.trim();
    localStorage.setItem(KEYS.EXAM_DATE, examTargetDate);
    renderCurrentView(true);
    showToast("Đã cập nhật ngày thi mục tiêu: " + examTargetDate);
  }
}
function maziiUrl(word) {
  const clean = String(word || "").replace(/<[^>]+>/g, "").replace(/（[^）]*）|\([^)]*\)/g, "").trim();
  return "https://mazii.net/vi-VN/search/word/javi/" + encodeURIComponent(clean);
}
// ==================== NATURAL NATIVE JAPANESE TTS (/api/tts + FALLBACK) ====================
let ttsAudio = null;
let ttsSpeakSeq = 0;
let ttsCurrentCancel = null;
const ttsBlobCache = new Map();

function cleanJapaneseForTts(text) {
  return String(text || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/（[^）]*）|\([^)]*\)/g, "")
    .replace(/[★☆①②③④＿＿＿_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function splitJapaneseChunks(text, maxLen = 380) {
  const clean = cleanJapaneseForTts(text);
  if (!clean) return [];
  if (clean.length <= maxLen) return [clean];
  const parts = clean.split(/(?<=[。！？\n])/).map(s => s.trim()).filter(Boolean);
  const chunks = [];
  let buf = "";
  for (const p of parts) {
    if ((buf + p).length <= maxLen) {
      buf += p;
    } else {
      if (buf) chunks.push(buf);
      if (p.length <= maxLen) {
        buf = p;
      } else {
        for (let i = 0; i < p.length; i += maxLen) chunks.push(p.slice(i, i + maxLen));
        buf = "";
      }
    }
  }
  if (buf) chunks.push(buf);
  return chunks;
}

function ensureTtsAudio() {
  if (!ttsAudio) {
    ttsAudio = new Audio();
    ttsAudio.preload = "auto";
  }
  return ttsAudio;
}

function unlockTtsAudio() {
  try {
    const a = ensureTtsAudio();
    if (a.paused && !a.src) {
      // Silent 1-frame wav data URI to unlock audio on mobile Safari/Chrome inside user gesture
      a.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
      const p = a.play();
      if (p && p.catch) p.catch(() => {});
    }
  } catch {}
}

function stopJapaneseSpeech() {
  ttsSpeakSeq++;
  if (ttsCurrentCancel) {
    const fn = ttsCurrentCancel;
    ttsCurrentCancel = null;
    try { fn(); } catch {}
  }
  if (ttsAudio) {
    try {
      ttsAudio.onended = null;
      ttsAudio.onerror = null;
      ttsAudio.pause();
      ttsAudio.currentTime = 0;
    } catch {}
  }
  if ("speechSynthesis" in window) {
    try { window.speechSynthesis.cancel(); } catch {}
  }
}

function pickBestVoiceForLang(lang = "ja") {
  if (!("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices() || [];
  const prefix = lang === "vi" ? "vi" : "ja";
  const matched = voices.filter(v => (v.lang || "").toLowerCase().startsWith(prefix));
  if (!matched.length) return null;
  const preferred = lang === "vi"
    ? (ttsVoice === "male" ? ["namminh", "an", "google", "natural"] : ["hoaimy", "linh", "google", "natural"])
    : (ttsVoice === "male"
      ? ["keita", "hattori", "ichiro", "otoya", "google 日本語", "natural"]
      : ["nanami", "kyoko", "o-ren", "google 日本語", "haruka", "natural"]);
  for (const kw of preferred) {
    const hit = matched.find(v => (v.name || "").toLowerCase().includes(kw));
    if (hit) return hit;
  }
  return matched[0];
}

function speakWithBrowserFallback(text, seq, lang = "ja") {
  return new Promise((resolve) => {
    if (seq !== ttsSpeakSeq || !("speechSynthesis" in window)) { resolve(); return; }
    let settled = false;
    const done = () => {
      if (!settled) {
        settled = true;
        clearTimeout(guard);
        if (ttsCurrentCancel === done) ttsCurrentCancel = null;
        resolve();
      }
    };
    ttsCurrentCancel = done;
    const guard = setTimeout(done, Math.max(4000, text.length * 240));
    try {
      window.speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang === "vi" ? "vi-VN" : "ja-JP";
      u.rate = ttsRate;
      const v = pickBestVoiceForLang(lang);
      if (v) u.voice = v;
      u.onend = done;
      u.onerror = done;
      window.speechSynthesis.speak(u);
    } catch { done(); }
  });
}

async function fetchNaturalTtsUrl(chunk, lang = "ja") {
  const safeLang = lang === "vi" ? "vi" : "ja";
  const voiceKey = ttsVoice === "male" ? "male" : "female";
  const cacheKey = `${safeLang}::${voiceKey}::${chunk}`;
  if (ttsBlobCache.has(cacheKey)) return ttsBlobCache.get(cacheKey);
  if (!location.protocol.startsWith("http")) return null;
  const res = await fetch(`/api/tts?q=${encodeURIComponent(chunk)}&lang=${safeLang}&voice=${voiceKey}`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const ct = (res.headers.get("content-type") || "").toLowerCase();
  if (!ct.includes("audio")) throw new Error("Non-audio TTS response");
  const blob = await res.blob();
  if (!blob.size) throw new Error("Empty audio blob");
  const url = URL.createObjectURL(blob);
  if (ttsBlobCache.size >= 100) {
    const oldestKey = ttsBlobCache.keys().next().value;
    const oldestUrl = ttsBlobCache.get(oldestKey);
    ttsBlobCache.delete(oldestKey);
    try { URL.revokeObjectURL(oldestUrl); } catch {}
  }
  ttsBlobCache.set(cacheKey, url);
  return url;
}

function playAudioUrlAsync(url, seq, estMs) {
  return new Promise((resolve, reject) => {
    if (seq !== ttsSpeakSeq) { resolve(); return; }
    const a = ensureTtsAudio();
    let settled = false;
    const finish = (isErr = false) => {
      if (settled) return;
      settled = true;
      clearTimeout(guard);
      a.onended = null;
      a.onerror = null;
      if (ttsCurrentCancel === cancelFn) ttsCurrentCancel = null;
      if (isErr) reject(new Error("Audio playback error"));
      else resolve();
    };
    const cancelFn = () => {
      try { a.pause(); } catch {}
      finish(false);
    };
    ttsCurrentCancel = cancelFn;
    const guard = setTimeout(() => finish(false), Math.max(6000, estMs));
    a.onended = () => finish(false);
    a.onerror = () => finish(true);
    a.src = url;
    a.playbackRate = ttsRate;
    const p = a.play();
    if (p && p.catch) p.catch(() => finish(true));
  });
}

async function speakSegmentAsync(text, lang = "ja") {
  const safeLang = lang === "vi" ? "vi" : "ja";
  const clean = String(text || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/[★☆①②③④＿＿＿_]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean) return;
  stopJapaneseSpeech();
  const seq = ttsSpeakSeq;

  const chunks = clean.length <= 360 ? [clean] : splitJapaneseChunks(clean, 360);
  for (const chunk of chunks) {
    if (seq !== ttsSpeakSeq) return;
    try {
      const url = await fetchNaturalTtsUrl(chunk, safeLang);
      if (seq !== ttsSpeakSeq) return;
      if (url) {
        await playAudioUrlAsync(url, seq, Math.round((chunk.length * 240 + 3000) / Math.max(0.6, ttsRate)));
        continue;
      }
    } catch {
      // Fallback to browser voice when offline or blocked
    }
    if (seq !== ttsSpeakSeq) return;
    await speakWithBrowserFallback(chunk, seq, safeLang);
  }
}

async function speakJapaneseAsync(text) {
  const chunks = splitJapaneseChunks(text, 380);
  if (!chunks.length) return;
  stopJapaneseSpeech();
  const seq = ttsSpeakSeq;

  for (const chunk of chunks) {
    if (seq !== ttsSpeakSeq) return;
    try {
      const url = await fetchNaturalTtsUrl(chunk, "ja");
      if (seq !== ttsSpeakSeq) return;
      if (url) {
        await playAudioUrlAsync(url, seq, Math.round((chunk.length * 220 + 2500) / Math.max(0.6, ttsRate)));
        continue;
      }
    } catch {
      // Fallback to best browser Japanese voice when offline or blocked
    }
    if (seq !== ttsSpeakSeq) return;
    await speakWithBrowserFallback(chunk, seq, "ja");
  }
}

function speakJapanese(text) {
  stopStudyReader(true);
  unlockTtsAudio();
  speakJapaneseAsync(text);
}

// ==================== BILINGUAL FULL-ARTICLE CONTINUOUS READER (JP + VI) ====================
let studyReaderPlaying = false;
let studyReaderPaused = false;
let studyReaderRunId = 0;
let studyReaderCardIdx = 0;
let studyReaderWakeLock = null;
let studyReaderPauseResolve = null;

function splitBilingualSegments(rawText) {
  const cleaned = String(rawText || "")
    .replace(/[★☆●•▪◆■▶▼※→←↔⇒⇔|]/g, " ")
    .replace(/＿＿＿+|___+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!cleaned) return [];

  // Match Japanese runs (Hiragana, Katakana, Kanji + Japanese punctuation) vs non-Japanese runs
  const jpRunRe = /[\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff][\u3040-\u309f\u30a0-\u30ff\u4e00-\u9fff\u3000-\u303f\uff01-\uff600-9\s・ー〜～「」『』（）【】、。！？]*/g;
  const rawSegs = [];
  let lastIdx = 0;
  let m;
  while ((m = jpRunRe.exec(cleaned)) !== null) {
    if (m.index > lastIdx) {
      const viPart = cleaned.slice(lastIdx, m.index).trim();
      if (viPart) rawSegs.push({ lang: "vi", text: viPart });
    }
    const jpPart = m[0].trim();
    if (jpPart) rawSegs.push({ lang: "ja", text: jpPart });
    lastIdx = m.index + m[0].length;
  }
  if (lastIdx < cleaned.length) {
    const tail = cleaned.slice(lastIdx).trim();
    if (tail) rawSegs.push({ lang: "vi", text: tail });
  }

  // Filter pure punctuation/symbols and merge adjacent same-language segments
  const merged = [];
  for (const seg of rawSegs) {
    const t = seg.text.replace(/^[\s\-–—:;,.()\[\]\/]+|[\s\-–—:;,()\[\]\/]+$/g, "").trim();
    if (!t) continue;
    // Skip tiny non-alphanumeric / non-JP fragments
    if (!/[\u3040-\u30ff\u4e00-\u9fffA-Za-zÀ-ỹ0-9]/.test(t)) continue;
    if (merged.length && merged[merged.length - 1].lang === seg.lang && (merged[merged.length - 1].text.length + t.length + 2) <= 340) {
      merged[merged.length - 1].text += (seg.lang === "ja" ? "。" : ". ") + t;
    } else {
      merged.push({ lang: seg.lang, text: t });
    }
  }

  // Ensure no segment exceeds 360 chars
  const finalSegs = [];
  for (const seg of merged) {
    if (seg.text.length <= 360) {
      finalSegs.push(seg);
    } else {
      const subParts = seg.text.split(/(?<=[。！？.!?\n])/).map(s => s.trim()).filter(Boolean);
      let buf = "";
      for (const p of subParts) {
        if ((buf + " " + p).trim().length <= 360) {
          buf = (buf ? buf + " " : "") + p;
        } else {
          if (buf) finalSegs.push({ lang: seg.lang, text: buf });
          buf = p.slice(0, 360);
        }
      }
      if (buf) finalSegs.push({ lang: seg.lang, text: buf });
    }
  }
  return finalSegs;
}

function extractCleanBlocksFromContainer(containerEl) {
  if (!containerEl) return [];
  const clone = containerEl.cloneNode(true);
  clone.querySelectorAll("button, .inline-quiz-bar, .note-box, .toggle-ans-btn, .mazii-link, .pill-star, .bm-btn, .tts-btn, .sr-only, script, style").forEach(el => el.remove());

  const blocks = [];
  const blockEls = clone.querySelectorAll("h2, h3, h4, p, li, tr, blockquote");
  if (blockEls.length) {
    blockEls.forEach(el => {
      if (el.closest("li") && el.tagName !== "LI") return;
      if (el.closest("tr") && el.tagName !== "TR") return;
      if (el.closest("blockquote") && el.tagName !== "BLOCKQUOTE") return;
      let txt = "";
      if (el.tagName === "TR") {
        const cells = Array.from(el.querySelectorAll("th, td"))
          .map(c => (c.textContent || "").replace(/\s+/g, " ").trim())
          .filter(Boolean);
        txt = cells.join(" — ");
      } else {
        txt = (el.textContent || "").replace(/\s+/g, " ").trim();
      }
      if (txt && !/^[-–—:|]+$/.test(txt)) blocks.push(txt);
    });
  } else {
    const txt = (clone.textContent || "").replace(/\s+/g, " ").trim();
    if (txt) blocks.push(txt);
  }
  return blocks;
}

function extractCardReadableSegments(cardEl, fallbackTitle, includeSessionHeading = "") {
  if (!cardEl) return [];
  const blocks = [];
  if (includeSessionHeading) blocks.push(includeSessionHeading);
  if (fallbackTitle) blocks.push(fallbackTitle);

  const promptEl = cardEl.querySelector(".jp-prompt");
  const answerEl = cardEl.querySelector(".q-answer");

  if (promptEl || answerEl) {
    if (promptEl) blocks.push(...extractCleanBlocksFromContainer(promptEl));
    if (answerEl) blocks.push(...extractCleanBlocksFromContainer(answerEl));
  } else {
    // Fallback: clone entire card minus head & note-box
    const clone = cardEl.cloneNode(true);
    clone.querySelectorAll(".card-head, .note-box, .inline-quiz-bar, .toggle-ans-btn, button").forEach(el => el.remove());
    blocks.push(...extractCleanBlocksFromContainer(clone));
  }

  const allSegs = [];
  for (const line of blocks) {
    const segs = splitBilingualSegments(line);
    for (const s of segs) allSegs.push(s);
  }
  return allSegs;
}

function isTocOrIntroCard(cardEl) {
  const title = (cardEl?.querySelector(".card-title")?.textContent || "").toLowerCase();
  const sess = (cardEl?.dataset?.session || "").toLowerCase();
  if (title.includes("mục lục") || title.includes("muc luc") || title.includes("tổng quan khóa") || title.includes("hướng dẫn")) return true;
  if (!cardEl?.dataset?.qId && (sess.includes("tổng quan") || title === "tổng quan buổi học") && !cardEl.querySelector(".jp-prompt")) return true;
  return false;
}

function updateStudyAudioBarUI({ open = true, lang = "ja", title = "", snippet = "" } = {}) {
  const bar = document.getElementById("studyAudioBar");
  if (!bar) return;
  bar.classList.toggle("open", open);
  if (!open) return;
  const langEl = document.getElementById("studyAudioLang");
  const titleEl = document.getElementById("studyAudioTitle");
  const snipEl = document.getElementById("studyAudioSnippet");
  const pauseBtn = document.getElementById("studyAudioPauseBtn");
  if (langEl) {
    langEl.textContent = lang === "vi" ? (ttsVoice === "male" ? "VI · Nam Minh" : "VI · Hoài My") : (ttsVoice === "male" ? "JP · Keita" : "JP · Nanami");
    langEl.classList.toggle("vi", lang === "vi");
  }
  if (titleEl && title) titleEl.textContent = title;
  if (snipEl && snippet) snipEl.textContent = snippet;
  if (pauseBtn) pauseBtn.textContent = studyReaderPaused ? "Tiếp tục" : "Tạm dừng";
}

function syncStudyReaderButtons() {
  const topBtn = document.getElementById("studyReadAllBtn");
  if (topBtn) {
    topBtn.className = `btn ${studyReaderPlaying ? "btn-active-vermilion" : "btn-indigo"}`;
    topBtn.innerHTML = `${studyReaderPlaying ? ICONS.pause : ICONS.play}<span>${studyReaderPlaying ? "Dừng nghe toàn bài" : "Nghe toàn bài (Nhật + Việt)"}</span>`;
  }
}

function clearReadingCardHighlights() {
  document.querySelectorAll(".study-card.is-reading-active").forEach(el => el.classList.remove("is-reading-active"));
}

function waitIfStudyReaderPaused(runId) {
  if (!studyReaderPaused) return Promise.resolve(studyReaderPlaying && studyReaderRunId === runId);
  return new Promise(resolve => {
    studyReaderPauseResolve = () => resolve(studyReaderPlaying && studyReaderRunId === runId);
  });
}

function toggleStudyReaderPause() {
  if (!studyReaderPlaying) return;
  studyReaderPaused = !studyReaderPaused;
  if (studyReaderPaused) {
    if (ttsAudio) { try { ttsAudio.pause(); } catch {} }
    if ("speechSynthesis" in window) { try { window.speechSynthesis.pause(); } catch {} }
  } else {
    if (ttsAudio && ttsAudio.src && ttsAudio.paused && !ttsAudio.ended) {
      const p = ttsAudio.play();
      if (p && p.catch) p.catch(() => {});
    }
    if ("speechSynthesis" in window) { try { window.speechSynthesis.resume(); } catch {} }
    if (studyReaderPauseResolve) {
      const fn = studyReaderPauseResolve;
      studyReaderPauseResolve = null;
      fn();
    }
  }
  updateStudyAudioBarUI({ open: true });
}

function stopStudyReader(silent = false) {
  const wasPlaying = studyReaderPlaying;
  studyReaderPlaying = false;
  studyReaderPaused = false;
  studyReaderRunId++;
  if (studyReaderPauseResolve) {
    const fn = studyReaderPauseResolve;
    studyReaderPauseResolve = null;
    fn();
  }
  if (wasPlaying) stopJapaneseSpeech();
  clearReadingCardHighlights();
  if (studyReaderWakeLock) { try { studyReaderWakeLock.release(); } catch {} studyReaderWakeLock = null; }
  updateStudyAudioBarUI({ open: false });
  syncStudyReaderButtons();
  if (!silent && wasPlaying) showToast("Đã dừng đọc toàn bài");
}

let studyReaderQueue = [];
let studyReaderQueuePos = 0;

function stepStudyReader(delta) {
  if (!studyReaderPlaying || !studyReaderQueue.length) return;
  const nextPos = Math.max(0, Math.min(studyReaderQueue.length - 1, studyReaderQueuePos + delta));
  runStudyReaderQueue(studyReaderQueue, nextPos);
}

function toggleStudyReader() {
  if (studyReaderPlaying) {
    stopStudyReader(false);
    return;
  }
  const allCards = Array.from(document.querySelectorAll("#stageRoot .study-card"));
  const contentCards = allCards.filter(c => !isTocOrIntroCard(c));
  const queue = contentCards.length ? contentCards : allCards;
  if (!queue.length) { showToast("Chưa có bài học để đọc"); return; }
  runStudyReaderQueue(queue, 0);
}

function startStudyReaderSession(sessionTitle) {
  const allCards = Array.from(document.querySelectorAll("#stageRoot .study-card"));
  const sessCards = allCards.filter(c => (c.dataset.session || "") === sessionTitle && !isTocOrIntroCard(c));
  const queue = sessCards.length ? sessCards : allCards.filter(c => (c.dataset.session || "") === sessionTitle);
  if (!queue.length) { showToast("Không tìm thấy nội dung trong buổi này"); return; }
  runStudyReaderQueue(queue, 0);
}

function startStudyReaderSingle(cardIdx) {
  const cardEl = document.getElementById("list-item-" + cardIdx);
  if (!cardEl) return;
  runStudyReaderQueue([cardEl], 0);
}

function startStudyReader(startIdx = 0) {
  const allCards = Array.from(document.querySelectorAll("#stageRoot .study-card"));
  if (!allCards.length) { showToast("Chưa có bài học để đọc"); return; }
  const startEl = document.getElementById("list-item-" + startIdx) || allCards[0];
  const fromIdx = Math.max(0, allCards.indexOf(startEl));
  const queue = allCards.slice(fromIdx).filter((c, i) => i === 0 || !isTocOrIntroCard(c));
  runStudyReaderQueue(queue, 0);
}

async function runStudyReaderQueue(queue, startPos = 0) {
  if (!queue || !queue.length) { showToast("Chưa có bài học để đọc"); return; }

  stopFlashcardAutoplay(true);
  stopStudyReader(true);
  unlockTtsAudio();

  studyReaderQueue = queue;
  studyReaderQueuePos = Math.max(0, Math.min(startPos, queue.length - 1));
  studyReaderPlaying = true;
  studyReaderPaused = false;
  const runId = ++studyReaderRunId;
  syncStudyReaderButtons();

  if (navigator.wakeLock?.request) {
    navigator.wakeLock.request("screen").then(wl => {
      if (studyReaderPlaying && studyReaderRunId === runId) studyReaderWakeLock = wl;
      else try { wl.release(); } catch {}
    }).catch(() => {});
  }

  let lastAnnouncedSession = "";
  for (let i = studyReaderQueuePos; i < queue.length; i++) {
    if (!studyReaderPlaying || studyReaderRunId !== runId || !STUDY_TABS.includes(currentTab)) break;
    studyReaderQueuePos = i;
    const cardEl = queue[i];
    const title = (cardEl.querySelector(".card-title")?.textContent || `Mục ${i + 1}`).trim();
    const sessTitle = (cardEl.dataset.session || "").trim();
    const announceSess = (sessTitle && sessTitle !== lastAnnouncedSession && queue.length > 1) ? sessTitle : "";
    if (sessTitle) lastAnnouncedSession = sessTitle;

    clearReadingCardHighlights();
    cardEl.classList.add("is-reading-active");
    try { cardEl.scrollIntoView({ behavior: "smooth", block: "nearest" }); } catch {}

    const segments = extractCardReadableSegments(cardEl, title, announceSess);
    if (!segments.length) continue;

    for (let sIdx = 0; sIdx < segments.length; sIdx++) {
      if (!studyReaderPlaying || studyReaderRunId !== runId) break;
      if (!(await waitIfStudyReaderPaused(runId))) break;

      const seg = segments[sIdx];
      updateStudyAudioBarUI({
        open: true,
        lang: seg.lang,
        title: `[${i + 1}/${queue.length}] ${title}`,
        snippet: seg.text
      });

      // Prefetch next segment in background so JP <-> VI transitions are seamless
      const nextSeg = segments[sIdx + 1];
      if (nextSeg) {
        fetchNaturalTtsUrl(nextSeg.text, nextSeg.lang).catch(() => {});
      }

      await speakSegmentAsync(seg.text, seg.lang);
      if (!studyReaderPlaying || studyReaderRunId !== runId) break;
      if (!(await waitIfStudyReaderPaused(runId))) break;
    }
  }

  if (studyReaderRunId === runId) {
    const completed = studyReaderPlaying;
    stopStudyReader(true);
    if (completed) showToast("Đã đọc xong!");
  }
}

// ==================== THEME ====================
function initTheme() {
  const saved = localStorage.getItem(KEYS.THEME) || "light";
  document.documentElement.setAttribute("data-theme", saved);
  document.getElementById("themeBtn").innerHTML = saved === "dark" ? ICONS.sun : ICONS.moon;
}
function toggleTheme() {
  const cur = document.documentElement.getAttribute("data-theme");
  const next = cur === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(KEYS.THEME, next);
  document.getElementById("themeBtn").innerHTML = next === "dark" ? ICONS.sun : ICONS.moon;
}

// ==================== MARKDOWN PARSER ====================
function renderMdFragment(mdText) {
  if (!mdText) return "";
  if (window.marked) { marked.setOptions({ gfm: true, breaks: false }); return marked.parse(mdText); }
  return "<pre>" + escapeHtml(mdText) + "</pre>";
}

function parseMarkdownToSections(mdText) {
  const lines = mdText.replace(/\r\n/g, "\n").split("\n");
  const sessions = [];
  let curSession = null, curBlockLines = [], curBlockTitle = null, curBlockType = "intro";

  function flushBlock() {
    if (!curSession) return;
    const bodyMd = curBlockLines.join("\n").trim();
    if (!bodyMd && !curBlockTitle) { curBlockLines = []; return; }
    curSession.blocks.push({ type: curBlockType, title: curBlockTitle || "", body_md: bodyMd });
    curBlockLines = []; curBlockTitle = null; curBlockType = "section";
  }

  for (const line of lines) {
    if (line.startsWith("# ")) {
      flushBlock();
      curSession = { title: line.slice(2).trim(), blocks: [] };
      sessions.push(curSession);
      curBlockType = "intro"; curBlockTitle = null; curBlockLines = [];
    } else if (!curSession) {
      curSession = { title: "Tổng quan", blocks: [] };
      sessions.push(curSession);
      curBlockLines.push(line);
    } else if (line.startsWith("### ")) {
      flushBlock(); curBlockTitle = line.slice(4).trim(); curBlockType = "question"; curBlockLines = [];
    } else if (line.startsWith("## ")) {
      flushBlock();
      const h2 = line.slice(3).trim();
      curBlockTitle = h2;
      const u = h2.toUpperCase();
      curBlockType = (u.includes("CHEAT SHEET") || u.includes("BẢNG TỔNG KẾT")) ? "cheatsheet" : "section";
      curBlockLines = [];
    } else {
      curBlockLines.push(line);
    }
  }
  flushBlock();
  return sessions;
}

function enhanceCheatsheetTable(htmlStr, sessionTitle, tabId, collectWords = false) {
  const tmp = document.createElement("div");
  tmp.innerHTML = htmlStr;
  tmp.querySelectorAll("table").forEach(table => {
    const theadRow = table.querySelector("thead tr");
    if (theadRow) {
      const th = document.createElement("th");
      th.textContent = "Lưu";
      theadRow.insertBefore(th, theadRow.firstChild);
    }
    table.querySelectorAll("tbody tr").forEach(tr => {
      const cells = tr.querySelectorAll("td");
      if (!cells.length) return;
      const wordText = (cells[0]?.textContent || "").trim();
      const readingText = (cells[1]?.textContent || "").trim();
      const meaningText = (cells[2]?.textContent || "").trim();
      const itemId = `word::${tabId}::${wordText}::${readingText}`;
      tr.dataset.bmRow = itemId;

      if (collectWords && wordText && JP_RE.test(wordText)) {
        cheatWordsBank.push({ id: itemId, kind: "word", title: wordText, sub: readingText, note: meaningText, session: sessionTitle });
      }

      const td = document.createElement("td");
      td.className = "bm-cell";
      const btn = document.createElement("button");
      btn.className = "bm-btn";
      btn.dataset.bmId = itemId;
      btn.dataset.bmKind = "word";
      btn.dataset.bmTitle = wordText;
      btn.dataset.bmSub = readingText;
      btn.dataset.bmNote = meaningText;
      btn.dataset.bmSession = sessionTitle;
      btn.innerHTML = ICONS.star;
      td.appendChild(btn);
      tr.insertBefore(td, tr.firstChild);
    });
    const wrap = document.createElement("div");
    wrap.className = "table-wrap";
    table.parentNode.insertBefore(wrap, table);
    wrap.appendChild(table);
  });
  return tmp.innerHTML;
}

function makeCodePillsClickable(htmlStr, sessionTitle) {
  const tmp = document.createElement("div");
  tmp.innerHTML = htmlStr;
  tmp.querySelectorAll("code").forEach(codeEl => {
    if (codeEl.closest("pre")) return;
    const plain = (codeEl.textContent || "").trim();
    if (!plain || !JP_RE.test(plain) || plain.length > 60) return;
    if (/^[1-4１-４][.．]/.test(plain)) return;
    const itemId = `term::${plain}`;
    codeEl.classList.add("jp-pill");
    codeEl.dataset.bmId = itemId;
    codeEl.dataset.bmKind = "term";
    codeEl.dataset.bmTitle = plain;
    codeEl.dataset.bmSub = "";
    codeEl.dataset.bmNote = `Từ mở rộng (${sessionTitle})`;
    codeEl.dataset.bmSession = sessionTitle;
    codeEl.title = "Bấm để Bookmark từ này";
    const star = document.createElement("span");
    star.className = "pill-star";
    star.textContent = "☆";
    codeEl.appendChild(star);
  });
  return tmp.innerHTML;
}

function buildTabItems(tabId, mdText) {
  if (!mdText || !mdText.trim()) return [];
  const sessions = parseMarkdownToSections(mdText);
  const items = [];
  sessions.forEach((sess, sIdx) => {
    const sTitle = sess.title;
    sess.blocks.forEach((blk, bIdx) => {
      const bMd = blk.body_md;
      const bTitle = blk.title || (blk.type === "intro" ? "Tổng quan buổi học" : `Mục ${bIdx + 1}`);
      if (blk.type === "intro" && !bMd.replace(/[-*_]/g, "").trim()) return;

      if (blk.type === "question") {
        const parts = bMd.split(/\n?\*\(Khoảng trống tự nhẩm đáp án\)\*\n?/);
        let promptHtml = "", answerHtml = "", promptPlain = "";
        if (parts.length >= 2) {
          promptHtml = renderMdFragment(parts[0]);
          answerHtml = makeCodePillsClickable(renderMdFragment(parts.slice(1).join("\n")), sTitle);
          promptPlain = parts[0].replace(/<[^>]+>/g, "").replace(/[`*#>]/g, "").trim();
        } else {
          answerHtml = makeCodePillsClickable(renderMdFragment(bMd), sTitle);
          promptPlain = bMd.split("\n")[0].replace(/<[^>]+>/g, "").replace(/[`*#>]/g, "").trim();
        }
        const qId = `q::${tabId}::${sIdx}::${blk.title}`;
        const jpSentence = (promptPlain.split("\n").find(l => JP_RE.test(l)) || "").trim();
        const dayMatch = sTitle.match(/NGÀY\s*\d+/i);
        const dayTag = dayMatch ? dayMatch[0].toUpperCase().replace(/\s+/, " ") : "KHÁC";
        const ansM = (parts.length >= 2 ? parts.slice(1).join("\n") : bMd).match(/Đáp án(?:\s*\(★\))?:\**\s*`?([1-4])/);
        const correctNum = ansM ? parseInt(ansM[1], 10) : 0;
        items.push({
          id: qId, tabId, dayTag, correctNum, type: "question", sessionTitle: sTitle, title: blk.title,
          shortLabel: blk.title.replace(/`\[[^\]]+\]`/g, "").trim(),
          preview: jpSentence || promptPlain.slice(0, 120),
          jpText: jpSentence, promptHtml, answerHtml,
          searchText: (sTitle + " " + blk.title + " " + bMd).toLowerCase()
        });
      } else if (blk.type === "cheatsheet") {
        let html = enhanceCheatsheetTable(renderMdFragment(bMd), sTitle, tabId, true);
        html = makeCodePillsClickable(html, sTitle);
        items.push({
          id: `cs::${tabId}::${sIdx}::${bIdx}`, tabId, type: "cheatsheet", sessionTitle: sTitle,
          title: bTitle, shortLabel: bTitle, preview: "", jpText: "",
          promptHtml: "", answerHtml: html,
          searchText: (sTitle + " " + bTitle + " " + bMd).toLowerCase()
        });
      } else {
        const html = makeCodePillsClickable(renderMdFragment(bMd), sTitle);
        items.push({
          id: `sec::${tabId}::${sIdx}::${bIdx}`, tabId, type: "section", sessionTitle: sTitle,
          title: bTitle, shortLabel: bTitle, preview: "", jpText: "",
          promptHtml: "", answerHtml: html,
          searchText: (sTitle + " " + bTitle + " " + bMd).toLowerCase()
        });
      }
    });
  });
  return items;
}

function extractQuizQuestions(tabId, mdText) {
  if (!mdText) return [];
  const sessions = parseMarkdownToSections(mdText);
  const questions = [];
  sessions.forEach((sess, sIdx) => {
    sess.blocks.forEach(blk => {
      if (blk.type !== "question") return;
      const parts = blk.body_md.split(/\n?\*\(Khoảng trống tự nhẩm đáp án\)\*\n?/);
      if (parts.length < 2) return;
      const promptMd = parts[0].trim();
      const answerMd = parts.slice(1).join("\n").trim();
      const ansMatch = answerMd.match(/Đáp án(?:\s*\(★\))?:\**\s*`?([1-4])/);
      if (!ansMatch) return;
      const correctNum = parseInt(ansMatch[1], 10);

      let options = [], cleanPromptMd = promptMd;
      const btMatches = [...promptMd.matchAll(/`([1-4])\.\s*([^`]+)`/g)];
      if (btMatches.length >= 4) {
        const byNum = {};
        btMatches.forEach(m => { byNum[m[1]] = m[2].trim(); });
        if (byNum["1"] && byNum["2"] && byNum["3"] && byNum["4"]) {
          options = [byNum["1"], byNum["2"], byNum["3"], byNum["4"]];
          cleanPromptMd = promptMd.split("\n").filter(l => !/`[1-4]\./.test(l)).join("\n").trim();
        }
      }
      if (options.length !== 4) {
        const byNum = {}, kept = [];
        promptMd.split("\n").forEach(line => {
          const m = line.match(/^\s*([1-4])\.\s+(.+)$/);
          if (m && !byNum[m[1]]) byNum[m[1]] = m[2].trim();
          else kept.push(line);
        });
        if (byNum["1"] && byNum["2"] && byNum["3"] && byNum["4"]) {
          options = [byNum["1"], byNum["2"], byNum["3"], byNum["4"]];
          cleanPromptMd = kept.join("\n").trim();
        }
      }
      if (options.length !== 4) return;
      const qId = `q::${tabId}::${sIdx}::${blk.title}`;
      const firstLine = (cleanPromptMd.split("\n")[0] || "").replace(/<[^>]+>/g, "").replace(/[`*#>]/g, "").trim();
      const dayMatch = sess.title.match(/NGÀY\s*\d+/i);
      const dayTag = dayMatch ? dayMatch[0].toUpperCase().replace(/\s+/, " ") : "KHÁC";
      const isStar = blk.title.includes("★") || cleanPromptMd.includes("＿★＿");

      questions.push({
        id: qId, tabId, dayTag, isStar,
        categoryLabel: tabId === "tuvung" ? "Từ vựng" : "Ngữ pháp",
        sessionTitle: sess.title, title: blk.title,
        promptHtml: renderMdFragment(cleanPromptMd),
        promptPlain: firstLine,
        options, longOpts: options.some(o => o.length > 22),
        correct: correctNum,
        explanationHtml: renderMdFragment(answerMd)
      });
    });
  });
  return questions;
}


function extractReadingQuestions(mdText) {
  if (!mdText) return [];
  const sessions = parseMarkdownToSections(mdText);
  const questions = [];
  sessions.forEach((sess, sIdx) => {
    const dayMatch = sess.title.match(/NGÀY\s*\d+/i);
    const dayTag = dayMatch ? dayMatch[0].toUpperCase().replace(/\s+/, " ") : "KHÁC";
    sess.blocks.forEach((blk) => {
      if (blk.type !== "question") return;
      const body = blk.body_md;
      const subParts = body.split(/\n(?=#### )/);
      const chunks = subParts.length > 1
        ? subParts.slice(1).map((sub, i) => ({
            passageMd: subParts[0].trim(),
            title: `${blk.title.replace(/`\[[^\]]+\]`/g, "").trim()} — ${sub.split("\n")[0].replace(/^####\s*/, "").trim()}`,
            contentMd: sub.split("\n").slice(1).join("\n").trim(),
            qId: `q::dochieu::${sIdx}::${blk.title}::${i}`
          }))
        : [{
            passageMd: "",
            title: blk.title.replace(/`\[[^\]]+\]`/g, "").trim(),
            contentMd: body,
            qId: `q::dochieu::${sIdx}::${blk.title}`
          }];

      chunks.forEach((ch) => {
        const parts = ch.contentMd.split(/\n?\*\(Khoảng trống tự nhẩm đáp án\)\*\n?/);
        if (parts.length < 2) return;
        const promptMd = parts[0].trim();
        const answerMd = parts.slice(1).join("\n").trim();
        const ansMatch = answerMd.match(/Đáp án(?:\s*\(★\))?:\**\s*`?([1-4])/);
        if (!ansMatch) return;
        const correctNum = parseInt(ansMatch[1], 10);

        const byNum = {}, kept = [];
        promptMd.split("\n").forEach(line => {
          const m = line.match(/^\s*(?:[-*]\s*)?`?([1-4])\.\s+(.+?)`?\s*$/);
          if (m && !byNum[m[1]]) byNum[m[1]] = m[2].trim();
          else kept.push(line);
        });
        let options = [];
        if (byNum["1"] && byNum["2"] && byNum["3"] && byNum["4"]) {
          options = [byNum["1"], byNum["2"], byNum["3"], byNum["4"]];
        } else {
          const btMatches = [...promptMd.matchAll(/`([1-4])\.\s*([^`]+)`/g)];
          if (btMatches.length >= 4) {
            const b = {};
            btMatches.forEach(m => { b[m[1]] = m[2].trim(); });
            if (b["1"] && b["2"] && b["3"] && b["4"]) options = [b["1"], b["2"], b["3"], b["4"]];
          }
        }
        if (options.length !== 4) {
          // Support table-formatted options like `| **1. 西田さん** | ... |`
          const tblOpts = {};
          promptMd.split("\n").forEach(line => {
            const tm = line.match(/^\|\s*\*\*([1-4])\.\s*([^|*]+)\*\*/);
            if (tm && !tblOpts[tm[1]]) tblOpts[tm[1]] = tm[2].trim();
          });
          if (tblOpts["1"] && tblOpts["2"] && tblOpts["3"] && tblOpts["4"]) {
            options = [tblOpts["1"], tblOpts["2"], tblOpts["3"], tblOpts["4"]];
          }
        }
        if (options.length !== 4) return;

        const cleanPromptMd = kept.join("\n").trim();
        const firstLine = (cleanPromptMd.split("\n")[0] || ch.title).replace(/<[^>]+>/g, "").replace(/[`*#>]/g, "").trim();
        questions.push({
          id: ch.qId,
          tabId: "dochieu",
          dayTag,
          isStar: false,
          categoryLabel: "Đọc hiểu",
          sessionTitle: sess.title,
          title: ch.title,
          passageHtml: ch.passageMd ? renderMdFragment(ch.passageMd) : "",
          promptHtml: renderMdFragment(cleanPromptMd),
          promptPlain: firstLine,
          options,
          longOpts: true,
          correct: correctNum,
          explanationHtml: renderMdFragment(answerMd)
        });
      });
    });
  });
  return questions;
}

function findStudyItemById(id) {
  for (const t of STUDY_TABS) {
    const f = (tabItems[t] || []).find(it => it.id === id);
    if (f) return f;
  }
  return null;
}

function rebuildAllContent() {
  cheatWordsBank = [];
  tabItems.tuvung = buildTabItems("tuvung", mdStore.tuvung);
  tabItems.nguphap = buildTabItems("nguphap", mdStore.nguphap);
  tabItems.dochieu = buildTabItems("dochieu", mdStore.dochieu);
  tabItems.nghehieu = buildTabItems("nghehieu", mdStore.nghehieu);
  parsedQuizBank = [
    ...extractQuizQuestions("tuvung", mdStore.tuvung),
    ...extractQuizQuestions("nguphap", mdStore.nguphap),
    ...extractReadingQuestions(mdStore.dochieu)
  ];
  if (currentTab === "flashcard" && !fcAutoPlaying) buildFlashcardDeck(true);
  renderCurrentView();
  syncBookmarkBadgesOnly();
}

// ==================== CONTINUOUS VERTICAL SCROLL STUDY VIEW ====================
function getFilteredItems(tabId) {
  const q = (document.getElementById("searchInput")?.value || "").trim().toLowerCase();
  return (tabItems[tabId] || []).filter(item => {
    const matchQ = !q || item.searchText.includes(q);
    const matchBm = !onlyBookmarked || isItemBookmarked(item);
    const matchUndone = !onlyUndone || (item.type === "question" && !doneIds.has(item.id));
    const matchWrong = !onlyWrong || (item.type === "question" && wrongIds.has(item.id));
    return matchQ && matchBm && matchUndone && matchWrong;
  });
}

function renderMiniDashboardHtml() {
  const allQs = STUDY_TABS.flatMap(t => tabItems[t] || []).filter(it => it.type === "question");
  const totalQ = allQs.length;
  const doneQ = allQs.filter(it => doneIds.has(it.id)).length;
  const avgPct = examHistory.length ? Math.round(examHistory.reduce((s, h) => s + (h.pct || 0), 0) / examHistory.length) : null;
  const targetMs = new Date(examTargetDate + "T00:00:00").getTime();
  const daysLeft = Math.ceil((targetMs - Date.now()) / 86400000);
  const daysText = isNaN(daysLeft) ? "--" : (daysLeft > 0 ? `Còn ${daysLeft} ngày` : (daysLeft === 0 ? "Hôm nay!" : "Đã qua"));

  // Compute day-by-day progress across all 3 skills
  const dayStats = {};
  allQs.forEach(q => {
    const d = q.dayTag || "KHÁC";
    if (d === "KHÁC") return;
    if (!dayStats[d]) dayStats[d] = { total: 0, done: 0 };
    dayStats[d].total++;
    if (doneIds.has(q.id)) dayStats[d].done++;
  });
  const sortedDays = Object.keys(dayStats).sort((a, b) => a.localeCompare(b, "vi", { numeric: true }));
  const dayStripHtml = sortedDays.length ? `
    <div class="day-prog-strip">
      ${sortedDays.map(d => {
        const st = dayStats[d];
        const pct = st.total ? Math.round((st.done / st.total) * 100) : 0;
        return `
          <div class="day-chip" onclick="jumpToDay('${d}')" title="Nhảy tới ${d} (hoặc bấm để xem tiến độ)">
            <div class="day-chip-top">
              <span>${d}</span>
              <span style="color:${pct===100?'var(--matcha)':'var(--muted)'};">${pct}% (${st.done}/${st.total})</span>
            </div>
            <div class="day-chip-bar"><div class="day-chip-fill" style="width:${pct}%"></div></div>
          </div>
        `;
      }).join("")}
    </div>
  ` : "";

  return `
    <div class="mini-dash">
      <div class="dash-stat clickable" onclick="editExamTargetDate()" title="Bấm để đổi ngày thi mục tiêu">
        <span class="dash-label">Đếm ngược JLPT N1 (${escapeHtml(examTargetDate)})</span>
        <span class="dash-val accent">${daysText}</span>
      </div>
      <div class="dash-stat">
        <span class="dash-label">Tiến độ đã học (tự đếm)</span>
        <span class="dash-val ok" id="dashDoneVal">${doneQ} / ${totalQ} câu</span>
      </div>
      <div class="dash-stat">
        <span class="dash-label">Flashcard thuộc · Thi TB</span>
        <span class="dash-val">${masteredIds.size} thẻ · ${avgPct !== null ? avgPct + "%" : "--"}</span>
      </div>
      <div class="dash-drill-card" onclick="startQuick5MinDrill()" title="Tự chọn 10 câu yếu nhất (Hay sai → Bookmark → Chưa học)">
        <span class="dash-label" style="color:var(--vermilion);">Ôn cấp tốc 5 phút</span>
        <span class="dash-val accent" style="font-size:15px;">Luyện 10 câu yếu nhất →</span>
      </div>
    </div>
    ${dayStripHtml}
  `;
}

function jumpToDay(dayTag) {
  const list = getFilteredItems(currentTab);
  const idx = list.findIndex(it => (it.dayTag || "") === dayTag || (it.sessionTitle || "").toUpperCase().includes(dayTag));
  if (idx !== -1) {
    scrollToStudyItem(idx);
  } else {
    showToast(`Không có mục nào của ${dayTag} trong tab hiện tại`);
  }
}

function startQuick5MinDrill() {
  if (!parsedQuizBank.length) { showToast("Đang tải ngân hàng câu hỏi..."); return; }
  const picked = [];
  const used = new Set();
  const addFrom = (arr) => {
    for (const q of shuffleArray(arr)) {
      if (picked.length >= 10) break;
      if (!used.has(q.id)) { used.add(q.id); picked.push(q); }
    }
  };
  addFrom(parsedQuizBank.filter(q => wrongIds.has(q.id)));
  addFrom(parsedQuizBank.filter(q => !!bmState.items[q.id]));
  addFrom(parsedQuizBank.filter(q => !doneIds.has(q.id)));
  addFrom(parsedQuizBank);

  examConfig.mode = "instant";
  examConfig.timerMode = "countdown";
  switchTab("exam");
  startExam(picked, "Ôn cấp tốc 5 phút (10 câu yếu nhất)");
}

function markSessionDone(sessionTitle) {
  const items = (tabItems[currentTab] || []).filter(it => it.type === "question" && it.sessionTitle === sessionTitle);
  if (!items.length) return;
  const allDone = items.every(it => doneIds.has(it.id));
  items.forEach(it => setFlagState(doneMap, it.id, !allDone));
  saveDoneIds();
  renderCurrentView(true);
  showToast(allDone ? `Đã bỏ đánh dấu buổi (${items.length} câu)` : `Đã đánh dấu xong cả buổi (${items.length} câu)`);
}

function markQuestionDoneSilently(qId) {
  if (!qId || doneIds.has(qId)) return;
  setFlagState(doneMap, qId, true);
  saveDoneIds();

  // Update card button & sidebar dot in-place without re-rendering (zero scroll jump!)
  const card = document.querySelector(`.study-card[data-q-id="${CSS.escape(qId)}"]`);
  if (card) {
    card.classList.add("is-done");
    const btn = card.querySelector(".done-btn");
    if (btn) {
      btn.classList.add("is-done");
      btn.innerHTML = `${ICONS.check}<span>Đã học</span>`;
    }
    const idx = card.dataset.idx;
    const nav = document.getElementById("nav-item-" + idx);
    if (nav && !nav.querySelector(".dot-done-mini")) {
      const badges = nav.querySelector(".nav-badges");
      if (badges) badges.insertAdjacentHTML("afterbegin", '<span class="dot-done-mini" title="Đã học xong"></span>');
    }
  }
  const dashVal = document.getElementById("dashDoneVal");
  if (dashVal) {
    const allQs = STUDY_TABS.flatMap(t => tabItems[t] || []).filter(it => it.type === "question");
    const doneQ = allQs.filter(it => doneIds.has(it.id)).length;
    dashVal.textContent = `${doneQ} / ${allQs.length} câu`;
  }
}

function setupAutoReadObserver() {
  if (autoReadObserver) { autoReadObserver.disconnect(); autoReadObserver = null; }
  autoReadTimers.forEach(t => clearTimeout(t));
  autoReadTimers.clear();
  if (!("IntersectionObserver" in window)) return;

  const isMobile = window.innerWidth <= 960;
  autoReadObserver = new IntersectionObserver((entries) => {
    if (quizHideMode) return; // Trong chế độ Tự nhẩm chỉ tính xong khi chọn đáp án / hiện đáp án
    entries.forEach(entry => {
      const qId = entry.target.dataset.qId;
      if (!qId || doneIds.has(qId)) return;
      if (entry.isIntersecting) {
        if (!autoReadTimers.has(qId)) {
          autoReadTimers.set(qId, setTimeout(() => {
            autoReadTimers.delete(qId);
            if (!quizHideMode) markQuestionDoneSilently(qId);
          }, 2500));
        }
      } else if (autoReadTimers.has(qId)) {
        clearTimeout(autoReadTimers.get(qId));
        autoReadTimers.delete(qId);
      }
    });
  }, { root: isMobile ? null : document.getElementById("stageScroll"), threshold: 0.4 });

  document.querySelectorAll("#stageRoot .study-card[data-q-id]").forEach(el => {
    if (!doneIds.has(el.dataset.qId)) autoReadObserver.observe(el);
  });
}

function answerInlineQuestion(btn, qId, picked, correctNum) {
  const bar = btn.closest(".inline-quiz-bar");
  if (!bar) return;
  const wrap = bar.closest(".q-answer-wrap");
  const isOk = picked === correctNum;
  bar.querySelectorAll(".inline-opt-btn").forEach(b => {
    const n = parseInt(b.dataset.opt, 10);
    b.disabled = true;
    if (n === correctNum) b.classList.add("correct");
    else if (n === picked) b.classList.add("wrong");
  });
  const msg = bar.querySelector(".inline-quiz-msg");
  if (msg) {
    msg.textContent = isOk ? "Chính xác!" : `Sai (Đáp án: ${correctNum})`;
    msg.style.color = isOk ? "var(--matcha)" : "var(--vermilion)";
  }
  const ans = wrap?.querySelector(".q-answer");
  if (ans) ans.classList.add("revealed");

  if (isOk) {
    setFlagState(wrongMap, qId, false);
    saveWrongIds();
    markQuestionDoneSilently(qId);
  } else {
    setFlagState(wrongMap, qId, true);
    saveWrongIds();
  }
}

function isItemBookmarked(item) {
  if (bmState.items[item.id]) return true;
  if (item.type === "cheatsheet") {
    return Object.keys(bmState.items).some(k => k.startsWith("word::") && item.answerHtml.includes(escapeHtml(k)));
  }
  return false;
}

function renderCurrentView(preserveScroll = false) {
  const scrollEl = document.getElementById("stageScroll");
  const prevTop = preserveScroll ? scrollEl.scrollTop : 0;
  const isStudyTab = STUDY_TABS.includes(currentTab);
  document.getElementById("sidebar").classList.toggle("hidden-mode", !isStudyTab);
  const root = document.getElementById("stageRoot");
  root.classList.toggle("wide", currentTab === "exam");

  if (currentTab === "exam") { renderExamView(); return; }
  if (currentTab === "flashcard") { renderFlashcardView(); return; }

  const list = getFilteredItems(currentTab);
  const hasAnyData = (tabItems[currentTab] || []).length > 0;
  renderSidebar(list);

  if (!hasAnyData) {
    root.innerHTML = `
      <div class="empty-state">
        <h2 style="font-family:var(--font-serif);margin:0 0 8px;">${lastFetchError ? "Không tải được dữ liệu từ Google Drive" : "Đang tải bài học JLPT N1..."}</h2>
        <p style="color:var(--muted);font-size:13.5px;margin:0 0 16px;">
          ${lastFetchError
            ? `Chi tiết lỗi: <code>${escapeHtml(lastFetchError)}</code><br>Kiểm tra kết nối mạng hoặc tiện ích chặn quảng cáo (AdBlock) đang chặn <code>googleapis.com</code>.`
            : "Tự động tải 3 file Markdown mới nhất từ Google Drive (không cần đăng nhập)."}
        </p>
        <div style="display:flex;gap:10px;justify-content:center;flex-wrap:wrap;">
          <button class="btn btn-primary" onclick="fetchPublicMarkdownFiles(true)">${ICONS.refresh} Tải lại 3 file .md</button>
          <button class="btn" onclick="document.getElementById('localMdInput').click()">Nạp file .md từ máy</button>
        </div>
      </div>
    `;
    return;
  }

  if (!list.length) {
    root.innerHTML = `<div class="empty-state"><h3 style="font-family:var(--font-serif);margin:0 0 6px;">Không tìm thấy mục nào khớp bộ lọc</h3><p style="color:var(--muted);font-size:13px;margin:0;">Thử xóa từ khóa tìm kiếm hoặc tắt lọc Bookmark.</p></div>`;
    return;
  }

  // Precompute session progress (done / total questions)
  const sessStats = {};
  list.forEach(it => {
    if (it.type !== "question") return;
    if (!sessStats[it.sessionTitle]) sessStats[it.sessionTitle] = { total: 0, done: 0 };
    sessStats[it.sessionTitle].total++;
    if (doneIds.has(it.id)) sessStats[it.sessionTitle].done++;
  });

  // Resume last-read banner + Full-article bilingual reader bar
  const savedIdx = lastReadMap[currentTab];
  let html = renderMiniDashboardHtml();
  html += `
    <div class="study-reader-strip">
      <div class="study-reader-left">
        <button class="btn ${studyReaderPlaying ? "btn-active-vermilion" : "btn-indigo"}" id="studyReadAllBtn" onclick="toggleStudyReader()" style="font-size:12.5px;padding:5px 12px;">
          ${studyReaderPlaying ? ICONS.pause : ICONS.play}<span>${studyReaderPlaying ? "Dừng nghe toàn bài" : "Nghe toàn bài (Nhật + Việt)"}</span>
        </button>
      </div>
      <span class="study-reader-hint">Tự bỏ qua mục lục · Đọc trọn nội dung tiếng Nhật → Đáp án → Phân biệt nhanh (đổi giọng Nam/Nữ trong Cài đặt)</span>
    </div>
  `;
  if (!preserveScroll && savedIdx > 0 && savedIdx < list.length && !onlyBookmarked && !onlyUndone && !onlyWrong && !(document.getElementById("searchInput")?.value || "").trim()) {
    const savedItem = list[savedIdx];
    html += `
      <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;background:var(--surface);border:1px solid var(--border);border-left:3px solid var(--indigo);border-radius:6px;padding:9px 14px;margin-bottom:14px;font-size:13px;">
        <span>Đang học dở: <strong>${escapeHtml(savedItem.shortLabel)}</strong></span>
        <button class="btn btn-indigo" onclick="scrollToStudyItem(${savedIdx})" style="padding:4px 11px;font-size:12px;">Tiếp tục học</button>
      </div>
    `;
  }

  let lastSess = "";
  list.forEach((item, idx) => {
    if (item.sessionTitle !== lastSess) {
      lastSess = item.sessionTitle;
      const st = sessStats[lastSess];
      const progBadge = st && st.total
        ? `<span class="sess-head-right"><button class="sess-done-all-btn" onclick='startStudyReaderSession(${JSON.stringify(lastSess)})' title="Nghe trọn bộ các câu trong buổi này (Nhật + Việt)">▶ Nghe buổi này</button><span class="sess-prog">${st.done} / ${st.total} đã học</span><button class="sess-done-all-btn" onclick='markSessionDone(${JSON.stringify(lastSess)})' title="Đánh dấu xong / bỏ xong toàn bộ buổi này">${st.done === st.total ? "Bỏ xong buổi" : "✓ Xong cả buổi"}</button></span>`
        : "";
      html += `<h1 class="session-heading"><span>${escapeHtml(lastSess)}</span>${progBadge}</h1>`;
    }
    const isBm = !!bmState.items[item.id];
    const isDone = doneIds.has(item.id);
    const noteText = getNoteText(item.id);
    html += `
      <article class="study-card ${isBm ? 'is-bookmarked' : ''} ${isDone ? 'is-done' : ''}" id="list-item-${idx}" data-idx="${idx}" data-session="${escapeHtml(item.sessionTitle)}" ${item.type === "question" ? `data-q-id="${escapeHtml(item.id)}"` : ""} data-bm-card="${escapeHtml(item.id)}">
        <div class="card-head">
          <h2 class="card-title">${escapeHtml(item.shortLabel || item.title)}</h2>
          <div class="card-actions">
            <button class="tts-btn" onclick="startStudyReaderSingle(${idx})" title="Nghe trọn bài này (tiếng Nhật + đáp án + giải thích)">${ICONS.volume}<span>Nghe bài</span></button>
            <button class="tts-btn" onclick="startStudyReader(${idx})" title="Đọc liên tục từ bài này đến hết tab">${ICONS.play}<span>Từ đây</span></button>
            ${item.type === "question" ? `
              <button class="note-btn ${noteText ? 'has-note' : ''}" id="note-btn-${idx}" onclick="toggleNoteBox(${idx})" title="Ghi chú mẹo nhớ cá nhân">
                ${ICONS.note}<span>Ghi chú</span>
              </button>
              <button class="done-btn ${isDone ? 'is-done' : ''}" onclick='toggleDoneItem(${JSON.stringify(item.id)})' title="Đánh dấu đã học xong câu này (tự động tích khi đọc qua ≥ 2.5s)">
                ${ICONS.check}<span>${isDone ? "Đã học" : "Xong"}</span>
              </button>
              <button class="bm-btn bm-btn-card ${isBm ? 'bookmarked' : ''}" data-bm-id="${escapeHtml(item.id)}"
                data-bm-kind="question" data-bm-title="${escapeHtml(item.shortLabel)}"
                data-bm-sub="${escapeHtml(item.preview)}" data-bm-note=""
                data-bm-session="${escapeHtml(item.sessionTitle)}">
                ${isBm ? ICONS.starFill : ICONS.star}<span>${isBm ? "Đã lưu" : "Bookmark"}</span>
              </button>
            ` : ""}
          </div>
        </div>
        ${item.promptHtml ? `<div class="jp-prompt">${item.promptHtml}</div>` : ""}
        <div class="q-answer-wrap">
          ${item.promptHtml && item.correctNum >= 1 && item.correctNum <= 4 ? `
            <div class="inline-quiz-bar">
              <span style="font-size:12px;color:var(--muted);font-weight:600;">Chọn nhanh:</span>
              ${[1,2,3,4].map(n => `<button class="inline-opt-btn" data-opt="${n}" onclick='answerInlineQuestion(this, ${JSON.stringify(item.id)}, ${n}, ${item.correctNum})'>${n}</button>`).join("")}
              <span class="inline-quiz-msg"></span>
            </div>
          ` : ""}
          ${item.promptHtml ? `<button class="btn toggle-ans-btn" onclick='toggleOneAns(this, ${JSON.stringify(item.id)})'>${ICONS.eye}<span>Hiện / Ẩn đáp án</span></button>` : ""}
          <div class="q-answer">${item.answerHtml}</div>
        </div>
        ${item.type === "question" ? `
          <div class="note-box ${noteText ? 'open' : ''}" id="note-box-${idx}">
            <textarea class="note-textarea" placeholder="Ghi chú cá nhân / mẹo nhớ Kanji (tự đồng bộ theo tài khoản Gmail)..." oninput='updateQuestionNote(${JSON.stringify(item.id)}, this.value, "note-btn-${idx}")'>${escapeHtml(noteText)}</textarea>
          </div>
        ` : ""}
      </article>
    `;
  });
  root.innerHTML = html + (accessState.access !== "full" ? renderPaywallCardHtml(currentTab) : "");
  if (preserveScroll) scrollEl.scrollTop = prevTop;
  syncBookmarkBadgesOnly();
  bindScrollSpy();
  setupAutoReadObserver();
}

function isAdminUser() {
  return !!(currentUser && (currentUser.email || "").toLowerCase() === ADMIN_EMAIL);
}

function renderPaywallCardHtml(tabId) {
  const total = accessState.totalCounts?.[tabId] || 0;
  const remaining = Math.max(0, total - 1);
  const st = accessState.status || "guest";
  const tabLabels = { tuvung: "Từ vựng", nguphap: "Ngữ pháp", dochieu: "Đọc hiểu", nghehieu: "Nghe hiểu" };
  const label = tabLabels[tabId] || "bài học";

  if (st === "pending") {
    return `
      <div class="paywall-card">
        <span class="paywall-status">Đang chờ Admin duyệt</span>
        <h3>Tài khoản ${escapeHtml(currentUser?.email || "")} đã gửi yêu cầu</h3>
        <p>Bạn đang xem miễn phí bài đầu tiên của mục <strong>${label}</strong>${remaining ? ` (còn <strong>${remaining} bài</strong> đang khóa)` : ""}. Hệ thống sẽ <strong>tự động mở khóa toàn bộ ngay lập tức</strong> khi Admin (<code>${ADMIN_EMAIL}</code>) bấm duyệt.</p>
        <button class="btn" onclick="fetchPublicMarkdownFiles(true)">${ICONS.refresh}<span>Kiểm tra lại trạng thái</span></button>
      </div>
    `;
  }
  if (st === "blocked" || st === "expired") {
    return `
      <div class="paywall-card">
        <span class="paywall-status blocked">${st === "expired" ? "Tài khoản đã hết hạn" : "Tài khoản chưa được cấp quyền"}</span>
        <h3>Quyền truy cập toàn bộ đang tạm khóa</h3>
        <p>Vui lòng liên hệ Admin (<code>${ADMIN_EMAIL}</code>) để gia hạn hoặc mở lại quyền truy cập cho Gmail <strong>${escapeHtml(currentUser?.email || "")}</strong>.</p>
      </div>
    `;
  }
  return `
    <div class="paywall-card">
      <span class="paywall-status">Chế độ xem thử miễn phí</span>
      <h3>Đăng nhập Gmail để mở khóa toàn bộ ${remaining ? remaining + " bài " + label + " còn lại" : "khóa học JLPT N1"}</h3>
      <p>Khách chưa đăng nhập chỉ xem được <strong>1 bài đầu tiên</strong> của mỗi kỹ năng. Đăng nhập Gmail để gửi yêu cầu xét duyệt và mở khóa toàn bộ bài học, Flashcard SRS, Nghe thụ động &amp; Phòng thi thử N1.</p>
      <button class="btn btn-primary" onclick="signInWithGmail()" style="padding:9px 22px;font-size:14px;">${ICONS.user}<span>Đăng nhập Gmail ngay</span></button>
    </div>
  `;
}

function bindScrollSpy() {
  if (scrollSpyBound) return;
  scrollSpyBound = true;
  let spyTimer = null;
  const onScroll = () => {
    const stageEl = document.getElementById("stageScroll");
    const scrollY = window.innerWidth <= 960 ? window.scrollY : stageEl.scrollTop;
    document.getElementById("scrollTopBtn").classList.toggle("show", scrollY > 360);

    if (!STUDY_TABS.includes(currentTab)) return;
    clearTimeout(spyTimer);
    spyTimer = setTimeout(() => {
      const cards = document.querySelectorAll("#stageRoot .study-card[data-idx]");
      if (!cards.length) return;
      const refTop = window.innerWidth <= 960 ? 110 : stageEl.getBoundingClientRect().top + 48;
      let activeIdx = 0;
      for (const c of cards) {
        if (c.getBoundingClientRect().top <= refTop) activeIdx = parseInt(c.dataset.idx, 10);
        else break;
      }
      document.querySelectorAll(".nav-item.active").forEach(el => el.classList.remove("active"));
      const navEl = document.getElementById("nav-item-" + activeIdx);
      if (navEl) {
        navEl.classList.add("active");
        if (window.innerWidth > 960) navEl.scrollIntoView({ block: "nearest" });
      }
      if (!onlyBookmarked && !(document.getElementById("searchInput")?.value || "").trim()) {
        lastReadMap[currentTab] = activeIdx;
        localStorage.setItem(KEYS.LAST_READ, JSON.stringify(lastReadMap));
      }
    }, 90);
  };
  document.getElementById("stageScroll").addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("scroll", onScroll, { passive: true });
}

function scrollStageToTop() {
  if (window.innerWidth <= 960) window.scrollTo({ top: 0, behavior: "smooth" });
  else document.getElementById("stageScroll").scrollTo({ top: 0, behavior: "smooth" });
}

function renderSidebar(list) {
  const el = document.getElementById("sidebarList");
  if (!list.length) {
    el.innerHTML = `<div style="padding:18px;text-align:center;color:var(--muted);font-size:12.5px;">Không có mục nào</div>`;
    return;
  }
  let html = "", lastSess = "";
  list.forEach((item, idx) => {
    if (item.sessionTitle !== lastSess) {
      lastSess = item.sessionTitle;
      html += `<div class="sess-group-title">${escapeHtml(lastSess)}</div>`;
    }
    const isBm = !!bmState.items[item.id];
    const isWrong = wrongIds.has(item.id);
    const isDone = doneIds.has(item.id);
    html += `
      <div class="nav-item" onclick="scrollToStudyItem(${idx})" id="nav-item-${idx}">
        <span class="nav-item-text">${escapeHtml(item.shortLabel)}</span>
        <span class="nav-badges">
          ${isDone ? '<span class="dot-done-mini" title="Đã học xong"></span>' : ''}
          ${isWrong ? '<span class="dot-wrong-mini" title="Từng làm sai"></span>' : ''}
          ${isBm ? `<span style="color:var(--gold);display:inline-flex;">${ICONS.starFill}</span>` : ''}
        </span>
      </div>
    `;
  });
  el.innerHTML = html;
}

function scrollToStudyItem(idx) {
  closeMobileSidebar();
  document.querySelectorAll(".nav-item.active").forEach(el => el.classList.remove("active"));
  document.getElementById("nav-item-" + idx)?.classList.add("active");
  const card = document.getElementById("list-item-" + idx);
  if (card) card.scrollIntoView({ behavior: "smooth", block: "start" });
}

function jumpToBookmarkedItem(id) {
  for (const t of STUDY_TABS) {
    const idx = (tabItems[t] || []).findIndex(it => it.id === id);
    if (idx !== -1) {
      closeDrawer();
      onlyBookmarked = false;
      document.getElementById("filterBmBtn").classList.remove("btn-active-gold");
      const s = document.getElementById("searchInput");
      if (s) s.value = "";
      currentTab = t;
      document.querySelectorAll(".tab-btn, .bnav-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === t));
      renderCurrentView();
      setTimeout(() => scrollToStudyItem(idx), 60);
      return;
    }
  }
}

// ==================== FLASHCARD ENGINE (SRS: ĐÃ THUỘC / ÔN LẠI / BỎ BOOKMARK) ====================
function getRawFlashcardSource() {
  const allBms = Object.values(bmState.items);
  if (fcConfig.source === "bookmarks") return allBms.map(it => ({ ...it }));
  if (fcConfig.source === "bm_words") return allBms.filter(it => it.kind !== "question").map(it => ({ ...it }));
  if (fcConfig.source === "bm_questions") return allBms.filter(it => it.kind === "question").map(it => ({ ...it }));
  return cheatWordsBank.map(w => ({ ...w, kind: "word" }));
}

function buildFlashcardDeck(preserveCurrent = false) {
  const prevId = preserveCurrent && fcDeck[fcIdx] ? fcDeck[fcIdx].id : null;
  const raw = getRawFlashcardSource();
  fcDeck = fcConfig.showMastered ? raw : raw.filter(c => !masteredIds.has(c.id));
  if (prevId && fcDeck.length) {
    const found = fcDeck.findIndex(c => c.id === prevId);
    if (found !== -1) {
      fcIdx = found;
      return;
    }
    fcIdx = Math.min(fcIdx, fcDeck.length - 1);
    fcFlipped = false;
  } else {
    fcIdx = 0;
    fcFlipped = false;
  }
}

function getFlashcardSpeakText(card) {
  if (!card) return "";
  if (card.kind === "question") {
    const fullQ = findStudyItemById(card.id);
    return fullQ?.jpText || card.sub || "";
  }
  return card.title || "";
}

function speakCurrentFlashcard() {
  const card = fcDeck[fcIdx];
  const txt = getFlashcardSpeakText(card);
  if (txt) speakJapanese(txt);
}

function updateFcAutoStatusText(text) {
  fcAutoStatus = text;
  const el = document.getElementById("fcAutoStatusText");
  if (el) el.textContent = text;
}

function renderFlashcardView() {
  const root = document.getElementById("stageRoot");
  const allBms = Object.values(bmState.items);
  const bmWordsCnt = allBms.filter(it => it.kind !== "question").length;
  const bmQsCnt = allBms.filter(it => it.kind === "question").length;
  const csCnt = cheatWordsBank.length;
  const rawTotal = getRawFlashcardSource();
  const masteredInSource = rawTotal.filter(c => masteredIds.has(c.id)).length;

  const filterBar = `
    <div class="fc-toolbar">
      <div style="display:flex;gap:6px;flex-wrap:wrap;">
        <button class="btn ${fcConfig.source==='bookmarks'?'btn-primary':''}" onclick="switchFlashcardSource('bookmarks')">Tất cả BM (${allBms.length})</button>
        <button class="btn ${fcConfig.source==='bm_words'?'btn-primary':''}" onclick="switchFlashcardSource('bm_words')">Từ vựng (${bmWordsCnt})</button>
        <button class="btn ${fcConfig.source==='bm_questions'?'btn-primary':''}" onclick="switchFlashcardSource('bm_questions')">Bài tập (${bmQsCnt})</button>
        <button class="btn ${fcConfig.source==='cheatsheet'?'btn-primary':''}" onclick="switchFlashcardSource('cheatsheet')">Cheat Sheet (${csCnt})</button>
      </div>
      <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap;">
        <span class="tag-pill done">Đã thuộc: ${masteredInSource}/${rawTotal.length}</span>
        <button class="btn ${fcAutoPlaying?'btn-active-vermilion':'btn-indigo'}" onclick="toggleFlashcardAutoplay()" style="font-size:12px;padding:4px 10px;" title="Nghe thụ động: tự đọc tiếng Nhật → chờ nhẩm → tự lật nghĩa → chuyển thẻ">
          ${fcAutoPlaying ? ICONS.pause : ICONS.play}<span>${fcAutoPlaying ? "Dừng phát" : "Nghe thụ động"}</span>
        </button>
        <select onchange="setFcDelaySec(this.value)" title="Thời gian dừng để tự nhẩm" style="padding:4px 6px;border:1px solid var(--border-strong);border-radius:5px;background:var(--surface);color:var(--ink);font-size:12px;font-family:inherit;">
          <option value="2" ${fcConfig.delaySec===2?'selected':''}>Nhẩm 2s</option>
          <option value="3" ${fcConfig.delaySec===3?'selected':''}>Nhẩm 3s</option>
          <option value="5" ${fcConfig.delaySec===5?'selected':''}>Nhẩm 5s</option>
        </select>
        <button class="btn ${fcConfig.showMastered?'btn-active-matcha':''}" onclick="toggleShowMastered()" style="font-size:12px;padding:4px 9px;">${fcConfig.showMastered ? "Đang hiện cả đã thuộc" : "Ẩn đã thuộc"}</button>
        ${fcDeck.length > 1 ? `<button class="btn" onclick="shuffleFlashcards()" style="font-size:12px;padding:4px 9px;">${ICONS.shuffle}<span>Xáo</span></button>` : ""}
      </div>
    </div>
    ${fcAutoPlaying ? `<div style="background:var(--indigo-soft);border:1px solid var(--border);border-left:3px solid var(--indigo);border-radius:6px;padding:7px 12px;margin-bottom:10px;font-size:12.5px;display:flex;justify-content:space-between;align-items:center;gap:8px;">
      <span><strong>Chế độ nghe thụ động:</strong> <span id="fcAutoStatusText">${escapeHtml(fcAutoStatus || "Đang phát...")}</span></span>
      <span style="color:var(--muted);font-size:11.5px;">Tự giữ sáng màn hình</span>
    </div>` : ""}
  `;

  if (!fcDeck.length) {
    const allDone = rawTotal.length > 0 && masteredInSource === rawTotal.length;
    root.innerHTML = `<div class="fc-wrap">${filterBar}<div class="empty-state">
      <h2 style="font-family:var(--font-serif);margin:0 0 8px;">${allDone ? "Xuất sắc — Bạn đã thuộc 100% thẻ trong mục này" : "Chưa có thẻ nào"}</h2>
      <p style="color:var(--muted);font-size:13.5px;margin:0 0 16px;">${allDone ? "Anh có thể đặt lại trạng thái đã thuộc để ôn vòng mới hoặc chuyển sang nguồn thẻ khác." : `Hãy đánh dấu Bookmark từ vựng/câu hỏi khó, hoặc chọn nguồn Cheat Sheet (${csCnt} từ).`}</p>
      ${allDone ? `<button class="btn btn-primary" onclick="resetMasteredInSource()">Ôn lại toàn bộ ${rawTotal.length} thẻ</button>` : ""}
    </div></div>`;
    return;
  }

  if (fcIdx >= fcDeck.length || fcIdx < 0) fcIdx = 0;
  const card = fcDeck[fcIdx];
  const isQ = card.kind === "question";
  const fullQ = isQ ? findStudyItemById(card.id) : null;
  const speakText = getFlashcardSpeakText(card);
  const isMastered = masteredIds.has(card.id);
  const isBookmarked = !!bmState.items[card.id];

  let bodyHtml = "";
  if (isQ && fullQ) {
    bodyHtml = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;gap:8px;flex-wrap:wrap;">
        <span class="tag-pill">BÀI TẬP · ${escapeHtml(fullQ.shortLabel)}</span>
        <span style="font-size:12px;color:var(--muted);font-weight:600;">Thẻ ${fcIdx + 1}/${fcDeck.length} · ${fcFlipped ? "Mặt sau (Đáp án)" : "Mặt trước · Bấm thẻ hoặc Space"}</span>
      </div>
      <div class="jp-prompt" style="margin-bottom:8px;">${fullQ.promptHtml}</div>
      ${fcFlipped
        ? `<div class="fc-answer-reveal" style="margin-top:10px;padding-top:12px;border-top:1px dashed var(--border-strong);">${fullQ.answerHtml}</div>`
        : `<div style="font-size:13px;color:var(--muted);text-align:center;margin-top:12px;">Tự chọn đáp án 1–4 rồi bấm vào thẻ để kiểm tra lời giải</div>`}
    `;
  } else {
    const cleanSub = (card.sub || "").replace(/<[^>]+>/g, "").trim();
    const cleanNote = (card.note || "").replace(/<[^>]+>/g, "").trim();
    const hasBackInfo = !!(cleanSub || cleanNote);
    bodyHtml = `
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
        <span class="tag-pill word">TỪ VỰNG</span>
        <span style="font-size:12px;color:var(--muted);font-weight:600;">Thẻ ${fcIdx + 1}/${fcDeck.length} · ${fcFlipped ? "Đáp án" : "Mặt trước"}</span>
      </div>
      <div class="fc-word">${escapeHtml(card.title)}</div>
      ${fcFlipped ? `
        ${cleanSub ? `<div class="fc-reading">${escapeHtml(cleanSub)}</div>` : ""}
        ${cleanNote ? `<div class="fc-meaning">${escapeHtml(cleanNote)}</div>` : ""}
        ${!hasBackInfo ? `<div class="fc-meaning" style="color:var(--muted);font-size:13.5px;">Chưa có ghi chú nghĩa — bấm Mazii bên dưới để tra nhanh.</div>` : ""}
        <div style="font-size:11.5px;color:var(--muted);text-align:center;margin-top:16px;">${escapeHtml(card.session || "")}</div>
      ` : `<div style="font-size:13px;color:var(--muted);text-align:center;margin-top:6px;">Tự nhẩm cách đọc và nghĩa tiếng Việt</div>`}
    `;
  }

  root.innerHTML = `
    <div class="fc-wrap">
      ${filterBar}
      <div class="fc-card" onclick="flipFlashcard()">${bodyHtml}</div>
      <div class="fc-controls">
        <button class="btn" onclick="stepFlashcard(-1)">Trước</button>
        ${speakText ? `<button class="btn" onclick="speakCurrentFlashcard()">${ICONS.volume}<span>Nghe</span></button>` : ""}
        ${!isQ ? `<a class="mazii-link" href="${maziiUrl(card.title)}" target="_blank" rel="noopener" title="Tra từ trên Mazii">Mazii</a>` : ""}
        <button class="btn btn-primary" onclick="flipFlashcard()">${fcFlipped ? "Úp thẻ" : "Lật xem đáp án"}</button>
        <button class="btn" onclick="markFlashcardAgain()" style="border-color:var(--vermilion);color:var(--vermilion);" title="Đưa thẻ này lặp lại sau 3 thẻ">Chưa thuộc (lặp lại)</button>
        <button class="btn btn-active-matcha" onclick="markFlashcardMastered()" title="Đánh dấu đã thuộc và ẩn khỏi vòng ôn">${ICONS.check}<span>${isMastered ? "Bỏ đã thuộc" : "Đã thuộc"}</span></button>
        ${isBookmarked ? `<button class="btn" onclick="removeFlashcardFromBookmark()" style="border-color:var(--gold);color:var(--gold);" title="Bỏ thẻ này khỏi Sổ tay Bookmark sau khi học xong">${ICONS.starFill}<span>Bỏ Bookmark</span></button>` : ""}
        <button class="btn" onclick="stepFlashcard(1)">Tiếp</button>
      </div>
    </div>
  `;
}

function toggleShowMastered() { stopFlashcardAutoplay(true); fcConfig.showMastered = !fcConfig.showMastered; buildFlashcardDeck(); renderFlashcardView(); }

function removeFlashcardFromBookmark() {
  const card = fcDeck[fcIdx];
  if (!card || !bmState.items[card.id]) return;
  const wasPlaying = fcAutoPlaying;
  if (wasPlaying) stopFlashcardAutoplay(true);

  delete bmState.items[card.id];
  bmState.deleted[card.id] = new Date().toISOString();
  onBookmarksChanged();

  if (fcConfig.source !== "cheatsheet") {
    fcDeck.splice(fcIdx, 1);
    if (fcIdx >= fcDeck.length) fcIdx = Math.max(0, fcDeck.length - 1);
  }
  fcFlipped = false;
  showToast("Đã bỏ khỏi Bookmark");
  renderFlashcardView();
}

function markFlashcardMastered() {
  const card = fcDeck[fcIdx]; if (!card) return;
  if (masteredIds.has(card.id)) {
    setFlagState(masteredMap, card.id, false);
    saveMasteredIds();
    showToast("Đã đưa thẻ trở lại danh sách cần ôn");
  } else {
    setFlagState(masteredMap, card.id, true);
    saveMasteredIds();
    if (!fcConfig.showMastered) fcDeck.splice(fcIdx, 1);
    else if (fcDeck.length > 1) fcIdx = (fcIdx + 1) % fcDeck.length;
    showToast("Đã đánh dấu thuộc");
  }
  fcFlipped = false;
  if (fcIdx >= fcDeck.length) fcIdx = Math.max(0, fcDeck.length - 1);
  renderFlashcardView();
}
function markFlashcardAgain() {
  const card = fcDeck[fcIdx]; if (!card) return;
  setFlagState(masteredMap, card.id, false);
  saveMasteredIds();
  fcDeck.splice(fcIdx, 1);
  const reinsertAt = Math.min(fcIdx + 3, fcDeck.length);
  fcDeck.splice(reinsertAt, 0, card);
  fcFlipped = false;
  if (fcIdx >= fcDeck.length) fcIdx = 0;
  showToast("Sẽ lặp lại thẻ này sau 3 thẻ nữa");
  renderFlashcardView();
}
function resetMasteredInSource() {
  getRawFlashcardSource().forEach(c => setFlagState(masteredMap, c.id, false));
  saveMasteredIds();
  buildFlashcardDeck();
  renderFlashcardView();
  showToast("Đã đặt lại toàn bộ thẻ để ôn vòng mới");
}

function setFcDelaySec(v) { fcConfig.delaySec = parseInt(v, 10) || 3; }

function stopFlashcardAutoplay(silent = false) {
  fcAutoPlaying = false;
  fcAutoRunId++;
  fcAutoStatus = "";
  clearTimeout(fcAutoTimer);
  stopJapaneseSpeech();
  if (fcWakeLock) { try { fcWakeLock.release(); } catch {} fcWakeLock = null; }
  if (!silent && currentTab === "flashcard") renderFlashcardView();
}

function sleepFc(ms, runId) {
  return new Promise(resolve => {
    clearTimeout(fcAutoTimer);
    fcAutoTimer = setTimeout(() => resolve(fcAutoPlaying && fcAutoRunId === runId), ms);
  });
}

async function toggleFlashcardAutoplay() {
  if (fcAutoPlaying) {
    stopFlashcardAutoplay(false);
    showToast("Đã dừng chế độ nghe thụ động");
    return;
  }
  if (!fcDeck.length) { showToast("Chưa có thẻ để phát"); return; }

  // Unlock HTMLAudioElement synchronously inside the user's click gesture (critical for iOS/Android/Chrome)
  stopStudyReader(true);
  unlockTtsAudio();

  fcAutoPlaying = true;
  const runId = ++fcAutoRunId;
  if (navigator.wakeLock?.request) {
    navigator.wakeLock.request("screen").then(wl => {
      if (fcAutoPlaying && fcAutoRunId === runId) fcWakeLock = wl;
      else try { wl.release(); } catch {}
    }).catch(() => {});
  }

  while (fcAutoPlaying && fcAutoRunId === runId && currentTab === "flashcard" && fcDeck.length) {
    if (fcIdx >= fcDeck.length || fcIdx < 0) fcIdx = 0;
    const card = fcDeck[fcIdx];
    const isQ = card.kind === "question";
    const speakText = getFlashcardSpeakText(card);
    const singleNote = fcDeck.length === 1 ? " (bộ chỉ có 1 thẻ)" : "";

    // 1. Mặt trước + đọc tiếng Nhật bản xứ
    fcFlipped = false;
    fcAutoStatus = `Thẻ ${fcIdx + 1}/${fcDeck.length}${singleNote} — Đang đọc tiếng Nhật...`;
    renderFlashcardView();
    if (speakText) await speakJapaneseAsync(speakText);
    if (!fcAutoPlaying || fcAutoRunId !== runId || currentTab !== "flashcard") break;

    // 2. Dừng cho người học tự nhẩm (cập nhật text tại chỗ, không chớp DOM)
    updateFcAutoStatusText(`Thẻ ${fcIdx + 1}/${fcDeck.length}${singleNote} — Tự nhẩm (${fcConfig.delaySec}s)...`);
    if (!(await sleepFc(fcConfig.delaySec * 1000, runId))) break;
    if (!fcAutoPlaying || fcAutoRunId !== runId || currentTab !== "flashcard") break;

    // 3. Tự động lật mặt sau hiện đáp án & nghĩa + nhắc lại âm đọc
    fcFlipped = true;
    fcAutoStatus = `Thẻ ${fcIdx + 1}/${fcDeck.length}${singleNote} — Đang hiện đáp án & nghĩa`;
    renderFlashcardView();
    if (speakText && !isQ) await speakJapaneseAsync(speakText);
    if (!fcAutoPlaying || fcAutoRunId !== runId || currentTab !== "flashcard") break;
    if (!(await sleepFc((fcConfig.delaySec + 1.5) * 1000, runId))) break;
    if (!fcAutoPlaying || fcAutoRunId !== runId || currentTab !== "flashcard") break;

    // 4. Tự động chuyển sang thẻ tiếp theo (quay vòng khi hết bộ)
    fcIdx = (fcIdx + 1) % fcDeck.length;
  }
  if (fcAutoRunId === runId) stopFlashcardAutoplay(false);
}

function switchFlashcardSource(s) { stopFlashcardAutoplay(true); fcConfig.source = s; buildFlashcardDeck(); renderFlashcardView(); }
function flipFlashcard() { fcFlipped = !fcFlipped; renderFlashcardView(); }
function stepFlashcard(d) {
  stopFlashcardAutoplay(true);
  if (!fcDeck.length) return;
  if (fcDeck.length === 1) {
    showToast("Bộ thẻ hiện chỉ có 1 thẻ — chuyển nguồn Cheat Sheet hoặc thêm Bookmark để ôn nhiều hơn");
    return;
  }
  fcIdx = (fcIdx + d + fcDeck.length) % fcDeck.length;
  fcFlipped = false;
  renderFlashcardView();
}
function shuffleFlashcards() { stopFlashcardAutoplay(true); fcDeck = shuffleArray(fcDeck); fcIdx = 0; fcFlipped = false; renderFlashcardView(); showToast("Đã xáo trộn bộ thẻ"); }

// ==================== EXAM ENGINE (DAY FILTER, STAR FILTER, COUNTDOWN, HISTORY) ====================
function getAvailableExamDays() {
  const days = new Set();
  parsedQuizBank.forEach(q => { if (q.dayTag && q.dayTag !== "KHÁC") days.add(q.dayTag); });
  return [...days].sort((a, b) => a.localeCompare(b, "vi", { numeric: true }));
}

function getFilteredExamPool(source, day = examConfig.day) {
  let pool = [...parsedQuizBank];
  if (day && day !== "all") pool = pool.filter(q => q.dayTag === day);
  if (source === "tuvung") return pool.filter(q => q.tabId === "tuvung");
  if (source === "nguphap") return pool.filter(q => q.tabId === "nguphap");
  if (source === "dochieu") return pool.filter(q => q.tabId === "dochieu");
  if (source === "star") return pool.filter(q => q.isStar);
  if (source === "bookmarked") return pool.filter(q => !!bmState.items[q.id]);
  if (source === "wrong") return pool.filter(q => wrongIds.has(q.id));
  return pool;
}

function renderExamView() {
  const root = document.getElementById("stageRoot");
  if (!parsedQuizBank.length) {
    root.innerHTML = `<div class="empty-state"><h2 style="font-family:var(--font-serif);">Thi thử JLPT N1</h2><p style="color:var(--muted);">Đang tải ngân hàng câu hỏi Từ vựng &amp; Ngữ pháp...</p><button class="btn btn-primary" onclick="fetchPublicMarkdownFiles(true)">Tải lại 3 file .md</button></div>`;
    return;
  }
  if (examSession) {
    if (examSession.finished) renderExamResult(root);
    else renderExamActive(root);
    return;
  }

  const days = getAvailableExamDays();
  const baseByDay = getFilteredExamPool("all", examConfig.day);
  const vocabCnt = baseByDay.filter(q => q.tabId === "tuvung").length;
  const gramCnt = baseByDay.filter(q => q.tabId === "nguphap").length;
  const readCnt = baseByDay.filter(q => q.tabId === "dochieu").length;
  const starCnt = baseByDay.filter(q => q.isStar).length;
  const bmCnt = baseByDay.filter(q => !!bmState.items[q.id]).length;
  const wrongCnt = baseByDay.filter(q => wrongIds.has(q.id)).length;
  const poolSize = getFilteredExamPool(examConfig.source, examConfig.day).length;
  const targetCnt = examConfig.count === "all" ? poolSize : Math.min(Number(examConfig.count) || 10, poolSize);

  root.innerHTML = `
    <div class="exam-setup-card">
      <div style="display:flex;justify-content:space-between;align-items:baseline;flex-wrap:wrap;gap:8px;border-bottom:1px solid var(--border);padding-bottom:12px;">
        <h2 style="font-family:var(--font-serif);margin:0;font-size:21px;">Tạo đề thi thử JLPT N1</h2>
        <span style="font-size:12.5px;color:var(--muted);">Ngân hàng: <strong>${parsedQuizBank.length} câu</strong> · Đang lọc: <strong>${poolSize} câu</strong></span>
      </div>

      <div class="exam-grid-setup">
        <div class="exam-field">
          <label>1. Lọc theo Ngày học</label>
          <div class="pill-group">
            <button class="choice-pill ${examConfig.day==='all'?'active':''}" onclick="setExamConfig('day','all')">Tất cả ngày</button>
            ${days.map(d => `<button class="choice-pill ${examConfig.day===d?'active':''}" onclick="setExamConfig('day','${d}')">${d}</button>`).join("")}
          </div>
        </div>

        <div class="exam-field">
          <label>2. Nguồn câu hỏi</label>
          <div class="pill-group">
            <button class="choice-pill ${examConfig.source==='all'?'active':''}" onclick="setExamConfig('source','all')">Tất cả (${baseByDay.length})</button>
            <button class="choice-pill ${examConfig.source==='tuvung'?'active':''}" onclick="setExamConfig('source','tuvung')">Từ vựng (${vocabCnt})</button>
            <button class="choice-pill ${examConfig.source==='nguphap'?'active':''}" onclick="setExamConfig('source','nguphap')">Ngữ pháp (${gramCnt})</button>
            <button class="choice-pill ${examConfig.source==='dochieu'?'active':''}" onclick="setExamConfig('source','dochieu')">Đọc hiểu (${readCnt})</button>
            <button class="choice-pill ${examConfig.source==='star'?'active':''}" onclick="setExamConfig('source','star')">Câu sao ★ (${starCnt})</button>
            <button class="choice-pill ${examConfig.source==='bookmarked'?'active':''}" onclick="setExamConfig('source','bookmarked')">Bookmark (${bmCnt})</button>
            <button class="choice-pill ${examConfig.source==='wrong'?'active':''}" onclick="setExamConfig('source','wrong')">Hay sai (${wrongCnt})</button>
          </div>
        </div>

        <div class="exam-field">
          <label>3. Số câu ngẫu nhiên (tối đa ${poolSize})</label>
          <div class="pill-group" style="align-items:center;">
            ${[5, 10, 20, 30].map(n => `<button class="choice-pill ${examConfig.count===n?'active':''}" onclick="setExamConfig('count',${n})">${n}</button>`).join("")}
            <button class="choice-pill ${examConfig.count==='all'?'active':''}" onclick="setExamConfig('count','all')">Tất cả</button>
            <input class="custom-count-input" type="number" min="1" max="${Math.max(1, poolSize)}" placeholder="Tùy ý"
              value="${typeof examConfig.count==='number' && ![5,10,20,30].includes(examConfig.count) ? examConfig.count : ''}"
              oninput="setCustomExamCount(this.value)">
          </div>
        </div>

        <div class="exam-field">
          <label>4. Chế độ chấm điểm &amp; Thời gian</label>
          <div class="pill-group" style="margin-bottom:7px;">
            <button class="choice-pill ${examConfig.mode==='instant'?'active':''}" onclick="setExamConfig('mode','instant')">Chấm ngay</button>
            <button class="choice-pill ${examConfig.mode==='submit'?'active':''}" onclick="setExamConfig('mode','submit')">Nộp bài mới chấm</button>
          </div>
          <div class="pill-group">
            <button class="choice-pill ${examConfig.timerMode==='up'?'active':''}" onclick="setExamConfig('timerMode','up')">Đếm tiến</button>
            <button class="choice-pill ${examConfig.timerMode==='countdown'?'active':''}" onclick="setExamConfig('timerMode','countdown')">Đếm ngược chuẩn N1</button>
          </div>
        </div>
      </div>

      <div style="text-align:center;margin-top:18px;">
        <button class="btn btn-primary" onclick="startExam()" ${poolSize === 0 ? "disabled" : ""} style="padding:10px 28px;font-size:14.5px;">
          Bắt đầu làm bài (${targetCnt} câu)
        </button>
      </div>
    </div>

    ${examHistory.length ? `
      <div class="exam-setup-card" style="margin-top:16px;border-top:1px solid var(--border);padding:18px 22px;">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
          <h3 style="font-family:var(--font-serif);margin:0;font-size:16px;">Lịch sử làm bài gần đây (${examHistory.length})</h3>
          <button class="btn" onclick="clearExamHistory()" style="font-size:11.5px;padding:3px 9px;color:var(--muted);">Xóa lịch sử</button>
        </div>
        <div class="table-wrap">
          <table>
            <thead><tr><th>Thời gian</th><th>Phạm vi</th><th>Điểm số</th><th>Tỉ lệ</th><th>Thời lượng</th></tr></thead>
            <tbody>
              ${examHistory.slice(0, 10).map(h => `
                <tr>
                  <td style="white-space:nowrap;">${escapeHtml(h.dateLabel)}</td>
                  <td>${escapeHtml(h.scope)}</td>
                  <td><strong>${h.correct}/${h.total}</strong></td>
                  <td style="font-weight:700;color:${h.pct>=70?'var(--matcha)':'var(--vermilion)'};">${h.pct}%</td>
                  <td>${escapeHtml(h.duration)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </div>
    ` : ""}
  `;
}

function clearExamHistory() {
  examHistory = [];
  saveExamHistory();
  renderExamView();
}

function setExamConfig(k, v) { examConfig[k] = v; renderExamView(); }
function setCustomExamCount(v) { const n = parseInt(v, 10); if (n > 0) { examConfig.count = n; renderExamView(); } }
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function formatDuration(sec) { const s = Math.max(0, sec); return `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`; }

function persistActiveExam() {
  try {
    if (examSession && !examSession.finished) sessionStorage.setItem(KEYS.ACTIVE_EXAM, JSON.stringify(examSession));
    else sessionStorage.removeItem(KEYS.ACTIVE_EXAM);
  } catch {}
}

function startExamTimer() {
  clearInterval(examTimerInterval);
  examTimerInterval = setInterval(() => {
    if (!examSession || examSession.finished) return;
    examSession.elapsedSec = Math.floor((Date.now() - examSession.startedAt) / 1000);
    const el = document.getElementById("examTimer");
    if (examSession.timerMode === "countdown") {
      const rem = examSession.limitSec - examSession.elapsedSec;
      if (el) {
        el.textContent = formatDuration(rem);
        el.style.color = rem <= 60 ? "var(--vermilion)" : "";
      }
      if (rem <= 0) {
        showToast("Hết giờ làm bài — hệ thống tự động nộp bài");
        finishExam();
      }
    } else if (el) {
      el.textContent = formatDuration(examSession.elapsedSec);
    }
  }, 1000);
}

function restoreActiveExam() {
  try {
    const raw = sessionStorage.getItem(KEYS.ACTIVE_EXAM);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && Array.isArray(saved.questions) && saved.questions.length && !saved.finished) {
      examSession = saved;
      examSession.elapsedSec = Math.floor((Date.now() - examSession.startedAt) / 1000);
      startExamTimer();
    }
  } catch {}
}

function startExam(customList = null, customScope = null) {
  const pool = customList || getFilteredExamPool(examConfig.source, examConfig.day);
  if (!pool.length) { showToast("Không có câu hỏi nào."); return; }
  const desired = customList ? pool.length : (examConfig.count === "all" ? pool.length : Math.min(Number(examConfig.count) || 10, pool.length));
  const selected = shuffleArray(pool).slice(0, desired);
  const limitSec = selected.reduce((sum, q) => sum + (q.tabId === "dochieu" ? 90 : (q.tabId === "nguphap" ? 45 : 30)), 0);
  const scopeLabel = customScope || (customList ? "Làm lại câu sai" : `${examConfig.day === "all" ? "Tất cả" : examConfig.day} · ${examConfig.source}`);

  examSession = {
    questions: selected, answers: {}, currentIdx: 0,
    mode: examConfig.mode, timerMode: examConfig.timerMode,
    limitSec, scopeLabel, startedAt: Date.now(), elapsedSec: 0, finished: false
  };
  persistActiveExam();
  startExamTimer();
  renderExamView();
}

function renderExamActive(root) {
  const s = examSession, q = s.questions[s.currentIdx], total = s.questions.length;
  const userAns = s.answers[s.currentIdx];
  const showFeedback = s.mode === "instant" && userAns !== undefined;
  const answeredCount = Object.keys(s.answers).length;
  const pct = Math.round((answeredCount / total) * 100);
  const isBm = !!bmState.items[q.id];

  root.innerHTML = `
    <div class="exam-2col">
      <div class="exam-main-card">
        <div class="card-head">
          <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
            <span class="tag-pill">${q.categoryLabel}</span>
            <strong style="font-family:var(--font-serif);font-size:15.5px;">Câu ${s.currentIdx + 1} / ${total}</strong>
            <span style="font-size:12px;color:var(--muted);">${escapeHtml(q.title.replace(/`\[[^\]]+\]`/g, ""))}</span>
          </div>
          <div class="card-actions">
            <button class="tts-btn" onclick='speakJapanese(${JSON.stringify(q.promptPlain)})'>${ICONS.volume}<span>Nghe</span></button>
            <button class="bm-btn ${isBm?'bookmarked':''}" onclick="toggleExamQuestionBookmark(${s.currentIdx})">${isBm ? ICONS.starFill : ICONS.star}<span>${isBm ? "Đã lưu" : "Bookmark"}</span></button>
          </div>
        </div>

        ${q.passageHtml ? `<details class="exam-passage" open><summary>Đoạn văn / Thông báo đọc hiểu (bấm để thu gọn)</summary>${q.passageHtml}</details>` : ""}
        <div class="jp-prompt">${q.promptHtml}</div>

        <div class="exam-options-grid ${q.longOpts ? 'single-col' : ''}">
          ${q.options.map((opt, idx) => {
            const num = idx + 1;
            let cls = "exam-opt-btn";
            if (showFeedback) {
              if (num === q.correct) cls += " correct";
              else if (num === userAns) cls += " wrong";
            } else if (num === userAns) cls += " selected";
            return `<button class="${cls}" ${showFeedback ? "disabled" : ""} onclick="selectExamOption(${num})"><span class="exam-opt-num">${num}</span><span>${escapeHtml(opt)}</span></button>`;
          }).join("")}
        </div>

        ${showFeedback ? `
          <div style="margin-top:12px;padding-top:12px;border-top:1px solid var(--border);">
            <div style="font-weight:700;font-size:14px;margin-bottom:6px;color:${userAns===q.correct?'var(--matcha)':'var(--vermilion)'};">
              ${userAns === q.correct ? "Chính xác" : `Chưa đúng — Đáp án đúng là số ${q.correct}`}
            </div>
            <div>${q.explanationHtml}</div>
          </div>
        ` : ""}

        <div style="display:flex;justify-content:space-between;align-items:center;margin-top:16px;padding-top:12px;border-top:1px solid var(--border);">
          <button class="btn" onclick="moveExamQuestion(-1)" ${s.currentIdx === 0 ? "disabled" : ""}>Câu trước</button>
          <span style="font-size:12px;color:var(--muted);">Phím 1–4 chọn đáp án · ← → chuyển câu</span>
          ${s.currentIdx < total - 1
            ? `<button class="btn btn-primary" onclick="moveExamQuestion(1)">Câu tiếp</button>`
            : `<button class="btn btn-active-matcha" onclick="finishExam()">Nộp bài</button>`}
        </div>
      </div>

      <div class="exam-side-card">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;">
          <strong style="font-family:var(--font-serif);font-size:16px;color:${s.timerMode==='countdown' && (s.limitSec - s.elapsedSec)<=60 ? 'var(--vermilion)' : ''};" id="examTimer">${formatDuration(s.timerMode === "countdown" ? (s.limitSec - s.elapsedSec) : s.elapsedSec)}</strong>
          <span style="color:var(--muted);">${answeredCount} / ${total} câu</span>
        </div>
        <div class="exam-progress-track"><div class="exam-progress-fill" style="width:${pct}%"></div></div>
        <div class="exam-dots-grid">
          ${s.questions.map((item, i) => {
            const a = s.answers[i];
            let dCls = "exam-dot";
            if (i === s.currentIdx) dCls += " current";
            if (a !== undefined) {
              if (s.mode === "instant") dCls += (a === item.correct ? " dot-correct" : " dot-wrong");
              else dCls += " answered";
            }
            return `<button class="${dCls}" onclick="goToExamQuestion(${i})">${i + 1}</button>`;
          }).join("")}
        </div>
        <div style="display:flex;flex-direction:column;gap:8px;">
          <button class="btn btn-active-matcha" onclick="finishExam()" style="justify-content:center;padding:8px;">Nộp bài &amp; Chấm điểm</button>
          <button class="btn" onclick="exitExam()" style="justify-content:center;">Thoát bài thi</button>
        </div>
      </div>
    </div>
  `;
}

function selectExamOption(num) {
  if (!examSession || examSession.finished) return;
  const q = examSession.questions[examSession.currentIdx];
  examSession.answers[examSession.currentIdx] = num;
  const isOk = num === q.correct;
  setFlagState(wrongMap, q.id, !isOk);
  saveWrongIds();
  if (isOk) { setFlagState(doneMap, q.id, true); saveDoneIds(); }
  persistActiveExam();
  renderExamView();
}
function moveExamQuestion(d) { const n = examSession.currentIdx + d; if (n >= 0 && n < examSession.questions.length) { examSession.currentIdx = n; persistActiveExam(); renderExamView(); } }
function goToExamQuestion(i) { examSession.currentIdx = i; persistActiveExam(); renderExamView(); }
function toggleExamQuestionBookmark(idx) {
  const q = examSession?.questions[idx]; if (!q) return;
  toggleBookmarkByData({ id: q.id, kind: "question", title: q.title, sub: q.promptPlain.slice(0, 100), note: "", session: q.sessionTitle });
  renderExamView();
}
function finishExam() {
  if (!examSession || examSession.finished) return;
  let correctCnt = 0;
  examSession.questions.forEach((q, i) => {
    const a = examSession.answers[i];
    if (a === q.correct) { setFlagState(wrongMap, q.id, false); setFlagState(doneMap, q.id, true); correctCnt++; }
    else if (a !== undefined) setFlagState(wrongMap, q.id, true);
  });
  saveWrongIds();
  saveDoneIds();
  const total = examSession.questions.length;
  const pct = total ? Math.round((correctCnt / total) * 100) : 0;
  const now = new Date();
  examHistory.unshift({
    ts: now.toISOString(),
    dateLabel: now.toLocaleDateString("vi-VN") + " " + now.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    scope: examSession.scopeLabel || "JLPT N1",
    correct: correctCnt,
    total,
    pct,
    duration: formatDuration(examSession.elapsedSec)
  });
  saveExamHistory();
  examSession.finished = true;
  persistActiveExam();
  clearInterval(examTimerInterval);
  renderExamView();
}
function exitExam() { clearInterval(examTimerInterval); examSession = null; persistActiveExam(); renderExamView(); }
function retryWrongExam() {
  const wrongQs = examSession.questions.filter((q, i) => examSession.answers[i] !== q.correct);
  if (!wrongQs.length) { showToast("Bạn đã đúng 100%"); return; }
  startExam(wrongQs);
}
function bookmarkAllWrongExam() {
  const wrongQs = examSession.questions.filter((q, i) => examSession.answers[i] !== q.correct);
  if (!wrongQs.length) return;
  const now = new Date().toISOString();
  wrongQs.forEach(q => {
    delete bmState.deleted[q.id];
    bmState.items[q.id] = { id: q.id, kind: "question", title: q.title, sub: q.promptPlain.slice(0, 100), note: "Sai khi làm bài thi", session: q.sessionTitle, addedAt: now, updatedAt: now };
  });
  onBookmarksChanged();
  renderExamView();
  showToast(`Đã lưu ${wrongQs.length} câu làm sai vào Bookmark`);
}

function renderExamResult(root) {
  const s = examSession, total = s.questions.length;
  let correctCnt = 0;
  s.questions.forEach((q, i) => { if (s.answers[i] === q.correct) correctCnt++; });
  const wrongCnt = total - correctCnt;
  const pct = Math.round((correctCnt / total) * 100);

  root.innerHTML = `
    <div style="max-width:840px;margin:0 auto;">
      <div class="exam-score-box">
        <div style="font-size:12px;font-weight:700;color:var(--muted);">KẾT QUẢ BÀI THI JLPT N1</div>
        <div class="exam-score-big">${correctCnt} / ${total} (${pct}%)</div>
        <div style="font-size:13.5px;color:var(--ink-2);margin-top:4px;">
          Thời gian: ${formatDuration(s.elapsedSec)} · Đúng: ${correctCnt} · Sai/Bỏ trống: ${wrongCnt}
        </div>
        <div style="display:flex;justify-content:center;gap:8px;flex-wrap:wrap;margin-top:16px;">
          <button class="btn btn-primary" onclick="exitExam()">Tạo đề thi mới</button>
          ${wrongCnt > 0 ? `<button class="btn" onclick="retryWrongExam()">Làm lại ${wrongCnt} câu sai</button>` : ""}
          ${wrongCnt > 0 ? `<button class="btn btn-gold-soft" onclick="bookmarkAllWrongExam()">Bookmark tất cả câu sai</button>` : ""}
        </div>
      </div>

      ${s.questions.map((q, i) => {
        const u = s.answers[i], ok = u === q.correct, isBm = !!bmState.items[q.id];
        return `
          <div class="review-item ${ok ? 'is-right' : 'is-wrong'}">
            <div style="display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;margin-bottom:8px;">
              <div><strong>Câu ${i + 1}:</strong> <span style="color:${ok?'var(--matcha)':'var(--vermilion)'};font-weight:700;">${ok ? "Đúng" : `Sai (Chọn ${u || "trống"} · Đáp án ${q.correct})`}</span></div>
              <button class="bm-btn ${isBm?'bookmarked':''}" onclick="toggleExamQuestionBookmark(${i})">${isBm ? ICONS.starFill : ICONS.star}<span>${isBm ? "Đã lưu" : "Bookmark"}</span></button>
            </div>
            <div class="jp-prompt" style="font-size:15px;padding:10px 13px;">${q.promptHtml}</div>
            <div style="font-size:13.5px;margin-bottom:8px;">
              ${q.options.map((o, oi) => {
                const n = oi + 1;
                const st = n === q.correct ? "color:var(--matcha);font-weight:700;" : (n === u ? "color:var(--vermilion);text-decoration:line-through;" : "color:var(--ink-2);");
                return `<div style="${st}">${n}. ${escapeHtml(o)}</div>`;
              }).join("")}
            </div>
            <details ${ok ? "" : "open"}>
              <summary style="cursor:pointer;font-size:13px;color:var(--indigo);font-weight:600;">Xem giải thích chi tiết</summary>
              <div style="margin-top:6px;">${q.explanationHtml}</div>
            </details>
          </div>
        `;
      }).join("")}
    </div>
  `;
}

// ==================== BOOKMARKS & FIRESTORE SYNC ====================
function mergeBookmarkStates(local, remote) {
  const merged = { items: {}, deleted: {} };
  const allIds = new Set([...Object.keys(local.items || {}), ...Object.keys(local.deleted || {}), ...Object.keys(remote.items || {}), ...Object.keys(remote.deleted || {})]);
  allIds.forEach(id => {
    const lItem = local.items?.[id], rItem = remote.items?.[id];
    const lDel = local.deleted?.[id] || "", rDel = remote.deleted?.[id] || "";
    const lTs = lItem ? (lItem.updatedAt || lItem.addedAt || "1970-01-01") : "";
    const rTs = rItem ? (rItem.updatedAt || rItem.addedAt || "1970-01-01") : "";
    const maxItemTs = lTs >= rTs ? lTs : rTs;
    const winItem = lTs >= rTs ? lItem : rItem;
    const maxDelTs = lDel >= rDel ? lDel : rDel;
    if (maxDelTs && maxDelTs > maxItemTs) merged.deleted[id] = maxDelTs;
    else if (winItem) merged.items[id] = winItem;
  });
  return merged;
}

function onBookmarksChanged() {
  saveBookmarksLocal();
  syncBookmarkBadgesOnly();
  if (STUDY_TABS.includes(currentTab)) renderSidebar(getFilteredItems(currentTab));
  if (currentUser && !isApplyingRemote) {
    document.getElementById("bmSyncInfo").textContent = "Đang đồng bộ lên Gmail...";
    scheduleCloudPush();
  }
}

function toggleBookmarkByData(data) {
  if (!data.id) return;
  const now = new Date().toISOString();
  if (bmState.items[data.id]) { delete bmState.items[data.id]; bmState.deleted[data.id] = now; }
  else {
    delete bmState.deleted[data.id];
    bmState.items[data.id] = { id: data.id, kind: data.kind || "term", title: data.title || data.id, sub: data.sub || "", note: data.note || "", session: data.session || "", addedAt: now, updatedAt: now };
  }
  onBookmarksChanged();
}

function addCustomBookmark() {
  const w = document.getElementById("customWord").value.trim();
  const n = document.getElementById("customNote").value.trim();
  if (!w) return;
  const now = new Date().toISOString(), id = "custom::" + w;
  delete bmState.deleted[id];
  bmState.items[id] = { id, kind: "custom", title: w, sub: "", note: n, session: "Tự thêm", addedAt: now, updatedAt: now };
  document.getElementById("customWord").value = "";
  document.getElementById("customNote").value = "";
  onBookmarksChanged();
  showToast("Đã lưu vào Bookmark");
}

function removeBookmark(id) { delete bmState.items[id]; bmState.deleted[id] = new Date().toISOString(); onBookmarksChanged(); }

function syncBookmarkBadgesOnly() {
  const items = bmState.items, count = Object.keys(items).length;
  document.getElementById("bmCount").textContent = count;
  document.getElementById("bmCountDrawer").textContent = count;

  document.querySelectorAll("[data-bm-id]").forEach(el => {
    const isBm = !!items[el.dataset.bmId];
    el.classList.toggle("bookmarked", isBm);
    if (el.classList.contains("bm-btn-card")) el.innerHTML = `${isBm ? ICONS.starFill : ICONS.star}<span>${isBm ? "Đã lưu" : "Bookmark"}</span>`;
    else if (el.classList.contains("bm-btn")) el.innerHTML = isBm ? ICONS.starFill : ICONS.star;
    else if (el.classList.contains("jp-pill")) { const s = el.querySelector(".pill-star"); if (s) s.textContent = isBm ? "★" : "☆"; }
  });
  document.querySelectorAll("[data-bm-card]").forEach(c => c.classList.toggle("is-bookmarked", !!items[c.dataset.bmCard] || !!c.querySelector(".bookmarked")));
  document.querySelectorAll("[data-bm-row]").forEach(r => r.classList.toggle("is-bookmarked", !!items[r.dataset.bmRow]));
  renderDrawerList();
}

function renderDrawerList() {
  const listEl = document.getElementById("bmList");
  const q = (document.getElementById("bmDrawerSearch")?.value || "").trim().toLowerCase();
  let items = Object.values(bmState.items).sort((a, b) => (b.addedAt || "").localeCompare(a.addedAt || ""));
  if (q) items = items.filter(it => (it.title + " " + it.sub + " " + it.note + " " + it.session).toLowerCase().includes(q));
  if (!items.length) {
    listEl.innerHTML = '<p style="color:var(--muted);font-size:12.5px;text-align:center;">Chưa có mục nào được bookmark.</p>';
    return;
  }
  listEl.innerHTML = items.map(item => {
    const isQ = item.kind === "question";
    const fullQ = isQ ? findStudyItemById(item.id) : null;
    const cleanTitle = isQ && fullQ ? fullQ.shortLabel : item.title;
    const cleanSub = (isQ && fullQ ? fullQ.jpText : (item.sub || "")).replace(/<[^>]+>/g, "");
    const cleanNote = (item.note || "").replace(/<[^>]+>/g, "");
    const speakTxt = isQ ? cleanSub : item.title;
    return `
      <div class="bm-item">
        <div class="bm-item-top">
          <div style="min-width:0;flex:1;">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span class="tag-pill ${isQ?'':'word'}">${isQ ? "Bài tập" : "Từ vựng"}</span>
              <span class="bm-item-title">${escapeHtml(cleanTitle)}</span>
            </div>
            ${cleanSub ? `<div class="bm-item-sub">${escapeHtml(cleanSub)}</div>` : ""}
            ${cleanNote ? `<div class="bm-item-sub">${escapeHtml(cleanNote)}</div>` : ""}
            <div class="bm-item-meta">${escapeHtml(item.session)}</div>
          </div>
          <div style="display:flex;gap:4px;flex-shrink:0;align-items:center;">
            ${!isQ ? `<a class="mazii-link" href="${maziiUrl(item.title)}" target="_blank" rel="noopener" title="Tra từ trên Mazii">Mazii</a>` : ""}
            ${isQ && fullQ ? `<button class="btn btn-icon" onclick='jumpToBookmarkedItem(${JSON.stringify(item.id)})' title="Xem câu đầy đủ">${ICONS.eye}</button>` : ""}
            ${speakTxt ? `<button class="btn btn-icon" onclick='speakJapanese(${JSON.stringify(speakTxt)})' title="Nghe đọc">${ICONS.volume}</button>` : ""}
            <button class="btn btn-icon" onclick='removeBookmark(${JSON.stringify(item.id)})' title="Xóa">${ICONS.close}</button>
          </div>
        </div>
      </div>
    `;
  }).join("");
}

// ==================== SERVER-GATED CONTENT FETCH + FIREBASE + ADMIN ====================
async function fetchPublicMarkdownFiles(manual = false) {
  setSyncStatus("Đang tải...", "syncing");
  lastFetchError = "";
  try {
    const headers = {};
    if (currentUser) {
      try {
        const token = await currentUser.getIdToken();
        if (token) headers.Authorization = "Bearer " + token;
      } catch {}
    }
    const r = await fetch(`/api/content?_=${Date.now()}`, { headers });
    const data = await r.json().catch(() => ({}));
    if (!r.ok) throw new Error(data.error || `HTTP ${r.status}`);

    accessState = {
      access: data.access || "preview",
      status: data.status || "guest",
      role: data.role || "guest",
      expiresAt: data.expiresAt || "",
      totalCounts: data.totalCounts || {}
    };
    mdStore = Object.assign({ tuvung: "", nguphap: "", dochieu: "", nghehieu: "" }, data.files || {});

    if (accessState.access === "full" && currentUser) {
      localStorage.setItem(scopedKey(KEYS.MD_CACHE, currentUser.uid), JSON.stringify(mdStore));
      localStorage.setItem(KEYS.LAST_SYNC, new Date().toISOString());
    }
    rebuildAllContent();

    const t = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    if (accessState.access === "full") {
      setSyncStatus(`Full (${t})`, "ok");
      if (manual) showToast(`Đã tải toàn bộ 4 file bài học (${parsedQuizBank.length} câu thi)`);
    } else {
      const labelMap = { guest: "Xem thử (1 bài)", pending: "Chờ duyệt", expired: "Hết hạn", blocked: "Đã khóa" };
      setSyncStatus(labelMap[accessState.status] || "Xem thử", "warn");
      if (manual) showToast("Đang ở chế độ xem thử (1 bài đầu mỗi mục)");
    }
  } catch (err) {
    lastFetchError = err.message || String(err);
    const hasCache = STUDY_TABS.some(t => !!mdStore[t]);
    setSyncStatus(hasCache ? "Đang dùng Cache" : "Lỗi tải bài", hasCache ? "warn" : "err");
    if (!hasCache) renderCurrentView();
    if (manual) showToast("Không tải được dữ liệu: " + lastFetchError, 4000);
  }
}

function initFirebase() {
  if (!window.firebase) return;
  if (!firebase.apps.length) firebase.initializeApp(FIREBASE_CONFIG);
  fbAuth = firebase.auth();
  fbDb = firebase.firestore();

  fbAuth.onAuthStateChanged(async (user) => {
    const prevUid = activeUid;
    currentUser = user;
    updateAuthUI();
    if (unsubFirestore) { unsubFirestore(); unsubFirestore = null; }
    if (unsubMemberDoc) { unsubMemberDoc(); unsubMemberDoc = null; }
    if (unsubAdminMembers) { unsubAdminMembers(); unsubAdminMembers = null; }

    const adminBtn = document.getElementById("adminNavBtn");
    if (adminBtn) adminBtn.style.display = isAdminUser() ? "inline-flex" : "none";

    if (user) {
      const email = (user.email || "").toLowerCase();
      loadUserStateForUid(user.uid);
      // Restore this user's own cached full content if present while fetching fresh from /api/content
      try {
        const cached = JSON.parse(localStorage.getItem(scopedKey(KEYS.MD_CACHE, user.uid)) || "null");
        if (cached && STUDY_TABS.some(t => !!cached[t])) { mdStore = Object.assign({ tuvung: "", nguphap: "", dochieu: "", nghehieu: "" }, cached); rebuildAllContent(); }
      } catch {}
      syncBookmarkBadgesOnly();

      // 1. Realtime personal study data sync (users/{uid})
      document.getElementById("bmSyncInfo").textContent = `Đồng bộ realtime (${user.email})`;
      const docRef = fbDb.collection("users").doc(user.uid);
      unsubFirestore = docRef.onSnapshot((snap) => {
        if (snap.exists) {
          const data = snap.data() || {};
          const remoteBm = data.bookmarks?.items ? data.bookmarks : { items: data.bookmarks || {}, deleted: {} };
          const remoteWrong = data.wrongMap || arrayToFlagMap(data.wrongIds || []);
          const remoteDone = data.doneMap || arrayToFlagMap(data.doneIds || []);
          const remoteMastered = data.masteredMap || arrayToFlagMap(data.masteredIds || []);

          const mergedBm = mergeBookmarkStates(bmState, remoteBm);
          const mergedWrongMap = mergeFlagMaps(wrongMap, remoteWrong);
          const mergedDoneMap = mergeFlagMaps(doneMap, remoteDone);
          const mergedMasteredMap = mergeFlagMaps(masteredMap, remoteMastered);
          const mergedNotes = mergeNotesMaps(notesMap, data.notes || {});
          const seenTs = new Set();
          const mergedHist = [...(examHistory || []), ...(data.examHistory || [])]
            .filter(h => h && h.ts && !seenTs.has(h.ts) && seenTs.add(h.ts))
            .sort((a, b) => b.ts.localeCompare(a.ts)).slice(0, 15);

          isApplyingRemote = true;
          bmState = mergedBm; wrongMap = mergedWrongMap; doneMap = mergedDoneMap;
          masteredMap = mergedMasteredMap; examHistory = mergedHist; notesMap = mergedNotes;
          refreshDerivedSets();

          saveBookmarksLocal(); saveWrongIds(true); saveDoneIds(true); saveMasteredIds(true); saveExamHistory(true); saveNotesMap(true);
          syncBookmarkBadgesOnly();
          if (STUDY_TABS.includes(currentTab)) renderCurrentView(true);
          else if (currentTab === "exam" && !examSession) renderExamView();
          else if (currentTab === "flashcard" && !fcAutoPlaying) { buildFlashcardDeck(true); renderFlashcardView(); }
          isApplyingRemote = false;

          if (!data.doneMap || Object.keys(mergedBm.items).length !== Object.keys(remoteBm.items || {}).length) {
            scheduleCloudPush();
          }
        } else {
          pushUserCloudState(false);
        }
      }, () => { document.getElementById("bmSyncInfo").textContent = "Lỗi đồng bộ đám mây"; });

      // 2. Membership / Admin access watcher
      if (isAdminUser()) {
        fetchPublicMarkdownFiles(false);
        unsubAdminMembers = fbDb.collection("members").onSnapshot((qs) => {
          adminMembers = qs.docs.map(d => Object.assign({ id: d.id }, d.data()));
          adminMembers.sort((a, b) => (b.updatedAt || b.createdAt || "").localeCompare(a.updatedAt || a.createdAt || ""));
          const pendingCnt = adminMembers.filter(m => m.status === "pending").length;
          const badge = document.getElementById("pendingBadge");
          if (badge) { badge.textContent = pendingCnt; badge.style.display = pendingCnt > 0 ? "inline-block" : "none"; }
          if (document.getElementById("adminModal")?.classList.contains("open")) renderAdminPanelBody();
        });
      } else {
        const memRef = fbDb.collection("members").doc(email);
        unsubMemberDoc = memRef.onSnapshot(async (snap) => {
          if (!snap.exists) {
            const now = new Date().toISOString();
            try {
              await memRef.set({
                email,
                displayName: user.displayName || "",
                photoURL: user.photoURL || "",
                status: "pending",
                expiresAt: "",
                note: "",
                createdAt: now,
                updatedAt: now
              });
            } catch (e) { console.warn("Create pending member error:", e); }
            fetchPublicMarkdownFiles(false);
            return;
          }
          const d = snap.data() || {};
          const key = `${email}::${d.status}::${d.expiresAt || ""}`;
          if (key !== lastFetchedAccessKey) {
            lastFetchedAccessKey = key;
            fetchPublicMarkdownFiles(false);
          }
        }, () => { fetchPublicMarkdownFiles(false); });
      }
    } else {
      lastFetchedAccessKey = "";
      if (prevUid !== "guest") {
        loadUserStateForUid("guest");
        mdStore = { tuvung: "", nguphap: "", dochieu: "", nghehieu: "" };
        syncBookmarkBadgesOnly();
      }
      document.getElementById("bmSyncInfo").textContent = "Lưu trên máy (Đăng nhập Gmail để đồng bộ)";
      fetchPublicMarkdownFiles(false);
    }
  });
}

// ==================== ADMIN PANEL (hakobi12@gmail.com) ====================
function openAdminPanel() {
  if (!isAdminUser()) return;
  document.getElementById("adminModal").classList.add("open");
  document.getElementById("adminBackdrop").classList.add("open");
  renderAdminPanelBody();
}
function closeAdminPanel() {
  document.getElementById("adminModal").classList.remove("open");
  document.getElementById("adminBackdrop").classList.remove("open");
}
function switchAdminTab(tab) {
  activeAdminTab = tab;
  document.querySelectorAll(".admin-tab-btn").forEach(b => b.classList.toggle("active", b.dataset.atab === tab));
  renderAdminPanelBody();
}
function renderAdminPanelBody() {
  const pending = adminMembers.filter(m => m.status === "pending");
  const all = adminMembers;
  document.getElementById("admCntPending").textContent = pending.length;
  document.getElementById("admCntAll").textContent = all.length;
  const body = document.getElementById("adminBody");

  if (activeAdminTab === "pending") {
    if (!pending.length) {
      body.innerHTML = `<p style="text-align:center;color:var(--muted);padding:24px 0;font-size:13px;">Không có tài khoản nào đang chờ duyệt.</p>`;
      return;
    }
    body.innerHTML = pending.map(m => `
      <div class="member-row">
        <div class="member-info">
          <div class="member-email">${escapeHtml(m.email)}</div>
          <div class="member-meta">${escapeHtml(m.displayName || "Chưa có tên")} · Yêu cầu lúc ${m.createdAt ? new Date(m.createdAt).toLocaleString("vi-VN") : "--"}</div>
        </div>
        <div class="member-actions">
          <button class="btn btn-active-matcha" onclick='adminApproveMember(${JSON.stringify(m.email)}, 0)' style="padding:4px 9px;font-size:12px;">Duyệt (Vĩnh viễn)</button>
          <button class="btn" onclick='adminApproveMember(${JSON.stringify(m.email)}, 30)' style="padding:4px 9px;font-size:12px;">+30 ngày</button>
          <button class="btn" onclick='adminSetMemberStatus(${JSON.stringify(m.email)}, "blocked")' style="padding:4px 9px;font-size:12px;color:var(--vermilion);">Từ chối</button>
        </div>
      </div>
    `).join("");
    return;
  }

  if (activeAdminTab === "add") {
    body.innerHTML = `
      <div style="font-size:12.5px;color:var(--ink-2);margin-bottom:8px;">
        Nhập 1 hoặc nhiều địa chỉ Gmail (mỗi dòng 1 email) để cấp quyền trước. Người dùng chỉ cần đăng nhập Gmail đó là vào dùng Full ngay lập tức.
      </div>
      <textarea id="admBulkEmails" class="admin-textarea" placeholder="hocvien1@gmail.com&#10;hocvien2@gmail.com"></textarea>
      <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:12px;">
        <select id="admDuration" style="padding:6px 10px;border:1px solid var(--border-strong);border-radius:6px;background:var(--bg);color:var(--ink);font-family:inherit;font-size:13px;">
          <option value="0">Thời hạn: Vĩnh viễn</option>
          <option value="14">Thời hạn: 14 ngày</option>
          <option value="30">Thời hạn: 30 ngày</option>
          <option value="90">Thời hạn: 90 ngày</option>
        </select>
        <input id="admNote" type="text" placeholder="Ghi chú (VD: Lớp N1 14 ngày)" style="flex:1;min-width:160px;padding:6px 10px;border:1px solid var(--border-strong);border-radius:6px;background:var(--bg);color:var(--ink);font-family:inherit;font-size:13px;">
        <button class="btn btn-primary" onclick="adminBulkAddMembers()">Cấp quyền ngay</button>
      </div>
    `;
    return;
  }

  // All members tab
  const q = (document.getElementById("admSearch")?.value || "").trim().toLowerCase();
  const filtered = q ? all.filter(m => (m.email + " " + (m.displayName || "") + " " + (m.note || "")).toLowerCase().includes(q)) : all;
  body.innerHTML = `
    <input id="admSearch" type="text" value="${escapeHtml(q)}" oninput="renderAdminPanelBody()" placeholder="Tìm theo Gmail, tên hoặc ghi chú..." style="width:100%;padding:7px 10px;border:1px solid var(--border-strong);border-radius:6px;background:var(--bg);color:var(--ink);font-size:13px;margin-bottom:10px;">
    ${filtered.length ? filtered.map(m => {
      const expLabel = m.expiresAt ? `Hạn: ${new Date(m.expiresAt).toLocaleDateString("vi-VN")}` : "Vĩnh viễn";
      return `
        <div class="member-row">
          <div class="member-info">
            <div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;">
              <span class="status-chip ${escapeHtml(m.status)}">${m.status === "approved" ? "Đã duyệt" : (m.status === "pending" ? "Chờ duyệt" : "Đã khóa")}</span>
              <span class="member-email">${escapeHtml(m.email)}</span>
            </div>
            <div class="member-meta">${escapeHtml(m.displayName || "")} ${m.note ? "· " + escapeHtml(m.note) : ""} · ${expLabel}</div>
          </div>
          <div class="member-actions">
            ${m.status !== "approved"
              ? `<button class="btn btn-active-matcha" onclick='adminApproveMember(${JSON.stringify(m.email)}, 0)' style="padding:4px 8px;font-size:11.5px;">Duyệt</button>`
              : `<button class="btn" onclick='adminSetMemberStatus(${JSON.stringify(m.email)}, "blocked")' style="padding:4px 8px;font-size:11.5px;color:var(--vermilion);">Khóa</button>`}
            <button class="btn" onclick='adminDeleteMember(${JSON.stringify(m.email)})' style="padding:4px 8px;font-size:11.5px;">Xóa</button>
          </div>
        </div>
      `;
    }).join("") : '<p style="text-align:center;color:var(--muted);font-size:13px;">Không có thành viên nào.</p>'}
  `;
}

async function adminApproveMember(email, days = 0) {
  if (!isAdminUser() || !fbDb) return;
  const now = new Date();
  const expiresAt = days > 0 ? new Date(now.getTime() + days * 86400000).toISOString() : "";
  await fbDb.collection("members").doc(email.toLowerCase()).set({
    email: email.toLowerCase(),
    status: "approved",
    expiresAt,
    approvedBy: ADMIN_EMAIL,
    updatedAt: now.toISOString()
  }, { merge: true });
  showToast(`Đã duyệt ${email}`);
}

async function adminSetMemberStatus(email, status) {
  if (!isAdminUser() || !fbDb) return;
  await fbDb.collection("members").doc(email.toLowerCase()).set({
    status,
    updatedAt: new Date().toISOString()
  }, { merge: true });
  showToast(`Đã cập nhật ${email} → ${status}`);
}

async function adminDeleteMember(email) {
  if (!isAdminUser() || !fbDb) return;
  if (!confirm(`Xóa quyền của ${email}?`)) return;
  await fbDb.collection("members").doc(email.toLowerCase()).delete();
  showToast(`Đã xóa ${email}`);
}

async function adminBulkAddMembers() {
  if (!isAdminUser() || !fbDb) return;
  const raw = document.getElementById("admBulkEmails")?.value || "";
  const days = parseInt(document.getElementById("admDuration")?.value || "0", 10);
  const note = (document.getElementById("admNote")?.value || "").trim();
  const emails = [...new Set(raw.split(/[\n,;]+/).map(s => s.trim().toLowerCase()).filter(s => s.includes("@")))];
  if (!emails.length) { showToast("Hãy nhập ít nhất 1 địa chỉ Gmail hợp lệ"); return; }

  const now = new Date();
  const expiresAt = days > 0 ? new Date(now.getTime() + days * 86400000).toISOString() : "";
  await Promise.all(emails.map(email =>
    fbDb.collection("members").doc(email).set({
      email,
      status: "approved",
      expiresAt,
      note,
      approvedBy: ADMIN_EMAIL,
      createdAt: now.toISOString(),
      updatedAt: now.toISOString()
    }, { merge: true })
  ));
  document.getElementById("admBulkEmails").value = "";
  showToast(`Đã cấp quyền cho ${emails.length} tài khoản Gmail`);
  switchAdminTab("members");
}

function updateAuthUI() {
  const btn = document.getElementById("authBtn");
  if (!btn) return;
  if (currentUser) {
    const shortName = (currentUser.displayName || currentUser.email || "Gmail").split(" ")[0];
    const avatar = currentUser.photoURL
      ? `<img src="${escapeHtml(currentUser.photoURL)}" style="width:18px;height:18px;border-radius:50%;object-fit:cover;">`
      : ICONS.user;
    btn.className = "btn";
    btn.innerHTML = `${avatar}<span>${escapeHtml(shortName)}</span>`;
    btn.title = `${currentUser.email} — Bấm để quản lý tài khoản`;
  } else {
    btn.className = "btn btn-primary";
    btn.innerHTML = `${ICONS.user}<span>Đăng nhập</span>`;
    btn.title = "Đăng nhập Gmail để đồng bộ Bookmark & Câu hay sai";
  }
}

function handleAuthClick() { if (currentUser) openSettings(); else signInWithGmail(); }
async function signInWithGmail() {
  if (!fbAuth) return;
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await fbAuth.signInWithPopup(provider);
    showToast("Đã đăng nhập Gmail & bật đồng bộ tự động");
    closeSettings();
  } catch (err) {
    if (err.code === "auth/popup-blocked" || err.code === "auth/cancelled-popup-request") await fbAuth.signInWithRedirect(provider);
    else if (err.code !== "auth/popup-closed-by-user") showToast("Lỗi đăng nhập: " + err.message, 4000);
  }
}
async function signOutGmail() { if (!fbAuth) return; await fbAuth.signOut(); closeSettings(); showToast("Đã đăng xuất tài khoản Gmail"); }
function scheduleCloudPush() { clearTimeout(pushTimer); pushTimer = setTimeout(() => pushUserCloudState(false), 500); }
async function pushUserCloudState(manual = false) {
  if (!currentUser || !fbDb) { if (manual) signInWithGmail(); return; }
  try {
    await fbDb.collection("users").doc(currentUser.uid).set({
      email: currentUser.email || "", updatedAt: new Date().toISOString(),
      bookmarks: { items: bmState.items, deleted: bmState.deleted },
      wrongMap, doneMap, masteredMap,
      wrongIds: [...wrongIds],
      doneIds: [...doneIds],
      masteredIds: [...masteredIds],
      examHistory: examHistory.slice(0, 15),
      notes: notesMap
    }, { merge: true });
    const t = new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" });
    document.getElementById("bmSyncInfo").textContent = `Đã đồng bộ (${t})`;
    if (manual) showToast("Đã đồng bộ dữ liệu lên tài khoản Gmail");
  } catch (err) {
    document.getElementById("bmSyncInfo").textContent = "Lỗi đồng bộ (đã lưu máy)";
    if (manual) showToast("Lỗi đồng bộ: " + err.message);
  }
}

function loadLocalMarkdownFiles(event) {
  const files = Array.from(event.target.files || []);
  if (!files.length) return;
  let loaded = 0;
  files.forEach(file => {
    const r = new FileReader();
    r.onload = () => {
      const n = file.name.toUpperCase();
      if (n.includes("01") || n.includes("TU_VUNG")) mdStore.tuvung = r.result;
      else if (n.includes("02") || n.includes("NGU_PHAP")) mdStore.nguphap = r.result;
      else if (n.includes("03") || n.includes("DOC_HIEU")) mdStore.dochieu = r.result;
      else if (n.includes("04") || n.includes("NGHE_HIEU")) mdStore.nghehieu = r.result;
      else mdStore.tuvung = r.result;
      if (++loaded === files.length) {
        localStorage.setItem(KEYS.MD_CACHE, JSON.stringify(mdStore));
        rebuildAllContent(); closeSettings();
        setSyncStatus("File nội bộ", "warn");
        showToast(`Đã nạp ${loaded} file .md (${parsedQuizBank.length} câu thi)`);
      }
    };
    r.readAsText(file, "utf-8");
  });
}

// ==================== UI ACTIONS & SHORTCUTS ====================
function switchTab(tabId) {
  if (currentTab === "flashcard" && tabId !== "flashcard") stopFlashcardAutoplay(true);
  if (STUDY_TABS.includes(currentTab) && tabId !== currentTab) stopStudyReader(true);
  currentTab = tabId;
  document.querySelectorAll(".tab-btn, .bnav-btn").forEach(b => b.classList.toggle("active", b.dataset.tab === tabId));
  if (tabId === "flashcard") buildFlashcardDeck();
  renderCurrentView();
  document.getElementById("stageScroll").scrollTop = 0;
  if (window.innerWidth <= 960) window.scrollTo({ top: 0 });
}
function toggleQuizMode() {
  quizHideMode = !quizHideMode;
  document.body.classList.toggle("quiz-mode", quizHideMode);
  document.getElementById("quizBtn").classList.toggle("btn-active-matcha", quizHideMode);
}
function toggleOneAns(btn, qId) {
  const a = btn.nextElementSibling;
  if (a) {
    a.classList.toggle("revealed");
    if (a.classList.contains("revealed") && qId) markQuestionDoneSilently(qId);
  }
}
function toggleFilterBookmarked() {
  onlyBookmarked = !onlyBookmarked;
  document.getElementById("filterBmBtn").classList.toggle("btn-active-gold", onlyBookmarked);
  renderCurrentView();
}
function toggleFilterUndone() {
  onlyUndone = !onlyUndone;
  document.getElementById("filterUndoneBtn").classList.toggle("btn-active-indigo", onlyUndone);
  renderCurrentView();
}
function toggleFilterWrong() {
  onlyWrong = !onlyWrong;
  document.getElementById("filterWrongBtn").classList.toggle("btn-active-vermilion", onlyWrong);
  renderCurrentView();
}
function toggleMobileSidebar() { document.getElementById("sidebar").classList.toggle("mobile-open"); document.getElementById("sidebarBackdrop").classList.toggle("open"); }
function closeMobileSidebar() { document.getElementById("sidebar").classList.remove("mobile-open"); document.getElementById("sidebarBackdrop").classList.remove("open"); }
function openDrawer() { document.getElementById("drawer").classList.add("open"); document.getElementById("drawerBackdrop").classList.add("open"); }
function closeDrawer() { document.getElementById("drawer").classList.remove("open"); document.getElementById("drawerBackdrop").classList.remove("open"); }
function openSettings() {
  const box = document.getElementById("accountInfoBox");
  if (currentUser) {
    box.innerHTML = `<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;"><div style="display:flex;align-items:center;gap:10px;">${currentUser.photoURL ? `<img src="${escapeHtml(currentUser.photoURL)}" style="width:36px;height:36px;border-radius:50%;">` : ""}<div><div style="font-weight:700;">${escapeHtml(currentUser.displayName || "Người dùng Gmail")}</div><div style="font-size:12px;color:var(--muted);">${escapeHtml(currentUser.email)} · Đang đồng bộ realtime</div></div></div><button class="btn" onclick="signOutGmail()" style="color:var(--vermilion);">Đăng xuất</button></div>`;
  } else {
    box.innerHTML = `<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;"><div><div style="font-weight:700;">Chưa đăng nhập Gmail</div><div style="font-size:12px;color:var(--muted);">Đăng nhập để đồng bộ Bookmark &amp; Câu hay sai giữa PC và Điện thoại.</div></div><button class="btn btn-primary" onclick="signInWithGmail()">Đăng nhập Gmail</button></div>`;
  }
  syncPreferencePills();
  document.getElementById("settingsModal").classList.add("open");
  document.getElementById("settingsBackdrop").classList.add("open");
}
function closeSettings() { document.getElementById("settingsModal").classList.remove("open"); document.getElementById("settingsBackdrop").classList.remove("open"); }
function clearLocalCache() { localStorage.removeItem(KEYS.MD_CACHE); mdStore = { tuvung: "", nguphap: "", dochieu: "", nghehieu: "" }; rebuildAllContent(); closeSettings(); showToast("Đã xóa cache .md"); }

function exportMarkdown() {
  const items = Object.values(bmState.items);
  if (!items.length) { showToast("Chưa có bookmark nào"); return; }
  let md = "# DANH SÁCH BOOKMARK JLPT N1\n\n| Mục | Ghi chú / Nghĩa | Nguồn |\n| :--- | :--- | :--- |\n";
  items.forEach(it => {
    const note = [it.sub, it.note].filter(Boolean).join(" — ").replace(/<[^>]+>/g, "").replace(/\|/g, "/");
    md += `| **${it.title.replace(/\|/g, "/")}** | ${note} | ${it.session.replace(/\|/g, "/")} |\n`;
  });
  downloadFile("JLPT_N1_BOOKMARKS.md", md, "text/markdown;charset=utf-8");
}
function exportJson() { downloadFile("jlpt_bookmarks.json", JSON.stringify({ version: 2, items: bmState.items, deleted: bmState.deleted }, null, 2), "application/json"); }
function importJson(e) {
  const f = e.target.files[0]; if (!f) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const p = JSON.parse(r.result);
      bmState = mergeBookmarkStates(bmState, p.items ? p : { items: p, deleted: {} });
      onBookmarksChanged(); showToast("Đã khôi phục Bookmark");
    } catch { showToast("File JSON không hợp lệ"); }
  };
  r.readAsText(f);
}
function downloadFile(name, content, mime) { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([content], { type: mime })); a.download = name; a.click(); }

document.addEventListener("click", (e) => {
  const t = e.target.closest("[data-bm-id]");
  if (t) {
    e.stopPropagation();
    toggleBookmarkByData({ id: t.dataset.bmId, kind: t.dataset.bmKind, title: t.dataset.bmTitle, sub: t.dataset.bmSub, note: t.dataset.bmNote, session: t.dataset.bmSession });
  }
});

document.addEventListener("keydown", (e) => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement?.tagName)) return;
  if (currentTab === "exam" && examSession && !examSession.finished) {
    if (["1", "2", "3", "4"].includes(e.key)) {
      const s = examSession;
      if (!(s.mode === "instant" && s.answers[s.currentIdx] !== undefined)) selectExamOption(parseInt(e.key, 10));
    } else if (e.key === "ArrowRight") moveExamQuestion(1);
    else if (e.key === "ArrowLeft") moveExamQuestion(-1);
    return;
  }
  if (currentTab === "flashcard" && fcDeck.length) {
    if (e.key === " ") { e.preventDefault(); flipFlashcard(); }
    else if (e.key === "ArrowRight") stepFlashcard(1);
    else if (e.key === "ArrowLeft") stepFlashcard(-1);
  }
});

// ==================== BOOTSTRAP ====================
initTheme();
document.documentElement.style.setProperty("--font-scale", String(fontScale));
loadUserStateForUid("guest");
restoreActiveExam();
rebuildAllContent();
initFirebase();

if ("serviceWorker" in navigator && location.protocol.startsWith("http")) {
  navigator.serviceWorker.register("./sw.js").catch(() => {});
}
