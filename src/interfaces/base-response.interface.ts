export interface BaseResponse<T> {
    success: boolean;
    data?: T;
    error?: string;
    status?: number | null;
    errors?: undefined[];
    msg?: string;
}
