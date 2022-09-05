import express from "express";
import MoviesController from "../controllers/MoviesController.js";

const router = express.Router();

    // Search
router.route("/search")
    .get(MoviesController.searchMovieByName)

    // Get Movie theo slug
router.route("/:slug")
    .get(MoviesController.getMovieBySlug)
    
    // Get FullMovies
    router.route("/")
    .get(MoviesController.index)
    .post(MoviesController.create)
    .put(MoviesController.update)
    .delete(MoviesController.delete)


export const moviesRoutes = router;
