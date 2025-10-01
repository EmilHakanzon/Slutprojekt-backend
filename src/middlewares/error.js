// skapar middleware för felhantering
// 404 - Not Found och generell felhantering
export function notFound(_req, res) {
  res.status(404).json({ error: "NotFound" });
}

export function errorHandler(err, _req, res, _next) {
  const status = Number(err?.status) || 500;
  const message = status >= 500 ? "Internal server error" : (err?.message || "Bad request");
  res.status(status).json({ error: err?.code || "Error", message });
}
