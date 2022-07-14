import mongoose from "mongoose";

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, maxLength: 50, required: true },
    email: { type: String, maxLength: 100, required: true },
    img_user: { type: String, maxLength: 100 },
    password: {},
    moviesId: [{ type: Schema.Types.ObjectId, ref: "chapmp4s" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

user.index({ name: "text" });

const userModel = mongoose.model("user", user);

userModel.createIndexes({ title: "text" });

export default userModel;
