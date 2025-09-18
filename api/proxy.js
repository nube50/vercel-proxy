export default async function handler(req, res) {
  // Apunta al subdominio TLS de Cloudflare
  const targetUrl = `https://ruta.culturavpn.site${req.url}`;

  try {
    const response = await fetch(targetUrl, {
      method: req.method,
      headers: { ...req.headers },
      body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
    });

    // Preserva el código de estado
    res.status(response.status);

    // Copia headers
    response.headers.forEach((value, key) => res.setHeader(key, value));

    const data = await response.text();
    res.send(data);

  } catch (error) {
    res.status(500).send("Error en el proxy: " + error.message);
  }
}
