import assert from "node:assert/strict";
import { after, before, describe, it } from "node:test";
import { app } from "./server.js";

describe("API health endpoint", () => {
  let server;
  let baseUrl;

  before(() => {
    server = app.listen(0);
    const { port } = server.address();
    baseUrl = `http://127.0.0.1:${port}`;
  });

  after(() => {
    server.close();
  });

  it("returns an ok status", async () => {
    const response = await fetch(`${baseUrl}/api/health`);
    const body = await response.json();

    assert.equal(response.status, 200);
    assert.deepEqual(body, { status: "ok" });
  });
});