import {defineStore} from 'pinia';
import {db} from '@/firebase';
import {collection, query, where, getDocs,} from 'firebase/firestore';
import {IJob, IJobStore} from "@/interfaces/job/job-store.interface.ts";
import {getData,} from "@/services/axios-services.ts";
import {BASE_URL} from "@/utils/api-constants.ts";
import {IYakkaJob} from "@/interfaces/job/yakka-job.interface.ts";

const INITIAL_STATE: IJobStore = {
    jobs: [],
    yakkaJobs: [],
    searchJobForm: {
        job: '',
        city: '',
    }
};

export const useJobStore = defineStore({
    id: 'job',
    state: (): IJobStore => ({
        ...INITIAL_STATE,
    }),
    getters: {},
    actions: {
        resetStore() {
        },
        async getJobs(city: string) {
            console.log(city)
            const jobsCollection = collection(db, 'Jobs');
            const q = query(jobsCollection, where('is_enabled', '==', true));
            const querySnapshot = await getDocs(q);

            this.jobs = querySnapshot.docs.map((doc) => ({
                ...(doc.data() as IJob),
            }));

        },
        async getYakkaJobs() {
            try {
                const response = await getData<IYakkaJob[]>(
                    `${BASE_URL.JOBS}process?search_term=${this.searchJobForm.job}&location=${this.searchJobForm.city}`,
                );
                const {data, error, success} = response;
                if (success && data) {
                    this.yakkaJobs = data;
                    return response;
                } else {
                    Error(error);
                }
            } catch (error) {
                const errorMsg = error?.toString() ?? 'Unknown error!';
                throw new Error(errorMsg);
            }
        },
        clearJobs() {
            this.jobs = [];
            this.yakkaJobs = [];
            this.searchJobForm = {
                job: '',
                city: '',
            }
        },
    },
    persist: {},
});

export type JobStore = ReturnType<typeof useJobStore>;
