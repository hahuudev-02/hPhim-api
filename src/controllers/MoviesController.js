import { movieModel } from "../models/movies.model.js";

class MoviesController {
    index(req, res) {
        movieModel.find({})
        .populate('chapMp4s')
        .exec(function (err, movies) {
            if (!err) {
                res.json(movies);
            }
        });
    }

    getMovie(req, res) {
        console.log(req.params.slug);
        movieModel.findOne({slug: req.params.slug})
        .exec(function (err, movies) {
            if (!err) {
                res.json(movies);
            }
        });
    }

    create(req, res) {
        
    }
}

export default new MoviesController();
