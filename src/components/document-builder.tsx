/* eslint-disable jsx-a11y/alt-text */
"use client";

import { data } from "@/lib/test-data";
import {
  Document,
  Page,
  PDFViewer,
  PDFDownloadLink,
  StyleSheet,
  Text,
  Font,
  View,
  Line,
  Svg,
  Image,
} from "@react-pdf/renderer";
import dayjs from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import DownloadIcon from "@mui/icons-material/Download";

export default function DocumentBuilder() {
  
  const startDate = dayjs(data[0].date);
  dayjs.extend(advancedFormat);

  Font.register({
    family: "Kanit", fonts: [
      {
        src: "/fonts/Kanit-Thin.ttf",
        fontWeight: 100,
      },
      {
        src: "/fonts/Kanit-ExtraLight.ttf",
        fontWeight: 200,
      },
      {
        src: "/fonts/Kanit-Light.ttf",
        fontWeight: 300,
      },
      {
        src: "/fonts/Kanit-Regular.ttf",
        fontWeight: 400,
      },
      {
        src: "/fonts/Kanit-Medium.ttf",
        fontWeight: 500,
      },
      {
        src: "/fonts/Kanit-SemiBold.ttf",
        fontWeight: 600,
      },
      {
        src: "/fonts/Kanit-Bold.ttf",
        fontWeight: 700,
      },
      {
        src: "/fonts/Kanit-ExtraBold.ttf",
        fontWeight: 800,
      },
      {
        src: "/fonts/Kanit-Black.ttf",
        fontWeight: 900,
      }
    ]
  });

  const styles = StyleSheet.create({
    page: {
      flexDirection: "column",
      backgroundColor: "white",
      marginTop: "24px",
      fontFamily: "Kanit",
      fontSize: "12pt",
      textAlign: "center",
      marginLeft: "auto",
      marginRight: "auto",
    },
    h1: {
      fontSize: "32pt",
      fontWeight: "600",
      letterSpacing: "2px",
      lineHeight: "48px",
    },
    header: {
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      flexDirection: "column",
    },
    weekOfRow: {
      width: "100%",
      marginLeft: "64px",
      marginRight: "64px",
      flexDirection: "row",
    },
    body: {
      flexGrow: 1,
      marginLeft: "auto",
      marginRight: "auto",
      gap: "10px",
    },
    weekOf: {
      width: "114px",
      paddingLeft: "4px",
      paddingTop: "4px",
      paddingBottom: "2px",
      marginLeft: "8px",
      marginRight: "8px",
      textAlign: "center",
      borderWidth: "2px",
      borderRadius: "16px",
    },
    dayRow: {
      paddingTop: "8px",
      paddingBottom: "8px",
      height: "84px",
      width: "500px",
      borderWidth: "2px",
      display: "flex",
      flexDirection: "row",
    },
    dayCell: {
      padding: "8px",
      width: "33%",
      borderRight: "2px",
      fontSize: "18pt",
      fontWeight: "500",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    prepRequiredSection: {
      flexDirection: "row",
      gap: "4px",
    },
    prepRequiredAlertIcon: {
      width: "24px",
    },
    prepRequiredAlertText: {
      fontSize: "12pt",
      fontWeight: "400",
      paddingTop: "3px",
      letterSpacing: "1px",
      color: "#C70A4F",
    },
    menuCell: {
      paddingLeft: "8px",
      paddingRight: "8px",
      width: "67%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    menuText: {
      padding: "0",
      fontSize: "18pt",
      fontWeight: "700",
      lineHeight: "24pt",
      letterSpacing: "2px",
    }
  });

  const headerLine = <>
    <Svg height="26" width="174">
      <Line
        x1="0"
        y1="13"
        x2="174"
        y2="13"
        strokeWidth={2}
        stroke="black"
      />
    </Svg>
  </>;

  const prepRequiredAlert = <>
    <View style={styles.prepRequiredSection}>
      <Image src={"/prep-required-icon.png"} style={styles.prepRequiredAlertIcon} />
      <Text style={styles.prepRequiredAlertText}>Prep Required</Text>
    </View>
  </>;

  const document = (
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
            data.map((row) => {
              const date = dayjs(row.date);
              return (
                <View key={date.date()} style={styles.dayRow}>
                  <View style={styles.dayCell}>
                    <Text>{date.format("dddd, M/D")}</Text>
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

  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-xl md:text-2xl lg:text-3xl"><b>Menu for the Week Of: </b>{startDate.format("MMMM Do")}</h2>

        <PDFDownloadLink document={document} fileName={"menu_" + startDate.format("YYYY-MM-DD")} className="hidden lg:block w-fit bg-cyan-900 px-4 py-2 text-lg shadow rounded font-semibold">Download <DownloadIcon /></PDFDownloadLink>
      </div>

      <PDFViewer className="w-full h-full">{document}</PDFViewer>
    </div>
  );

}