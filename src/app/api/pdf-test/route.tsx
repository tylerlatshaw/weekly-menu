import { Document, Page, Text, renderToBuffer } from "@react-pdf/renderer";

export const GET = async () => {
    const pdf = await renderToBuffer(
        <Document>
            <Page>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            <Text>Hello world </Text>
            </Page>
        </Document>
    );
    return new Response(pdf, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-disposition": "inline; filename=\"filename.pdf\"",
        },
    });
};
