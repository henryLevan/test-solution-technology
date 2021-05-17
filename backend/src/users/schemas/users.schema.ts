import { Schema } from 'mongoose';

export const userSchema = new Schema({
    name: String,
    birthday: String,
    commission: Number,
    country: String,
    nameUser: String,
    dateJobs: String,
    state: Boolean,
    area: String,
    position: String
});