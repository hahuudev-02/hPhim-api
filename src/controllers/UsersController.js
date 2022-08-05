import userModel from "../models/user.model.js";

class UsersController {
    index(req, res) {
        userModel
            .find({})
            .populate({
                path: "moviesId",
                populate: {path: "chapMp4s"}
            })
            .exec(function (err, users) {
                if (!err) {
                    res.json(users);
                }
            });
    }

    async create(req, res) {
        const newUser = await new userModel(req.body);
        await newUser.save();
        res.status(200).json(newUser);
    }
}

export default new UsersController();
