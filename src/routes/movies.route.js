import express from "express";
import MoviesController from "../controllers/MoviesController.js";

const router = express.Router();

router.route("/:slug")
    .get(MoviesController.getMovie)
router.route("/")
    .get(MoviesController.index)
    .post(MoviesController.create)
export const moviesRoutes = router;
