import express from "express";
import "dotenv/config";
import mongoose from "mongoose";
import cors from "cors";

import router from "./routes/index.js";
import { connectDB } from "./config/mongoose.js";

const app = express();
const PORT = process.env.PORT || 8017;

const whitelist = [
    "http://localhost:3000",
    "http://localhost:8017",
    "https://hphim.vercel.app",
    "https://www.hahuudev.online",
];

const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error(`${origin} Not allowed by CORS`));
        }
    },
};

app.use(cors());

app.use(express.urlencoded({ extended: true }));
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

