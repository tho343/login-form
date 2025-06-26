const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const app = express();
//body parser middleware
app.use(express.json());

//save static files
app.use(express.static(path.join(__dirname, "../public")));
const PORT = process.env.PORT || 3000;
//login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  //Add real validation logic
  if (email === "admin@example.com" && password === "password123") {
    return res.send({ message: "Login successful" });
  }
  return res.status(401).send({ message: "Invalid credentials" });
});
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running at http://localhost:" + PORT);
});
module.exports = app;
