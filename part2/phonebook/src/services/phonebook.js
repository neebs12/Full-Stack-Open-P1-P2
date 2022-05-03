import axios from 'axios';

const baseUrl = '/api/persons' // proxy in package.json

const getAll = () => {
  return axios
    .get(baseUrl)
    .then(result => result.data);
}

const addNumber = (numberObject) => {
  return axios
    .post(baseUrl, numberObject)
    .then(result => result.data);
}

const deleteNumber = (id) => {
  return axios
    .delete(`${baseUrl}/${id}`);
}

const updateNumber = (numberObject) => {
  let id = numberObject.id;
  // return Promise.resolve(numberObject);
  return axios
    .put(`${baseUrl}/${id}`, numberObject)
    .then(result => result.data);
}

export default {
  getAll, addNumber, deleteNumber, updateNumber,
};