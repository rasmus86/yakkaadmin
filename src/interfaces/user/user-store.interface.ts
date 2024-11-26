export interface IUserStore {
    users: IUser[];
}

export interface IUser {
    id: string;
    email: string;
    first_name: string;
    last_name?: string;
    type: string;
    phone: string;
    gender: string;
    image: string
}

