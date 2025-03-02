"use client";

import axios from "axios";
import { useEffect } from "react";

export default function ViewMenu() {

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // useEffect(() => {
    //     axios.get(baseUrl + "/api/getMenu");
    // }, []);

    async function onClick() {
        try {
            const response = await axios.get(baseUrl + "/api/getMenu", {
                // responseType: "blob",
                // params: {
                //     ...searchObject,
                // },
            });

            console.log(response.data);
                // .then((response) => {
                //     console.log(response.data);
                //     //Create a Blob from the PDF Stream
                //     const file = new Blob([response.data], { type: "application/pdf" });
                //     //Build a URL from the file
                //     const fileURL = URL.createObjectURL(file);
                //     //Open the URL on new Window
                //     const pdfWindow = window.open();
                //     pdfWindow!.location.href = fileURL;
                // })
                // .catch((error) => {
                //     console.log(error);
                // });
        } catch (error) {
            return { error };
        }
    }

    return <button className="p-5 bg-green-800" onClick={() => onClick()}>Click Me </button>;
}