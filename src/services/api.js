import axios from 'axios';
const api = axios.create({
    baseURL: 'https://mydropboxclone-backend.herokuapp.com'
});

export default api;