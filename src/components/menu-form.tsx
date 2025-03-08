"use client";

import { menuDataType, menuFormInputs } from "@/lib/types";
import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent, useState } from "react";
import { ArrowForward, DeleteOutline } from "@mui/icons-material";
import { Switch, Button, FormControlLabel } from "@mui/material";
import { useForm, SubmitHandler, useFieldArray, Controller } from "react-hook-form";
import axios from "axios";
import { green, red } from "@mui/material/colors";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { ErrorMessage } from "@hookform/error-message";

export default function MenuForm() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData: unknown) => {
        // setSubmitState("Idle");
        // setResponseMessage("");
        // setLoadingState(true);

        // console.log(formData);

        try {
            // const { data } = await axios.post("/api/generate-pdf", {
            //     formData
            // } as unknown as menuFormInputs);

            const { data } = await axios.get("/api/pdf-test");

            const blob = new Blob([data], { type: "application/pdf" });
            const blobURL = URL.createObjectURL(blob);
            window.open(blobURL);

            console.log(blob);



            // console.log(data);

            // setResponseMessage(data);
            // setSubmitState("Success");
            // reset({
            //     name: "",
            //     email: "",
            //     message: "",
            // });
        } catch (e) {
            // setResponseMessage("Something went wrong. Please try again.");
            // setSubmitState("Error");
        }

        // setLoadingState(false);
    };

    const currentDate: Dayjs = dayjs(new Date().toLocaleString());
    const getNearestSunday = (date: Dayjs) => {
        const dayOfWeek = date.day();
        const diff = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
        return date.add(diff, "day");
    };
    const [weekOf, setWeekOf] = useState<Dayjs>(getNearestSunday(currentDate));
    const handleInputChange = (e: { target: { value: string; }; }) => {
        setWeekOf(dayjs(e.target.value));
    };

    function generateDesktopFields() {
        const rows = [];

        for (let i = 0; i < 7; i++) {
            const rowDate = weekOf.add(i, "days");
            rows.push(<tr key={i} className="">
                <td className="text-left border border-gray-950">
                    <span className="text-base font-bold">{rowDate.format("dddd")}</span>
                    <br />
                    <span className="font-normal">{rowDate.format("M/D/YY")}</span>
                    <input {...register(`date${i}`)} hidden value={rowDate.format("M/D/YY")} />
                </td>
                <td className="text-left w-full border border-gray-950">
                    <input {...register(`meal.${i}`, { required: "Enter a meal for " + rowDate.format("dddd") })} placeholder="Enter Meal" className="h-full w-full p-4 rounded-lg bg-gray-800 border border-gray-950 drop-shadow-lg mb-2" />
                    <span className="text-red-400 font-semibold">
                        <ErrorMessage errors={errors} name={`meal.${i}`} />
                    </span>
                </td>
                <td className="text-center border border-gray-950">
                    <label className="switch">
                        <input {...register(`prepRequired${i}`)} type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </td>
            </tr>);
        }

        return <>
            <table className="border-collapse h-full w-full items-center bg-gray-700 border outline outline-2 outline-gray-950 overflow-hidden drop-shadow-lg rounded-lg">
                <thead>
                    <tr className="">
                        <th className="text-left border border-gray-950">Date</th>
                        <th className="text-left border border-gray-950">Meal</th>
                        <th className="text-left border border-gray-950">Meal&nbsp;Prep?</th>
                    </tr>
                </thead>
                <tbody className="">
                    {rows}
                </tbody>
            </table>
        </>;
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col rounded gap-6 text-left text-white">

            <div className="flex flex-row items-center w-full gap-4">
                <span className="text-lg font-semibold">Week Of:</span>
                <input onChange={handleInputChange} type="date" defaultValue={weekOf.format("YYYY-MM-DD")} className="h-full grow p-2 sm:p-4 rounded-lg bg-gray-800 border border-gray-950 drop-shadow-lg" />
            </div>

            {generateDesktopFields()}

            <div className="flex flex-row gap-4 justify-between">
                <Button type="submit" variant="contained" className="flex items-center gap-2 w-fit" style={{ backgroundColor: green[600], padding: "12px 28px" }}><span>Generate PDF</span><ArrowForward /></Button>

                <Button type="reset" variant="outlined" className="flex items-center gap-2 w-fit" style={{ borderColor: red[600], color: red[600], padding: "12px 28px" }}><span>Reset</span><DeleteOutline /></Button>
            </div>
        </form>
    );
}