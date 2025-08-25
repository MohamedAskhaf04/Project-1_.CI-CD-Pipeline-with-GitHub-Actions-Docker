const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello DevOps CI/CD with Docker!");
});

if (require.main === module) {
  app.listen(PORT, () => console.log(`App running on port ${PORT}`));
}

module.exports = app;
