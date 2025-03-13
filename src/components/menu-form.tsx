"use client";

import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
import { ArrowForward, DeleteOutline } from "@mui/icons-material";
import { Button, CircularProgress } from "@mui/material";
import { useForm } from "react-hook-form";
import axios from "axios";
import { green, red } from "@mui/material/colors";

export default function MenuForm() {

    const [loadingState, setLoadingState] = useState<boolean>(false);

    const {
        register,
        handleSubmit,
        setValue,
        clearErrors,
        getFieldState,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        formState: { errors },
    } = useForm();
    const onSubmit = async (formData: unknown) => {
        setLoadingState(true);

        try {
            const response = await axios.post("/api/generate-pdf", {
                formData
            }, { responseType: "blob" });

            const blob = new Blob([response.data], { type: "application/pdf" });
            const blobURL = window.URL.createObjectURL(blob);

            const templink = document.createElement("a");
            templink.href = blobURL;
            document.body.appendChild(templink);

            window.open(templink.toString());

            setTimeout(function () {
                document.body.removeChild(templink);
                window.URL.revokeObjectURL(blobURL);
            }, 300000); // 5 minutes
        } catch (e) {
            console.log(e);
        }

        setLoadingState(false);
    };

    const currentDate: Dayjs = dayjs(new Date().toLocaleString());
    const getNearestSunday = (date: Dayjs) => {
        const dayOfWeek = date.day();
        const diff = dayOfWeek === 0 ? 0 : 7 - dayOfWeek;
        return date.add(diff, "day");
    };
    const [weekOf, setWeekOf] = useState<Dayjs>(getNearestSunday(currentDate));
    const handleDateChange = (e: { target: { value: string; }; }) => {
        setWeekOf(dayjs(e.target.value));
        for (let i = 0; i < 7; i++) {
            setValue(`date${i}`, dayjs(e.target.value).add(i, "days").format("M/D/YY"));
        }
    };

    const clearPrepRequired = () => {
        for (let i = 0; i < 7; i++) {
            setValue(`prepRequired${i}`, false);
        }
    };

    const resetDates = () => {
        const date = getNearestSunday(dayjs());
        for (let i = 0; i < 7; i++) {
            setValue(`date${i}`, dayjs(date).add(i, "days").format("M/D/YY"));
        }
    };

    function generateFields() {
        const rows = [];
        let placeholder;
        const inputStylesBase = "h-full w-full p-3 md:p-4 rounded bg-zinc-700 border border-zinc-800 inset-shadow-xs inset-shadow-zinc-950 ";

        for (let i = 0; i < 7; i++) {
            const rowDate = weekOf.add(i, "days");
            const inputStyles = getFieldState(`meal.${i}`).error ? inputStylesBase + "input-error outline-red-500" : inputStylesBase;
            placeholder = getFieldState(`meal.${i}`).error ? "Enter a meal for " + rowDate.format("dddd") : "Enter a meal";

            rows.push(<div key={i} className="flex flex-col rounded bg-zinc-800 p-3 md:p-4 gap-2 shadow">
                <div className="flex flex-row items-center justify-between">
                    <div>
                        <span className="text-base font-bold">{rowDate.format("dddd")}</span>
                        <span className="hidden md:inline font-normal">&nbsp;- {rowDate.format("M/D/YY")}</span>
                        <span className="inline md:hidden font-normal">&nbsp;- {rowDate.format("M/D")}</span>
                    </div>

                    <div className="flex flex-row items-center gap-2">
                        <span className="inline md:hidden">Prep?</span>
                        <span className="hidden md:inline">Meal Prep?</span>
                        <label className="switch">
                            <input {...register(`prepRequired${i}`)} type="checkbox" className="peer" />
                            <span className="slider round peer-focus:outline"></span>
                        </label>
                    </div>

                    <input {...register(`date${i}`)} hidden value={rowDate.format("M/D/YY")} />
                </div>
                <div className="flex flex-col">
                    <input {...register(`meal.${i}`, { required: "Enter a meal for " + rowDate.format("dddd") })} placeholder={placeholder} className={inputStyles} style={getFieldState(`meal.${i}`).error ? { borderWidth: "1px", borderColor: "#ef4444", backgroundColor: "#ef444420", color: "#ef4444" } : {}} />
                </div>
            </div>);
        }

        return <div className="flex flex-col gap-4">
            {rows}
        </div>;
    }

    return (
        <div className="h-full overflow-hidden">
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full rounded gap-4 text-left text-white">

                <div className="flex flex-row items-center w-full gap-4">
                    <span className="text-lg font-semibold">Week Of:</span>
                    <input {...register("weekOfInput")} onChange={handleDateChange} type="date" defaultValue={weekOf.format("YYYY-MM-DD")} className="h-full grow p-2 sm:p-3 rounded-lg bg-zinc-900 inset-shadow-sm inset-shadow-zinc-950" />
                </div>

                <div className="grow p-4 mb-1 md:m-0 bg-zinc-900 rounded-lg overflow-y-auto no-scrollbar inset-shadow-sm inset-shadow-zinc-950">
                    {generateFields()}
                </div>

                <div className="flex flex-col md:flex-row md:justify-between gap-2">
                    <Button type="submit" variant="contained" className="flex items-center gap-2 w-full md:w-fit" style={{ backgroundColor: green[800], padding: "12px 28px" }}><span>Generate PDF</span>{loadingState ? <CircularProgress size={16} sx={{ color: "white" }} /> : <ArrowForward />}</Button>

                    <Button type="reset" onClick={() => { setWeekOf(getNearestSunday(currentDate)); clearErrors(); clearPrepRequired(); resetDates(); }} variant="outlined" className="flex items-center gap-2 w-full md:w-fit" style={{ borderColor: red[600], color: red[600], padding: "12px 28px" }}><span>Reset</span><DeleteOutline /></Button>
                </div>

            </form>
        </div>
    );
}