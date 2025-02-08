import axios from 'axios';

export default class MovieService {
  async getMovies(query = '', by = 'title', page = 0) {
    const res = await axios.get(`http://localhost:3000/api/v1/movies?${by}=${query}&page=${page}`);
    return res.data;
  }
}
