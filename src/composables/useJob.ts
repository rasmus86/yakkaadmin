import {storeToRefs} from 'pinia';
import {ref} from "vue";
import {JobStore, useJobStore} from "@/stores/job-store.ts";


export const useJob = () => {

    const jobStore: JobStore = useJobStore();
    const {jobs, yakkaJobs, searchJobForm} = storeToRefs(jobStore);


    const loading = ref<boolean>(false)

    const handleGetJobs = async (city: string) => {
        try {
            loading.value = true;
            return jobStore.getJobs(city);
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };
    const handleGetYakkaJobs = async () => {
        try {
            loading.value = true;
            return await jobStore.getYakkaJobs();
        } catch (error: unknown) {
        } finally {
            loading.value = false;
        }
    };

    return {
        jobs,
        yakkaJobs,
        loading,
        searchJobForm,
        handleGetJobs,
        handleGetYakkaJobs
    }
}
