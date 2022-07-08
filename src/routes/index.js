import { moviesRoutes } from './movies.route.js'
import { chapMp4sRoutes } from './chapMp4s.route.js'

export default function router(app) {
    app.use('/api/movies', moviesRoutes)
    app.use('/api/chapmp4s', chapMp4sRoutes)
}