import {computed} from 'vue';
import dayjs from '@/plugins/dayjs';
import {Timestamp} from 'firebase/firestore';

export function useTimeAgo(nanoTimestamp: number | Timestamp) {
    const date = computed(() => {
        if (nanoTimestamp instanceof Timestamp) {
            return nanoTimestamp.toDate();
        } else {
            return new Date(nanoTimestamp / 1_000_000);
        }
    });

    const timeAgo = computed(() => {
        return dayjs(date.value).fromNow();
    });

    return {
        timeAgo,
    };
}
