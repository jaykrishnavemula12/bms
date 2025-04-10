import { axiosInstance } from "./index";

export const getAllMovies = async () => {
  try {
    const response = await axiosInstance.get("api/movies/get-all-movies");
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//Add a Movie
export const addMovie = async (values) => {
  try {
    const response = await axiosInstance.post("api/movies/add-movie", values);
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//Update a movie
export const updateMovie = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "api/movies/update-movie",
      payload
    );
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

//Delete a movie
export const deleteMovie = async (payload) => {
  try {
    const response = await axiosInstance.put(
      "/api/movies/delete-movie",
      payload
    );
    return response.data;
  } catch (err) {
    return err.message;
  }
};

// Get a single movie by its id
export const getMovieById = async (id) => {
  try {
    const response = await axiosInstance.get(`/api/movies/movie/${id}`);
    return response.data;
  } catch (err) {
    return err.response;
  }
};
