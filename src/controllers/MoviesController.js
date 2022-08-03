import movieModel from "../models/movies.model.js";
import APIfeatures from "../util/features.js";

class MoviesController {
    index(req, res) {
        // const features = new APIfeatures(movieModel.find, req.query);

        const page = req.query.page * 1;
        const limit = req.query.limit * 1;
        const sort = req.query.sort || "-updatedAt";
        const skip = limit * (page - 1);
        const genre = (req.query.genre == undefined ? null : { genre: req.query.genre });

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

    create(req, res) {
        const movies = new movieModel(req.body);
        movies.save();
        res.status(200).json(movies);
    }
}

export default new MoviesController();
