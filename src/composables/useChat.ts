import {storeToRefs} from 'pinia';
import {ChatStore, useChatStore} from "@/stores/chat-store.ts";
import {ref} from "vue";
import {IMessage} from "@/interfaces/chat/chat-store.interface.ts";


export const useChat = () => {

    const chatStore: ChatStore = useChatStore();
    const {groupMessages, groupMessage, userSelected} = storeToRefs(chatStore);


    const loading = ref<boolean>(false)

    const handleGetMessage = async (id: string) => {
        try {
            loading.value = true;
            return chatStore.getMessage(id);
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };
    const handleSendMessage = async (id: string, message: IMessage, buildName?: string, labourName?: string) => {
        try {
            loading.value = true;
            return chatStore.sendMessage(id, message, buildName, labourName);
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };

    return {
        groupMessages,
        groupMessage,
        userSelected,
        handleGetMessage,
        handleSendMessage,
        clearGroupMessage: chatStore.clearGroupMessage
    }
}
