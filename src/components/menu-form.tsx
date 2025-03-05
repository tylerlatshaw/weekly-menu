"use client";

import { menuDataType } from "@/lib/types";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import { Switch, Button } from "@mui/material";

export default function MenuForm() {

    const currentDate: Dayjs = dayjs(new Date().toLocaleString());

    const getNearestSunday = (date: Dayjs) => {
        const dayOfWeek = date.day();
        const diff = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
        return date.add(diff, "day");
    };

    const [weekOf, setWeekOf] = useState<Dayjs>(getNearestSunday(currentDate));

    function createData(
        date: menuDataType["date"],
        meal: menuDataType["meal"],
        prepRequired: menuDataType["prepRequired"]
    ) {
        return { date, meal, prepRequired };
    }

    const defaultData = [
        createData(weekOf.add(0, "day"), "", false),
        createData(weekOf.add(1, "day"), "", false),
        createData(weekOf.add(2, "day"), "", false),
        createData(weekOf.add(3, "day"), "", false),
        createData(weekOf.add(4, "day"), "", false),
        createData(weekOf.add(5, "day"), "", false),
        createData(weekOf.add(6, "day"), "", false),
    ];

    const [inputData, setInputData] = useState<menuDataType[]>(defaultData);

    return (
        <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1 font-semibold text-white">
                <label htmlFor="weekOfInput" className="text-left">Week Of:</label>
                <div className="group flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 via-cyan-500 via-blue-500 to-purple-500 p-[1.5px] transition duration-300 ease-in-out hover:bg-gradient-to-tl hover:shadow-lg hover:shadow-purple-600/20 hover:transition">
                    <div className="flex h-full w-full items-center rounded-lg bg-gray-800 text-center font-medium tracking-tight transition ease-in-out hover:transition">
                        <input id="weekOfInput" required type="date" defaultValue={weekOf.format("YYYY-MM-DD")} className="h-full w-full p-4" />
                    </div>
                </div>
            </div>

            <form className="group flex items-center justify-center rounded-lg bg-gradient-to-br from-green-500 via-cyan-500 via-blue-500 to-purple-500 p-[1.5px] transition duration-300 ease-in-out hover:bg-gradient-to-tl hover:shadow-lg hover:shadow-purple-600/20 hover:transition">
                <table className="h-full w-full items-center rounded-lg bg-gray-800 text-center font-medium tracking-tight transition ease-in-out hover:transition">
                    <thead>
                        <tr className="border-b-2 border-gray-900 divide-x-2 divide-gray-900">
                            <th className="text-left">Date</th>
                            <th align="left">Meal</th>
                            <th align="left">Meal&nbsp;Prep?</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y-2 divide-gray-900">
                        {inputData.map((row) => (
                            <tr key={row.date.toString()} className="divide-x-2 divide-gray-900">
                                <td className="text-left">
                                    <span className="text-base font-bold">{row.date.format("dddd")}</span>
                                    <br />
                                    <span className="font-normal">{row.date.format("M/D/YY")}</span>
                                </td>
                                <td className="text-left w-full">
                                    <input id={"meal" + row.date.toString()} required placeholder="Enter Meal" className="h-full w-full p-4 bg-gray-900 rounded-lg shadow-inner" />
                                </td>
                                <td className="text-center">
                                    <Switch id={"prepRequired-" + row.date.toString()} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </form>

            <Button variant="contained" endIcon={<ArrowForward />} className="w-fit">Generate PDF</Button>
        </div>
    );
}