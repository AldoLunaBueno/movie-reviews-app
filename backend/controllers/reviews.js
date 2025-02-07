import Review from "../models/review.js";
import mongoose from "mongoose";
const ObjectId = mongoose.Types.ObjectId

// Example of review input by a user
// {
//     "review": "great movie",
//     "name": "john",
//     "user_id": "123",
//     "movie_id": "573a1390f29313caabcd6223"
// }

const ReviewsController = {
  postReview(req, res) {
    const { movie_id, name, user_id, review } = req.body;
    const newReview = new Review({
      movieId: new ObjectId(movie_id),
      user: { _id: new ObjectId(user_id), name },
      review,
    });
    newReview
      .save()
      .then(() => {
        res.json({ status: "success" });
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  },

  updateReview(req, res) {},

  deleteReview(req, res) {},
};

export default ReviewsController