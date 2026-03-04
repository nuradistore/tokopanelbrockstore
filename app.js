/**
 * cPanel Node.js (Passenger) entry point.
 * - Listens on process.env.PORT
 * - Binds to 0.0.0.0
 */

const http = require("http");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const hostname = "0.0.0.0";
const port = parseInt(process.env.PORT || "3000", 10);

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    http
      .createServer((req, res) => handle(req, res))
      .listen(port, hostname, () => {
        console.log(`> Ready on http://${hostname}:${port} (dev=${dev})`);
      });
  })
  .catch((err) => {
    console.error("Next prepare error:", err);
    process.exit(1);
  });
