import express from "express";
import ChapMp4sController from "../controllers/ChapMp4sController.js";

const router = express.Router();

router.route("/")
    .get(ChapMp4sController.index);

export const chapMp4sRoutes = router;
