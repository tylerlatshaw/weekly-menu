import {
  StyleSheet,
  Text,
  Font,
  View,
  Line,
  Svg,
} from "@react-pdf/renderer";
import { Image as PDFImage } from "@react-pdf/renderer";
import { appSettings } from "../../app-settings";

Font.register({
  family: "Kanit", fonts: [
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKX-Go6G5tXcr72GwWKcaxALFs.ttf",
      fontWeight: 100,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5aOiWgX6BJNUJy.ttf",
      fontWeight: 200,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4-OSWgX6BJNUJy.ttf",
      fontWeight: 300,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKZ-Go6G5tXcoaSEQGodLxA.ttf",
      fontWeight: 400,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5mOCWgX6BJNUJy.ttf",
      fontWeight: 500,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr5KPyWgX6BJNUJy.ttf",
      fontWeight: 600,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4uPiWgX6BJNUJy.ttf",
      fontWeight: 700,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4yPSWgX6BJNUJy.ttf",
      fontWeight: 800,
    },
    {
      src: "https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4WPCWgX6BJNUJy.ttf",
      fontWeight: 900,
    }
  ]
});

export const styles = StyleSheet.create({
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

export const headerLine = <>
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

export const prepRequiredAlert = <>
  <View style={styles.prepRequiredSection}>
    <PDFImage src={process.env.BASE_URL + "/prep-required-icon.png"} style={styles.prepRequiredAlertIcon} />
    <Text style={styles.prepRequiredAlertText}>Prep Required</Text>
  </View>
</>;