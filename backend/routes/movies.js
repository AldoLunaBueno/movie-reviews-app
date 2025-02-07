import express from "express"
import MoviesController from "../controllers/movies.js"

const router = express.Router()

router.get("/", MoviesController.getMovies)
router.get("/id/:id", MoviesController.getMovieById)
router.get("/ratings", MoviesController.getRatings)

export default router