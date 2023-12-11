import axios from 'axios';
import { API_URL } from '../constants/api';

export default class PostService {
  static async getStatusDocuments(data) {

    const response = await axios.post(API_URL, data);
    return response.data;
  };
}