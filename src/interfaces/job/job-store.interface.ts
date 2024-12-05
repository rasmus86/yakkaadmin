import {Timestamp} from "firebase/firestore";
import {IYakkaJob} from "@/interfaces/job/yakka-job.interface.ts";

export interface IJobStore {
    jobs: IJob[];
    yakkaJobs: IYakkaJob[];
    searchJobForm: ISearchJob;
}

export interface IJob {
    address: string;
    city: string;
    price: number;
    skill_name: string;
    createdAt: Timestamp;
    begin_date_time: Timestamp;
    end_date_time: Timestamp;
}


export interface ISearchJob {
    job: string;
    city: string;
}
