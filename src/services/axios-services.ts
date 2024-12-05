import {api} from '@/plugins/axios';
import {BaseResponse} from "@/interfaces/base-response.interface.ts";

export const getErrorCatch = (error: any) => {
    const ret = {
        error: 'Error desconocido.',
        status: null,
        errors: [],
    };

    if (error?.response) {
        console.error('error', error);
        const {data, status} = error.response;
        if (status) ret.status = status;

        if (status === 401) ret.error = data.err || 'Unauthorized!';
        else if (data) {
            ret.error = data.err || error.toString() || 'Unknown error!';
            if (data.errors) {
                ret.errors = data.errors;
                ret.error = data.errors[0].message || error.toString() || 'Unknown error!';
            }
        } else ret.error = data.err || error?.toString() || 'Unknown error!';
    } else {
        ret.error = error?.toString() || 'Unknown error!';
    }

    return ret;
};

/**
 * @function postData
 * @param endpoint
 * @param data
 * @return {Object} response Response data or error.
 */
export const postData = async <T>(endpoint: string, data = {}): Promise<BaseResponse<T>> => {
    const controller = new AbortController();
    const {signal} = controller;
    try {
        const res = await api.post(endpoint, data, {signal});
        return {success: true, data: res.data.data ?? res.data.msg, msg: res.data.msg};
    } catch (e) {
        controller.abort();
        return {success: false, ...getErrorCatch(e)};
    }
};

/**
 * @function getData
 * @param {String} endpoint Endpoint to request.
 * @param params
 * @return {Object} response Response data or error.
 */
export const getData = async <T>(endpoint: string, params = {}): Promise<BaseResponse<T>> => {
    const controller = new AbortController();
    const { signal } = controller;
    try {
        const res = await api.get(endpoint, { params, signal });
        return { success: true, data: res.data };
    } catch (e) {
        controller.abort();
        return { success: false, ...getErrorCatch(e) };
    }
};
