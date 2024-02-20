import axios from "axios";

const movieDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: "2c610313751b78b2f54daf3b44998e62",
    language: 'es-ES',
  }
});

export default movieDB;
