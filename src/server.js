const express = require("express");

const path = require("path");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static(path.join(__dirname, "../public")));
const PORT = process.env.PORT || 3000;
app.get("/", (res, req) => res.setEncoding("from ec2"));
app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running at http://localhost:" + PORT);
});
