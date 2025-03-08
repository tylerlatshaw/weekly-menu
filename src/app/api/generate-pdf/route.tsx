import DocumentBuilder from "@/components/document-builder";
import { menuDataType } from "@/lib/types";
import { renderToBuffer } from "@react-pdf/renderer";

export async function POST(request: Request) {
    const formData = await request.json().then(data => { return data.formData; });

    const sanitizedData: menuDataType[] = [];

    for (let i = 0; i < 7; i++) {
        sanitizedData.push({
            date: formData["date" + i],
            meal: formData["meal" + i],
            prepRequired: formData["prepRequired" + i]
        });
    }

    const pdf = await renderToBuffer(
        <DocumentBuilder />
    );

    return new Response(pdf, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-disposition": "attachment; filename=\"filename.pdf\"",
        },
    });
};
