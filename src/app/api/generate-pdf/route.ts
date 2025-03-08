import { NextResponse } from "next/server";

export async function POST(request: Request) {

    const requestSubmission = await request.json();
    const formData = requestSubmission.formData;

    const sanitizedData = [];

    for(let i = 0; i < 7; i++) {
        sanitizedData.push({
            date: formData["date" + i],
            meal: formData["meal" + i],
            prepRequired: formData["prepRequired" + i]
        });
    }

    try {
        await Promise.all([]);

        return NextResponse.json({
            data: sanitizedData,
            status: 200
        });
    } catch (error) {
        return NextResponse.json({
            data: "An error occurred generating the PDF. Please try again later. " + error,
            status: 500
        });
    }
}