import mongoose from "mongoose";
const Schema = mongoose.Schema;

const user = new Schema({
    name: { type: String, minLength: 4, maxLength: 50, default: "User" },
    slug: { type: String, minLength: 4, maxLength: 50, default: "@user" },
    email: { type: String, maxLength: 100, required: true },
    img_user: { type: String, maxLength: 100, default: "" },
    // password: { type: String, minlength: 6, required: true },
    admin: { type: Boolean, default: false },
    // editor: { type: Boolean, default: false },
    moviesId: [{ type: Schema.Types.ObjectId, ref: "movies" }],
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

user.index({ name: "text" });

const userModel = mongoose.model("user", user);

userModel.createIndexes({ title: "text" });

export default userModel;
