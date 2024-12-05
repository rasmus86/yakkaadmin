export type Site = 'glassdoor' | 'linkedin' | string; // Extend with known sites as needed

export type Interval = 'hourly' | 'yearly' | 'monthly' | string; // Extend as necessary
export type JobType = 'Full-time' | 'Part-time' | 'Contract' | string; // Extend as necessary

export interface IYakkaJob {
    company: string;
    description: string;
    interval: Interval;
    job_type: JobType;
    job_url: string;
    location: string;
    max_amount: number | null;
    min_amount: number | null;
    site: Site;
    state: string;
    title: string;
}
