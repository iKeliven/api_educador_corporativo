const express = require("express");
const cors = require("cors");

const app = express();
const authRoutes = require("./routes/auth.routes");
const journeyRoutes = require("./routes/journey.routes");
const trailRoutes = require("./routes/trail.routes");

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/journeys", journeyRoutes);
app.use("/trails", trailRoutes);

app.get("/", (req, res) => {
  return res.json({
    message: "API Journey Builder rodando",
  });
});

module.exports = app;