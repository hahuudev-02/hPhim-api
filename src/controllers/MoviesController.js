import movieModel from "../models/movies.model.js";
import APIfeatures from "../util/features.js";

class MoviesController {
    index(req, res) {
        // const features = new APIfeatures(movieModel.find, req.query);

        const page = req.query.page * 1 || 1;
        const limit = req.query.limit * 1 || 5;

        movieModel
            .find({})
            .populate("chapMp4s")
            .limit(limit).skip(page)
            .exec(function (err, movies) {
                if (!err) {
                    console.log(movies);
                    res.json(movies);  
                }
            });
    }
    searchMovieByName(req, res) {
        console.log(req.query.q);
        movieModel
            .find({ $text: { $search: req.query.q } })
            .populate("chapMp4s")
            .exec((err, movies) => {
                if (!err) {
                    res.json(movies);
                    console.log(movies.name);
                }
            });
    }

    getMovieBySlug(req, res) {
        movieModel.findOne({ slug: req.params.slug }).exec(function (err, movie) {
            if (!err) {
                res.json(movie);
            }
        });
    }

    create(req, res) {
        res.send("hiii");
    }
}

export default new MoviesController();
