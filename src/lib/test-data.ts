import dayjs from "dayjs";
import { menuDataType } from "./types";

export const data: menuDataType[] = [
    {
        date: dayjs("3/9/25"),
        meal: "Creamy Tuscan Chicken with Pasta",
        prepRequired: false,
    },
    {
        date: dayjs("3/10/25"),
        meal: "Southwestern Chicken Soup",
        prepRequired: true,
    },
    {
        date: dayjs("3/11/25"),
        meal: "Chicken Enchiladas with Mango Salsa",
        prepRequired: true,
    },
    {
        date: dayjs("3/12/25"),
        meal: "Burgers with French Fries",
        prepRequired: false,
    },
    {
        date: dayjs("3/13/25"),
        meal: "Garlic Parmesan Chicken Pasta",
        prepRequired: false,
    },
    {
        date: dayjs("3/14/25"),
        meal: "Chicken and Mashed Potato Bowls",
        prepRequired: false,
    },
    {
        date: dayjs("3/15/25"),
        meal: "Go Out to Eat",
        prepRequired: false,
    }
];