import axios from "axios";

export const GET_MOVIES = 'GET_MOVIES';

export const ADD_FAVORITE_ITEM = 'ADD_FAVORITE_ITEM';
export const REMOVE_FAVORITE_ITEM = 'REMOVE_FAVORITE_ITEM';

// const API_URL = 'https://api.themoviedb.org/3/movie/popular';
// const API_KEY = 'aaadfd04e9046c992de9d4a892c0edb9';
// const PARAMS = 'page=1';
// const BASE_URL = `${API_URL}?api_key=${API_KEY}&${PARAMS}`;
const STATIC_URL = `https://gist.githubusercontent.com/frankfuu/25feb91e396f985f404742d6616eb10f/raw/0f401cec930b2f936186671cdad5ff5f32710ea6/popularMovies.json`;

export const getMovies = () => {
  try {
    return async dispatch => {
      const res = await axios.get(`${STATIC_URL}`);
      if (res.data) {
        console.log(res.data)
        dispatch({
          type: GET_MOVIES,
          payload: res.data.results,
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

export const addFavorite = movie => dispatch => {
  dispatch({
    type: ADD_FAVORITE_ITEM,
    payload: movie,
  });
};
export const removeFavorite = movie => dispatch => {
  dispatch({
    type: REMOVE_FAVORITE_ITEM,
    payload: movie,
  });
};