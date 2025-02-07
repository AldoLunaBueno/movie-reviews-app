import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId

const reviewSchema = mongoose.Schema({
    movieId: {type: ObjectId, ref: "Movie", required: true},
    user: {
        _id: {type: ObjectId, ref: "User", required: true},
        name: {type: String, required: true}
    },
    review: {type: String, required: true},
    date: {
        type: Date, 
        default: Date.now,
        immutable: true, // Prevents users from modifying the date
    }
})

const Review = mongoose.model("Review", reviewSchema)

export default Review