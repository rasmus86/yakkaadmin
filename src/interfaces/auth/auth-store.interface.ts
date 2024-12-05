import {IUser} from "@/interfaces/user/user-store.interface.ts";

export interface IAuthStore {
    loginForm: {
        email: string | undefined;
        password: string | undefined;
    };
    currentUser: ICurrentUserStore;
    user: IUser | undefined;
}

export interface ICurrentUserStore {
    uid: string;
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
}
