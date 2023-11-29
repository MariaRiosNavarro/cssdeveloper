import express from "express";
import path from "path";

const PORT = 9898;
const app = express();

app.use(express.static("assets"));

app.use(express.static("pages"));
app.use(express.static("img"));

app.listen(PORT, () => console.log("port " + PORT));
