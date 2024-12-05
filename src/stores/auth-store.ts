import {IAuthStore} from "@/interfaces/auth/auth-store.interface.ts";
import {defineStore} from 'pinia';
import {auth, db} from "@/firebase.ts";
import {signInWithEmailAndPassword} from 'firebase/auth';
import {doc, getDoc,} from "firebase/firestore";
import router from "@/router";
import {IUser} from "@/interfaces/user/user-store.interface.ts";

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
    user: undefined
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
                try {
                    const data = await signInWithEmailAndPassword(auth, this.loginForm.email, this.loginForm.password);
                    console.log('User signed in:', data.user);

                    const userDocRef = doc(db, 'Users', data.user.uid);
                    const userDocSnap = await getDoc(userDocRef);

                    if (userDocSnap.exists()) {
                        const user = {id: userDocSnap.id, ...userDocSnap.data()};
                        this.user = user as IUser;
                        await router.push({name: 'ChatView'});
                    } else {
                        console.log("No such user!");
                        return null;
                    }

                } catch (error) {
                    console.error("Error signing in:", error);
                }
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
