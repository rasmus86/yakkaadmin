export interface IAuthStore {
    loginForm: {
        email: string | undefined;
        password: string | undefined;
    };
    currentUser: ICurrentUserStore;
}

export interface ICurrentUserStore {
    uid: string;
    displayName: string | null;
    email: string | null;
    phoneNumber: string | null;
}
