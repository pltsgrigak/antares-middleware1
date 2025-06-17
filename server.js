const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 10000;

app.use(bodyParser.json());

app.post("/api/data", (req, res) => {
  console.log("Data diterima dari ESP32:", req.body);
  // nanti bisa diteruskan ke Antares di sini
  res.status(200).send("Data diterima!");
});

app.get("/", (req, res) => {
  res.send("Middleware Antares jalan!");
});

app.listen(port, () => {
  console.log(`Server middleware berjalan di port ${port}`);
});
