import axios from 'axios';
import { getCookie } from '../helpers/cookies';

export const fetchUsers = async () => {
    let cookie = getCookie("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
        },
    }

    const response = await axios.get('/api/users', config);
    return response.data.users;
}

export const removeUser = async (userId) => {

    let cookie = getCookie("token");

    const config = {
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + cookie,
        },
        withCredentials: true
    }

    const response = await axios.delete('/api/users/' + userId, config);

    return response.data.successMessage;
}
