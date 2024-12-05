import {defineStore} from 'pinia';
import {db} from '@/firebase';
import {
    collection,
    doc,
    DocumentData,
    onSnapshot,
    QuerySnapshot,
    runTransaction,
    Timestamp,
    orderBy,
    query,
} from 'firebase/firestore';
import {IChatStore, IGroupMessage, IMessage} from "@/interfaces/chat/chat-store.interface.ts";

const INITIAL_STATE: IChatStore = {
    groupMessages: [],
    groupMessage: {
        sender_email: '',
        sender_name: '',
        date: Timestamp.now(),
        receiver_email: '',
        receiver_name: '',
        message: '',
        message_id: '',
        seen: false,
        send_by: '',
        messages: [],
    },
    sendMessageSuccess: false,
    userSelected: undefined,

};

export const useChatStore = defineStore({
    id: 'chat',
    state: (): IChatStore => ({
        ...INITIAL_STATE,
    }),
    getters: {},
    actions: {
        resetStore() {
            this.$reset();
        },
        async getMessage(id: string) {

            const groupDocRef = doc(db, 'GroupChat', id);
            const messagesCollectionRef = collection(groupDocRef, 'Messages');


            const messagesQuery = query(messagesCollectionRef, orderBy('datetime', 'asc')); // Change 'asc' to 'desc' if needed

            // Listen to the GroupMessages document
            this.unsubscribeGroup  = onSnapshot(
                groupDocRef,
                (docSnap) => {
                    if (docSnap.exists()) {
                        const groupData = docSnap.data() as IGroupMessage;
                        this.groupMessage = {...groupData, messages: this.groupMessage.messages};
                    } else {
                        console.log('No such document!');
                        this.groupMessage = {
                            sender_email: '',
                            sender_name: '',
                            date: Timestamp.now(),
                            receiver_email: '',
                            receiver_name: '',
                            message: '',
                            message_id: '',
                            seen: false,
                            send_by: '',
                            messages: [],
                        };
                    }
                },
                (error) => {
                    console.error('Error fetching GroupMessage:', error);
                }
            );

            this.unsubscribeMessages = onSnapshot(
                messagesQuery,
                (snapshot: QuerySnapshot<DocumentData>) => {
                    if (!snapshot.empty) {
                        this.groupMessage.messages = snapshot.docs.map((doc) => ({
                            ...doc.data() as IMessage,
                            message_id: doc.id, // Assigning document ID
                        })) as IMessage[];
                    } else {
                        console.log('No messages found in this group.');
                        this.groupMessage.messages = [];
                    }
                },
                (error) => {
                    console.error('Error fetching Messages:', error);
                }
            );
        },
        async sendMessage(groupId: string, newMessage: Omit<IMessage, 'datetime' | 'message_id'>, buildName?: string, labourName?: string) {
            try {
                const groupDocRef = doc(db, 'GroupChat', groupId);
                const messagesCollectionRef = collection(groupDocRef, 'Messages');

                await runTransaction(db, async (transaction) => {
                    const groupDoc = await transaction.get(groupDocRef);
                    if (!groupDoc.exists()) {
                        transaction.set(groupDocRef, {
                            sender_email: newMessage.sender,
                            sender_name: buildName ?? '',
                            receiver_email: newMessage.receiver,
                            receiver_name: labourName ?? '',
                            date: Timestamp.now(),
                            lastUpdated: Timestamp.now(),
                            message: newMessage.message,
                            message_id: '',
                            seen: false,
                            send_by: newMessage.sender || '',
                        });
                    }

                    const newMessageRef = doc(messagesCollectionRef);

                    const messageWithTimestamp: IMessage = {
                        ...newMessage,
                        datetime: Timestamp.now(),
                    };

                    transaction.set(newMessageRef, messageWithTimestamp);

                    transaction.update(groupDocRef, {
                        lastUpdated: Timestamp.now(),
                        date: Timestamp.now(),
                        message: newMessage.message,
                        message_id: newMessageRef.id,
                    });
                });

                this.sendMessageSuccess = true;
            } catch (err: any) {
                console.error('Error sending message:', err);
            } finally {
                this.sendMessageSuccess = false;
            }
        },
        clearGroupMessage() {
            this.groupMessage = {
                sender_email: '',
                sender_name: '',
                date: Timestamp.now(),
                receiver_email: '',
                receiver_name: '',
                message: '',
                message_id: '',
                seen: false,
                send_by: '',
                messages: [],
            };
        },
    },
    persist: {},
});

export type ChatStore = ReturnType<typeof useChatStore>;
