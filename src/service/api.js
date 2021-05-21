import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://api.chucknorris.io/jokes/'
});

export const postForm = axios.create({
  baseURL: 'https://webhook.site/ee5c4bf8-469b-4445-8091-97bf114f3fa0'
});