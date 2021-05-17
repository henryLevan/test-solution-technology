import { Document } from 'mongoose'
export interface users extends Document {
    id?: number;
    birthday: string;
    commission: number;
    country: string;
    nameUser: string;
    dateJobs: string;
    state: boolean;
    area: string;
    position: string;
    name: String;
}