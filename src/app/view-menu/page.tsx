"use client";

import DocumentBuilder from "@/components/document-builder";
import { Button, Modal } from "@mui/material";
import { useState } from "react";

export default function ViewMenu() {

    const [open, setOpen] = useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return <>
        <Button onClick={handleOpen}>Open modal</Button>

        <Modal open={open} onClose={handleClose} className="bg-gray-900/20">
            <div style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
            }} className="absolute p-4 md:px-8 md:py-6 w-11/12 h-11/12 md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-2/3 rounded-lg bg-slate-700">
                <DocumentBuilder />
            </div>
        </Modal >
    </>;
}