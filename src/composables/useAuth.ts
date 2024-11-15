import {ref} from "vue";

export const useAuth = () => {
    const accessToken = ref('')
    return {
        accessToken
    }
}
