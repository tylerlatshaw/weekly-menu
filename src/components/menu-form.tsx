"use client";

import { menuDataType } from "@/lib/types";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { ArrowForward } from "@mui/icons-material";
import { Switch, Button } from "@mui/material";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    example: string
    exampleRequired: string
}

type FieldInputs = {
    date1: Dayjs
}

export default function MenuForm() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    // const currentDate: Dayjs = dayjs(new Date().toLocaleString());

    // const getNearestSunday = (date: Dayjs) => {
    //     const dayOfWeek = date.day();
    //     const diff = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
    //     return date.add(diff, "day");
    // };

    // const [weekOf, setWeekOf] = useState<Dayjs>(getNearestSunday(currentDate));

    // function createData(
    //     date: menuDataType["date"],
    //     meal: menuDataType["meal"],
    //     prepRequired: menuDataType["prepRequired"]
    // ) {
    //     return { date, meal, prepRequired };
    // }

    // const defaultData = [
    //     createData(weekOf.add(0, "day"), "", false),
    //     createData(weekOf.add(1, "day"), "", false),
    //     createData(weekOf.add(2, "day"), "", false),
    //     createData(weekOf.add(3, "day"), "", false),
    //     createData(weekOf.add(4, "day"), "", false),
    //     createData(weekOf.add(5, "day"), "", false),
    //     createData(weekOf.add(6, "day"), "", false),
    // ];

    // const [inputData, setInputData] = useState<menuDataType[]>(defaultData);

    // const desktopTable = <>
    //     <table className="h-full w-full items-center rounded-lg bg-gray-800 text-center font-medium tracking-tight transition ease-in-out hover:transition">
    //         <thead>
    //             <tr className="border-b-2 border-gray-900 divide-x-2 divide-gray-900">
    //                 <th className="text-left">Date</th>
    //                 <th align="left">Meal</th>
    //                 <th align="left">Meal&nbsp;Prep?</th>
    //             </tr>
    //         </thead>
    //         <tbody className="divide-y-2 divide-gray-900">
    //             {inputData.map((row) => (
    //                 <tr key={row.date.toString()} className="divide-x-2 divide-gray-900">
    //                     <td className="text-left">
    //                         <span className="text-base font-bold">{row.date.format("dddd")}</span>
    //                         <br />
    //                         <span className="font-normal">{row.date.format("M/D/YY")}</span>
    //                     </td>
    //                     <td className="text-left w-full">
    //                         <input id={"meal" + row.date.toString()} required placeholder="Enter Meal" className="h-full w-full p-4 bg-gray-900 rounded-lg shadow-inner" />
    //                     </td>
    //                     <td className="text-center">
    //                         <Switch id={"prepRequired-" + row.date.toString()} />
    //                     </td>
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // </>;

    return (
        <div className="flex flex-col gap-4">

            <div className="flex flex-col gap-1 font-semibold text-white">
                <label htmlFor="weekOfInput" className="text-left">Week Of:</label>
                <div className="border border-red-200">
                    <div className="">
                        {/* <input id="weekOfInput" required type="date" defaultValue={weekOf.format("YYYY-MM-DD")} className="h-full w-full p-4" /> */}
                    </div>
                </div>
            </div>

            <form className="flex flex-col border border-red-200 p-3 gap-3 text-left" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("example")} className="bg-gray-500 p-3" />
                <div className="flex flex-col gap-1">
                    <input {...register("exampleRequired", { required: true })} className="bg-gray-500 p-3" />
                    {errors.exampleRequired && <span className="text-red-500">Enter a Meal</span>}
                </div>
                {/* {desktopTable} */}

                <Button type="submit" variant="contained" endIcon={<ArrowForward />} className="w-fit">Generate PDF</Button>
            </form>
        </div>
    );
}