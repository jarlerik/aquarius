
import axios from 'axios';

export function getPosts() {
		return axios.get('/api/posts');
}