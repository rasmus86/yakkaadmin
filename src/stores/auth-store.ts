import {IAuthStore} from "@/interfaces/auth/auth-store.interface.ts";
import {defineStore} from 'pinia';
import {auth} from "@/firebase.ts";
import {signInWithEmailAndPassword} from 'firebase/auth';
import router from "@/router";

const INITIAL_STATE: IAuthStore = {
    loginForm: {
        email: undefined,
        password: undefined,
    },
    currentUser: {
        uid: '',
        displayName: null,
        email: null,
        phoneNumber: null,
    },
};

export const useAuthStore = defineStore({
    id: 'auth',
    state: (): IAuthStore => ({
        ...INITIAL_STATE,
    }),
    getters: {},
    actions: {
        resetStore() {
        },
        async login() {
            if (this.loginForm.email && this.loginForm.password) {
                await signInWithEmailAndPassword(auth, this.loginForm.email, this.loginForm.password).then(() => {
                    router.push({name: 'ChatView'});
                })
            }
        },
        async getCurrentUser() {
            const currentUser = auth.currentUser;

            if (currentUser) {
                this.currentUser = {...currentUser}
            } else {
                console.log('No user is signed in.');
            }
        },
        clearLoginForm() {
            this.loginForm = {
                email: undefined,
                password: undefined,
            };
            this.currentUser = {
                uid: '',
                displayName: null,
                email: null,
                phoneNumber: null,
            };
        },
    },
    persist: {},
});

export type AuthStore = ReturnType<typeof useAuthStore>;
