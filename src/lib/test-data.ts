import dayjs from "dayjs";
import { menuDataType } from "./types";

export const data: menuDataType[] = [
    {
        date: dayjs("3/2/25"),
        meal: "Manicotti with Garlic Bread",
        prepRequired: true,
    },
    {
        date: dayjs("3/3/25"),
        meal: "Homemade Pizza",
        prepRequired: false,
    },
    {
        date: dayjs("3/4/25"),
        meal: "Chicken and Mashed Potato Bowls",
        prepRequired: false,
    },
    {
        date: dayjs("3/5/25"),
        meal: "Greek Lemon Chicken with Potatoes",
        prepRequired: true,
    },
    {
        date: dayjs("3/6/25"),
        meal: "Grilled Cheese and Tomato Soup",
        prepRequired: false,
    },
    {
        date: dayjs("3/7/25"),
        meal: "Go Out to Eat",
        prepRequired: false,
    },
    {
        date: dayjs("3/8/25"),
        meal: "Hamburgers and French Fries",
        prepRequired: false,
    }
];