const express = require("express");
const cors = require("cors");

const analyzeRouter = require("./routes/analysis.route");
const feedbackRouter = require("./routes/feedback.route");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/analyze", analyzeRouter);

app.use("/api/feedback", feedbackRouter);

module.exports = app;

