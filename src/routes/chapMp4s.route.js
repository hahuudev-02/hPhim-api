import express from "express";
import ChapMp4sController from "../controllers/ChapMp4sController.js";

const router = express.Router();

router.route("/:slug").put(ChapMp4sController.update);
router.route("/").get(ChapMp4sController.index).post(ChapMp4sController.create);

export const chapMp4sRoutes = router;
