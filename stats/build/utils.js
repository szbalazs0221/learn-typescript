"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
const dateStringToDate = (dateString) => {
    const dateParts = dateString.split('/').map((value) => {
        return parseInt(value);
    });
    const year = dateParts[2];
    const month = dateParts[1] - 1;
    const day = dateParts[0];
    return new Date(year, month - 1, day);
};
exports.dateStringToDate = dateStringToDate;
