import Axios from 'axios';

const defaultHttpClient = {
  httpClient: Axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
  }),
};

const getCharacters = (params: any) => {
  const {page, name} = params;
  return defaultHttpClient.httpClient
    .get(`/character/?page=${page}&name=${name || ''}`)
    .then(response => {
      return response.data;
    });
};

const getLocation = () => {
  return defaultHttpClient.httpClient.get('/location').then(response => {
    return response.data;
  });
};

const getEpisodes = () => {
  return defaultHttpClient.httpClient.get('/episode').then(response => {
    return response.data;
  });
};

const serviceClient = {
  getCharacters,
  getLocation,
  getEpisodes,
};

export default serviceClient;
