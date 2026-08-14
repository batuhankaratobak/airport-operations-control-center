import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);

async function createWorker() {
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker;
}

const environment = {
  ASSETS: {
    fetch: async () => new Response("Not found", { status: 404 }),
  },
};

const executionContext = {
  waitUntil() {},
  passThroughOnException() {},
};

test("server-renders the operations dashboard", async () => {
  const worker = await createWorker();
  const response = await worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    environment,
    executionContext,
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /Airport Operations Control Center/i);
  assert.match(html, /Operations Overview/i);
  assert.match(html, /Recent flight activity/i);
});

test("serves a typed airport statistics API response", async () => {
  const worker = await createWorker();
  const response = await worker.fetch(
    new Request("http://localhost/api/stats", {
      headers: { accept: "application/json" },
    }),
    environment,
    executionContext,
  );

  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^application\/json\b/i);

  const payload = await response.json();
  assert.equal(payload.error, null);
  assert.equal(typeof payload.meta.timestamp, "string");
  assert.equal(payload.data.totalFlights, 184);
  assert.equal(payload.data.departures + payload.data.arrivals, 184);
});
