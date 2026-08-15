import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { after, before, test } from "node:test";

const port = 3210;
const baseUrl = `http://127.0.0.1:${port}`;
let server;

before(async () => {
  server = spawn("npm", ["run", "start", "--", "--hostname", "127.0.0.1", "--port", String(port)], {
    env: { ...process.env, NODE_ENV: "production" },
    stdio: "pipe",
  });

  for (let attempt = 0; attempt < 60; attempt += 1) {
    try {
      const response = await fetch(baseUrl);
      if (response.ok) return;
    } catch {
      // The production server may still be starting.
    }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  throw new Error("Production server did not become ready in time.");
});

after(() => {
  server?.kill("SIGTERM");
});

test("server-renders the operations dashboard", async () => {
  const response = await fetch(baseUrl, { headers: { accept: "text/html" } });

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Airport Operations Control Center/i);
  assert.match(html, /Operations Overview/i);
  assert.match(html, /Recent flight activity/i);
});

test("serves a typed airport statistics API response", async () => {
  const response = await fetch(`${baseUrl}/api/stats`, {
    headers: { accept: "application/json" },
  });

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/json\b/i);

  const payload = await response.json();
  assert.equal(payload.error, null);
  assert.equal(typeof payload.meta.timestamp, "string");
  assert.equal(payload.data.totalFlights, 184);
  assert.equal(payload.data.departures + payload.data.arrivals, 184);
});
