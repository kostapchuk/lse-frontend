import axios from 'axios';

export const create = (user: any) => axios.post('/user', user);
