import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chapMp4 = new Schema(
    {
        chapter: { type: String, maxLength: 10 },
        mp4Link: { type: String, maxLength: 50 },
        name: { type: String, maxLength: 50 },
    },
    { timestamps: true }
);

export const chapMp4Model = mongoose.model("chapmp4s", chapMp4);
