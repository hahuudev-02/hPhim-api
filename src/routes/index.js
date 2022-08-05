import { moviesRoutes } from "./movies.route.js";
import { chapMp4sRoutes } from "./chapMp4s.route.js";
import { usersRoutes } from "./user.route.js";

export default function router(app) {
    app.use("/api/movies", moviesRoutes);
    app.use("/api/chapmp4s", chapMp4sRoutes);
    app.use("/api/users", usersRoutes);
}
