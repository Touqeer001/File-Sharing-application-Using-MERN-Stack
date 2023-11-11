import express from "express";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

const PORT = 8000;

app.use(cors());
app.use("/", router);

app.listen(PORT, () => console.log(`Server is Running on Port ${PORT}`));
