import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

mongoose.plugin(slug);
const Schema = mongoose.Schema;

const movie = new Schema(
    {
        name: { type: String, maxLength: 100, required: true },
        slug: { type: String, maxLength: 100, slug: "name", unique: true },
        img_p: { type: String, maxLength: 100, default: "" },
        chapMp4s: [{ type: Schema.Types.ObjectId, ref: "chapmp4s", default: [] }],
        content: { type: String, maxLength: 100, default: "" },
        genre: { type: String, maxLength: 20, default: "" }
    },
    { timestamps: true }
);

movie.index({ name: "text" });

const movieModel = mongoose.model("movies", movie);

movieModel.createIndexes({ title: "text" });

export default movieModel;
