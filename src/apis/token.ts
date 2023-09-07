import axios from './axios';
import { handleApiError } from './handleError';
import { axiosInspection } from './axiosInspection';

const tokenCheck = async (): Promise<void> => {
    try {
        const userId = sessionStorage.getItem('userId');
        const token = sessionStorage.getItem('userToken');

        if (token && userId) {
            const res = await axios.post('/user/tokenCheck', { userId: userId, token: token });
            if (!axiosInspection(res.data)) {
                sessionStorage.removeItem('userId');
                sessionStorage.removeItem('userToken');
            }
        } else {
            sessionStorage.removeItem('userId');
            sessionStorage.removeItem('userToken');
        }
    } catch (error) {
        handleApiError(error);
    }
};

export { tokenCheck };
