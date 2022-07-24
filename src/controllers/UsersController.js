import userModel from "../models/user.model.js";

class UsersController {
    index(req, res) {
        userModel.find({}).exec(function (err, users) {
            if (!err) {
                res.json(users);
            }
        });
    }

    create(req, res) {
        const newUser = new userModel(req.body);
        newUser.save()

    }
}

export default new UsersController();
