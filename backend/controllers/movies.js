import Movie from "../models/movies.js";

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
};

export default MoviesController;
