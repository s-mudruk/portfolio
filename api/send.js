export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://me.sergun.space');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).end();

  const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
  const text = (body?.text || '').trim().slice(0, 4000);
  if (!text) return res.status(400).json({ error: 'empty' });

  const token = process.env.TG_BOT_TOKEN;
  const chatId = process.env.TG_CHAT_ID;
  if (!token || !chatId) return res.status(500).json({ error: 'not configured' });

  try {
    const r = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: Number(chatId), text: '[me.sergun.space]\n' + text })
    });
    if (r.ok) return res.status(200).json({ ok: true });
    return res.status(502).json({ error: 'upstream' });
  } catch {
    return res.status(502).json({ error: 'fetch failed' });
  }
}
