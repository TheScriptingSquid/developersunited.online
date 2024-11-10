const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// In-memory storage for visit counts
const visitCounts = {
  portfolio1: 0,
  portfolio2: 0,
};

// API endpoint to get visit count for a portfolio
app.get("/visit/:portfolioId", (req, res) => {
  const portfolioId = req.params.portfolioId;
  if (visitCounts[portfolioId] !== undefined) {
    res.json({ visitCount: visitCounts[portfolioId] });
  } else {
    res.status(404).json({ message: "Portfolio not found" });
  }
});

// API endpoint to increment visit count
app.post("/visit/:portfolioId", (req, res) => {
  const portfolioId = req.params.portfolioId;
  if (visitCounts[portfolioId] !== undefined) {
    visitCounts[portfolioId]++;
    res.json({ visitCount: visitCounts[portfolioId] });
  } else {
    res.status(404).json({ message: "Portfolio not found" });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
