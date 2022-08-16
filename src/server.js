import express from "express";
import "dotenv/config";
import cors from "cors";
import router from "./routes/index.js";
import mongoose from "mongoose";
import { connectDB } from "./config/mongoose.js";

const PORT = process.env.PORT || 8017;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("hello world");
});

connectDB();
mongoose.connection.once("open", () => {
    console.log("Connect tới DB successfully");

    router(app);

    app.listen(PORT, () => {
        console.log(`Em đã nắng nghe ${PORT}`);
    });
});


