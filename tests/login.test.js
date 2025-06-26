const request = require("supertest");
const app = require("../src/server");

describe("POST /login", () => {
  it("should return success for valid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "admin@example.com", password: "password123" });

    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Login successful");
  });
  it("should return 401 for invalid credentials", async () => {
    const res = await request(app)
      .post("/login")
      .send({ email: "wrong@example.com", password: "wrongpass" });

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });
  it("should return 401 if fields are missing", async () => {
    const res = await request(app).post("/login").send({});

    expect(res.statusCode).toBe(401);
    expect(res.body.message).toBe("Invalid credentials");
  });
});
