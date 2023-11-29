import express from "express";

const PORT = 9898;
const app = express();

// Configuración de rutas estáticas
app.use("/assets", express.static("assets"));
app.use("/pages", express.static("pages"));
app.use("/img", express.static("img"));

app.listen(PORT, () => console.log("port " + PORT));
