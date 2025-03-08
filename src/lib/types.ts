import { Dayjs } from "dayjs";

export type menuDataType = {
    date: Dayjs,
    meal: string,
    prepRequired: boolean,
};

export type menuFormInputs = {
    date0: menuDataType["date"],
    date1: menuDataType["date"],
    date2: menuDataType["date"],
    date3: menuDataType["date"],
    date4: menuDataType["date"],
    date5: menuDataType["date"],
    date6: menuDataType["date"],
    meal0: menuDataType["meal"],
    meal1: menuDataType["meal"],
    meal2: menuDataType["meal"],
    meal3: menuDataType["meal"],
    meal4: menuDataType["meal"],
    meal5: menuDataType["meal"],
    meal6: menuDataType["meal"],
    prepRequired0: menuDataType["prepRequired"],
    prepRequired1: menuDataType["prepRequired"],
    prepRequired2: menuDataType["prepRequired"],
    prepRequired3: menuDataType["prepRequired"],
    prepRequired4: menuDataType["prepRequired"],
    prepRequired5: menuDataType["prepRequired"],
    prepRequired6: menuDataType["prepRequired"],
}

export type formDataType = {
    formData: menuFormInputs
}