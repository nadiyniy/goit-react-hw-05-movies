import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '13f507f7afd2e84a62cca8b12f55dea4';

export const fetchMovies = async params => {
  const { data } = await axios.get('trending/all/day', {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieById = async id => {
  const { data } = await axios.get(`movie/${id}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieCast = async id => {
  const { data } = await axios.get(`movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return data;
};

export const fetchMovieByQuery = async (query, params) => {
  const { data } = await axios.get(`search/movie`, {
    params: {
      query,
      ...params,
      api_key: API_KEY,
    },
  });
  return data;
};
