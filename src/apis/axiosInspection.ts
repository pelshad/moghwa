import { AxiosResult } from 'enums/axiosResult';
import { handleConnectionError } from './handleError';

export const axiosInspection = (res: any): boolean => {
    switch (res.result) {
        case AxiosResult.SUCCESS:
            return true;
        case AxiosResult.FAIL:
            alert(res.data.msg);
            return false;
        case AxiosResult.ERROR:
            handleConnectionError(res);
            return false;
        default:
            return false;
    }
};
