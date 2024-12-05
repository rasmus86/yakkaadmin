import {storeToRefs} from 'pinia';
import {UserStore, useUserStore} from "@/stores/user-store.ts";
import {ref} from "vue";


export const useUser = () => {

    const userStore: UserStore = useUserStore();
    const {users,} = storeToRefs(userStore);


    const loading = ref<boolean>(false)

    const handleGetUsers = async (userType: string) => {
        try {
            loading.value = true;
            return userStore.getUsers(userType);
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };

    return {
        users,
        handleGetUsers
    }
}
