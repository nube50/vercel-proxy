export default async function handler(req, res) {
  try {
    const backendRes = await fetch("https://ruta.culturavpn.site", {
      method: req.method,
      headers: req.headers,
      body: req.method !== "GET" ? req.body : undefined,
    });

    const data = await backendRes.arrayBuffer();

    res.status(backendRes.status);
    res.setHeader("Content-Type", "application/octet-stream");
    res.send(Buffer.from(data));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
