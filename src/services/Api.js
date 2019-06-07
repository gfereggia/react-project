import axios from 'axios';

const API_USERS_URL = process.env.REACT_APP_API_USERS_URL;
const API_PRODUCTS_URL = process.env.REACT_APP_API_PRODUCTS_URL;

const config = {
  headers: {
    'Content-Type': 'application/json',
  },
  useCredentails: true,
};

class Api {

  static getUsers() {
    const request = axios.get(API_USERS_URL, config);
    return request.then(({ data }) => {
      return data;
    });
  }

  static setUser(user) {
    const request = axios.post(API_USERS_URL, { user }, config);
    return request.then(res => {
      return true;
    })
    .catch(err => {
      return err;
    });
  }

  static getProducts() {
    const request = axios.get(API_PRODUCTS_URL, config);
    return request.then(({ data }) => {
      return data;
    });
  }
}

export default Api;
