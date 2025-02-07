import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {type: String, required: true},
    rated: {type: String},
    genre: {type: [String]}, // array of genres
    releasedDate: {type: Date}
})

const Movie = mongoose.model("Movie", movieSchema)

export default Movie