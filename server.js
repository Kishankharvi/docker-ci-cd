const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static HTML
app.use(express.static(path.join(__dirname, "public")));

app.get("/api/click", (req, res) => {
  res.json({
    message: "🚀 Button clicked! App is running inside Docker."
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
