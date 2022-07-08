import { chapMp4Model } from '../models/chapMp4s.model.js'

class chapMp4sController {

    index(req, res) {
        chapMp4Model.find({})
        .populate('movieId')
        .exec(function (err, newMovies) {
            if (!err) {
                res.json(newMovies);
            }
        });
 
    }

}

export default new chapMp4sController;