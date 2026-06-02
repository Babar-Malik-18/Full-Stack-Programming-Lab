const request = require("supertest");
const app = require("../server");

describe("Task 1: Weather Forecast API Testing", () => {
  test("Unit Test: Weather API info route should work", async () => {
    const response = await request(app).get("/info");

    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("availableEndpoints");
  });

  test("Integration Test: Weather route should return JSON response", async () => {
    const response = await request(app).get("/api/weather/Karachi");

    expect(response.headers["content-type"]).toMatch(/json/);
    expect(response.statusCode).toBeGreaterThanOrEqual(200);
    expect(response.statusCode).toBeLessThan(600);
  });

  test("System Test: Invalid weather route should return 404", async () => {
    const response = await request(app).get("/wrong-weather-route");

    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty("success", false);
    expect(response.body).toHaveProperty("error");
  });
});