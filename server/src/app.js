const express = require("express");

const analyzeRouter = require("./routes/analysis.route");
const feedbackRouter = require("./routes/feedback.route");

const app = express();

app.use(express.json());

app.use("/api/analyze", analyzeRouter);

app.use("/api/feedback", feedbackRouter);

module.exports = app;