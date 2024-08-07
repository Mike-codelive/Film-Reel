import axios from "axios";

export const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMmE0Zjg1MGY0M2NkMjdiZjhiYmQwNjg1ZWYyNWUwYyIsIm5iZiI6MTcyMjk5NTY4Mi4wMzU3MjcsInN1YiI6IjY2YjI4ZmZkNjkyNjYyMTQ0YTgwMzA5MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FlGfIw1JCP_j-o_SIQQGpGE5wGlJpo_bkAbuoLtQ6UM",
  },
});
