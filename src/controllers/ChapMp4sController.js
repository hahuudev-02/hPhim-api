import { chapMp4Model } from "../models/chapMp4s.model.js";

class chapMp4sController {
    index(req, res) {
        chapMp4Model.find({}).exec(function (err, newMovies) {
            if (!err) {
                res.json(newMovies);
            }
        });
    }

    async create(req, res) {
        try {
            const chapMp4s = req.body.map((chapMp4) => {
                return new chapMp4Model(chapMp4);
            });
            await chapMp4Model.insertMany(chapMp4s);
            res.status(200).json(chapMp4s);
        } catch (error) {
            res.status(304).json(error);
        }
    }

    async update(req, res) {
        try {
            const chapters = req.body;
            let linkArrs = [];
            for (let chapter of chapters) {
                const data = await chapMp4Model.findOne({ name: chapter.name, chapter: chapter.chapter });
                if (data) {
                    data.mp4Link = chapter.mp4Link;
                    data.save();
                } else {
                    const chapItem = new chapMp4Model(chapter);
                    chapItem.save();
                    linkArrs = [...linkArrs, chapItem._id];
                }
            }

            return res.status(200).json({ message: "Update successfully" });
        } catch (error) {}
    }
}

export default new chapMp4sController();
