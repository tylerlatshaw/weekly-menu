"use client";

import { PDFViewer } from "@react-pdf/renderer";
import { WeeklyMenu } from "./document-builder";

export default function DocumentViewer() {
  return (
    <PDFViewer>
      <WeeklyMenu />
    </PDFViewer>
  );
}