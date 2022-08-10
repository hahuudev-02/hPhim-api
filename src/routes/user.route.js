import express from "express";
import UsersController from "../controllers/UsersController.js";
import { decodeUser } from "../middleware/decodeUser.js";

const router = express.Router();

// Get Movie theo slug
router.route("/email").get(UsersController.getUsersByEmail);

router.route("/").get(decodeUser, UsersController.index).post(UsersController.create);

export const usersRoutes = router;
