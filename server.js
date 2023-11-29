import express from "express";

const PORT = 9898;
const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.use(express.static("assets"));

app.listen(PORT, () => console.log("Server http://localhost:" + PORT));
