export interface IUserStore {
    users: IUser[];
}

export interface IUser {
    id: string;
    abn?: string;
    available: boolean;
    company_id?: string;
    email: string;
    first_name: string;
    last_name?: string;
    type: string;
    phone: string;
    gender: string;
    image: string;
    jobs_count: number;
    company_name?: string;
}
