import { headerLine, prepRequiredAlert, styles } from "@/components/document-components";
import {
    Document,
    Page,
    Text,
    View,
    renderToBuffer
} from "@react-pdf/renderer";
import dayjs, { Dayjs } from "dayjs";

type menuDataType = {
    date: Dayjs,
    meal: string,
    prepRequired: boolean,
};

export async function POST(request: Request) {
    const formData = await request.json().then(data => { return data.formData; });

    const sanitizedData: menuDataType[] = [];

    for (let i = 0; i < 7; i++) {
        sanitizedData.push({
            date: formData["date" + i],
            meal: formData.meal[i],
            prepRequired: formData["prepRequired" + i]
        });
    }

    const startDate = dayjs(sanitizedData[0].date);

    const pdf = await renderToBuffer(
        <Document title={"Weekly Menu: " + startDate.format("M/D/YY")} author="Tyler J Latshaw">
            <Page size={"LETTER"} style={styles.page}>

                <View style={styles.header}>
                    <View style={styles.weekOfRow}>
                        {headerLine}

                        <Text style={styles.weekOf}>
                            Week of: {startDate.format("M/D/YY")}
                        </Text>

                        {headerLine}
                    </View>

                    <Text style={styles.h1}>WEEKLY MENU</Text>
                </View>

                <View style={styles.body}>
                    {
                        sanitizedData.map((row) => {
                            const date = dayjs(row.date);
                            return (
                                <View key={dayjs(date.date()).toISOString()} style={styles.dayRow}>
                                    <View style={styles.dayCell}>
                                        <Text>{dayjs(date).format("dddd, M/D")}</Text>
                                        {
                                            row.prepRequired ? prepRequiredAlert : null
                                        }
                                    </View>
                                    <View style={styles.menuCell}>
                                        <Text style={styles.menuText}>{row.meal}</Text>
                                    </View>
                                </View>
                            );
                        })
                    }
                </View>

            </Page>
        </Document>
    );

    return new Response(pdf, {
        headers: {
            "Content-Type": "application/pdf",
            "Content-disposition": "attachment; filename=\"filename.pdf\"",
        },
    });
};
