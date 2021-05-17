"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const mongoose_1 = require("mongoose");
exports.userSchema = new mongoose_1.Schema({
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
//# sourceMappingURL=users.schema.js.map