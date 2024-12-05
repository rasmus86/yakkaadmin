import {storeToRefs} from 'pinia';
import {ref} from "vue";
import {AuthStore, useAuthStore} from "@/stores/auth-store.ts";


export const useAuth = () => {

    const authStore: AuthStore = useAuthStore();
    const {loginForm, currentUser, user} = storeToRefs(authStore);


    const accessToken = ref('')
    const loading = ref<boolean>(false)

    const handleCurrentUser = async () => {
        try {
            loading.value = true;
            await authStore.getCurrentUser()
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };


    const isAdmin = (): boolean => {
        return user.value?.type === 'Admin';
    }

    const handleAuthLogin = async () => {
        try {
            loading.value = true;
            return authStore.login();
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };

    return {
        accessToken,
        loginForm,
        currentUser,
        handleAuthLogin,
        handleCurrentUser,
        isAdmin
    }
}
