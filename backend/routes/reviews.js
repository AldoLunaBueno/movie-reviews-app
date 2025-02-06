import express from "express"
import ReviewsController from "../controllers/reviews.js"

const router = express.Router()

router.route("/review")
.post(ReviewsController.postReview)
.put(ReviewsController.updateReview)
.delete(ReviewsController.deleteReview);

export default router