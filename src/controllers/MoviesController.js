import movieModel from "../models/movies.model.js";
import userModel from "../models/user.model.js";
import APIfeatures from "../util/features.js";

class MoviesController {
    index(req, res) {
        // const features = new APIfeatures(movieModel.find, req.query);

        const page = req.query.page * 1;
        const limit = req.query.limit * 1;
        const sort = req.query.sort || "-updatedAt";
        const skip = limit * (page - 1);
        const genre = req.query.genre == undefined ? null : { genre: req.query.genre };

        movieModel
            .find(genre)
            .populate("chapMp4s")
            .limit(limit)
            .skip(skip)
            .sort(sort)
            .exec(function (err, movies) {
                if (!err) {
                    res.json(movies);
                }
            });
    }
    searchMovieByName(req, res) {
        movieModel
            .find({ $text: { $search: req.query.q } })
            .populate("chapMp4s")
            .exec((err, movies) => {
                if (!err) {
                    res.json(movies);
                }
            });
    }

    getMovieBySlug(req, res) {
        movieModel
            .findOne({ slug: req.params.slug })
            .populate("chapMp4s")
            .exec(function (err, movie) {
                if (!err) {
                    res.json(movie);
                }
            });
    }

    async create(req, res) {
        const movie = {
            name: req.body.name,
            img_p: req.body.img_p,
            content: req.body.content,
            genre: req.body.genre,
            chapMp4s: req.body.chapMp4s,
        };
        const movies = new movieModel(movie);
        movies.save();

        const user = await userModel.findById(req.body.userId);

        if (!!user && !user.is_Admin) {
            user.moviesId.push(movies._id);
            user.save();
        }
        await userModel.updateMany({ is_Admin: true }, { $push: { moviesId: movies._id } });
        res.status(200).json({ message: "Movie created successfully" });
    }

    async update(req, res) {
        const movieUpate = req.body;
        const result = await movieModel.findByIdAndUpdate(
            { _id: movieUpate.id },
            {
                name: movieUpate.name,
                content: movieUpate.content,
                genre: movieUpate.genre,
                $push: { chapMp4s: movieUpate.arrayLinks },
            }
        );
        return res.status(200).json({ message: "successfully updated" });
    }

    async delete(req, res) {
        await movieModel.deleteOne({ _id: req.query.id });
        res.status(200).json({ message: "successfully deleted" });
    }
}

export default new MoviesController();
