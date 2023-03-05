import mongoose from "mongoose";
const Schema = mongoose.Schema;

const chapMp4 = new Schema(
    {
        chapter: { type: String, maxLength: 100 },
        mp4Link: { type: String, maxLength: 500 },
        name: { type: String, maxLength: 500 },
    },
    { timestamps: true }
);

export const chapMp4Model = mongoose.model("chapmp4s", chapMp4);
