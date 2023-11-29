import express from "express";
import path from "path";

const PORT = 9999;
const app = express();

app.use(express.static("assets"));

app.use(express.static("pages"));
app.use(express.static("img"));

app.get("/*.html", (req, res) => {
  const requestedPage = req.params[0];
  res.sendFile(path.join(__dirname, "pages", requestedPage));
});

app.listen(PORT, () => console.log("Servidor iniciado en el puerto " + PORT));
