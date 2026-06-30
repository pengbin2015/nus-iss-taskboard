import { describe, it, expect, beforeEach } from "vitest";
import request from "supertest";
import { createApp } from "../src/app";
import { store } from "../src/store";

const app = createApp();

beforeEach(() => {
  store.reset();
});

describe("METHOD /route", () => {
  it("returns 200 with expected body", async () => {
    const res = await request(app).get("/route");
    expect(res.status).toBe(200);
  });

  it("returns 400 when input is invalid", async () => {
    const res = await request(app).post("/route").send({});
    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  it("returns 404 when resource does not exist", async () => {
    const res = await request(app).get("/route/does-not-exist");
    expect(res.status).toBe(404);
  });
});
