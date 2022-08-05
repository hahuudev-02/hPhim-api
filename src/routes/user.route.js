import express from "express";
import UsersController from "../controllers/UsersController.js";

const router = express.Router();

router.route("/").get(UsersController.index).post(UsersController.create);

export const usersRoutes = router;
