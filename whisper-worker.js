// Speech recognition worker (Whisper via transformers.js). The model downloads once,
// then it's cached on the phone and runs offline.
import { pipeline, env } from 'https://cdn.jsdelivr.net/npm/@huggingface/transformers@3.8.1';

env.allowLocalModels = false;

let asr = null;
let loaded = '';

async function getAsr(model) {
  if (asr && loaded === model) return asr;
  asr = await pipeline('automatic-speech-recognition', model, {
    dtype: 'q8',
    device: 'wasm',
    progress_callback: (p) => self.postMessage({ type: 'progress', ...p }),
  });
  loaded = model;
  return asr;
}

function spreadWords(chunks) {
  // Fallback when only sentence timestamps are available: spread words across each sentence.
  const words = [];
  for (const c of chunks) {
    const [s, e0] = c.timestamp;
    const e = e0 ?? s + 1;
    const parts = c.text.trim().split(/\s+/).filter(Boolean);
    const total = parts.reduce((n, w) => n + w.length + 1, 0) || 1;
    let t = s;
    for (const w of parts) {
      const d = ((w.length + 1) / total) * (e - s);
      words.push({ start: t, end: t + d, text: w });
      t += d;
    }
  }
  return words;
}

self.onmessage = async (e) => {
  const { id, audio, model } = e.data;
  try {
    const run = await getAsr(model);
    let words;
    try {
      const out = await run(audio, { return_timestamps: 'word', chunk_length_s: 30, stride_length_s: 5 });
      words = (out.chunks || []).map((c) => ({
        start: c.timestamp[0],
        end: c.timestamp[1] ?? c.timestamp[0] + 0.3,
        text: c.text,
      }));
    } catch (wordErr) {
      const out = await run(audio, { return_timestamps: true, chunk_length_s: 30, stride_length_s: 5 });
      words = spreadWords(out.chunks || []);
    }
    self.postMessage({ type: 'done', id, words });
  } catch (err) {
    self.postMessage({ type: 'error', id, message: String((err && err.message) || err) });
  }
};
