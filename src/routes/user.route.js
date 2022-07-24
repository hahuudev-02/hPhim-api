import express from "express";
import UsersController from "../controllers/UsersController.js"

const router = express.Router();

// router.route('/search')
//     .get('/', )
router.route('/')
    .get( UsersController.index)

export const usersRoutes = router;    