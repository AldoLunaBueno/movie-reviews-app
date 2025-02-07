import Movie from "../models/movies.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId;

const MoviesController = {
  // Get all movies (with pagination & filters)
  async getMovies(req, res) {
    const { title, rated, page = 0, moviesPerPage = 20 } = req.query;
    let query = {};

    if (title) query.title = { $regex: title, $options: "i" }; // Case-insensitive search
    if (rated) query.rated = rated;

    try {
      const movies = await Movie.find(query)
        .skip(parseInt(page) * parseInt(moviesPerPage))
        .limit(parseInt(moviesPerPage));
      const totalMovies = await Movie.countDocuments(query);

      res.json({ movies, totalMovies });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch movies" });
    }
  },

  getMovieById(req, res) {
    const id = req.params.id || {};
    Movie.aggregate([
      {
        $match: {
          _id: new ObjectId(id),
        },
      },
      {
        $lookup: {
          from: "reviews",
          localField: "_id",
          foreignField: "movieId",
          as: "reviews",
        },
      },
    ])
      .then((movie) => {
        if (!movie) {
          res.status(404).json({ error: "not found" });
          return;
        }
        res.json(movie);
      })
      .catch((e) => {
        res.status(500).json({ error: e });
      });
  },

  getRatings(req, res) {

  }
};

export default MoviesController;
