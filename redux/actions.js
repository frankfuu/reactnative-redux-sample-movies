import axios from "axios";

export const GET_MOVIES = 'GET_MOVIES';

const API_URL = 'https://api.themoviedb.org/3/movie/popular';
const API_KEY = 'aaadfd04e9046c992de9d4a892c0edb9';
const PARAMS = 'page=1';
const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;


export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${BASE_URL}`);
      if (res.data) {
        console.log(res.data)
        dispatch({
          type: GET_MOVIES,
          payload: res.data,
        });
      } else {
        console.log('Unable to fetch');
      }
    };
  } catch (error) {
    // Add custom logic to handle errors
    console.log(error);
  }
};