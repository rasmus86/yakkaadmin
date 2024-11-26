import {defineStore} from 'pinia';
import {db} from '@/firebase';
import {collection, query, where, getDocs,} from 'firebase/firestore';
import {IUser, IUserStore} from "@/interfaces/user/user-store.interface.ts";

const INITIAL_STATE: IUserStore = {
    users: [],
};

export const useUserStore = defineStore({
    id: 'user',
    state: (): IUserStore => ({
        ...INITIAL_STATE,
    }),
    getters: {},
    actions: {
        resetStore() {
        },
        async getUsers(userType: string) {
            const usersCollection = collection(db, 'Users');
            const q = query(usersCollection, where('type', '==', userType));
            const querySnapshot = await getDocs(q);

            this.users = querySnapshot.docs.map((doc) => ({
                ...(doc.data() as IUser),
            }));

        },
        clearLoginForm() {
            this.users = [];
        },
    },
    persist: {},
});

export type UserStore = ReturnType<typeof useUserStore>;
