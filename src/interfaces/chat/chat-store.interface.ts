import { Timestamp } from 'firebase/firestore';
import {IUser} from "@/interfaces/user/user-store.interface.ts";


export interface IChatStore {
    groupMessages: IGroupMessage[];
    groupMessage: IGroupMessage;
    sendMessageSuccess: boolean;
    userSelected: IUser | undefined;
    unsubscribeGroup?: () => void; // Optional because they may not be set initially
    unsubscribeMessages?: () => void;
}

export interface IGroupMessage {
    sender_email: string;
    sender_name: string;
    date: Timestamp;
    receiver_email: string;
    receiver_name: string;
    message: string;
    message_id: string
    seen: boolean;
    send_by: string;
    messages: IMessage[];
}

export interface IMessage {
    id?: string;
    sender: string;
    datetime: Timestamp;
    receiver: string;
    message: string;
    profile: string
    seen: boolean;
    type: string
}

