import { blob, WeeklyMenu } from "@/components/document-builder";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        { message: blob},
        { status: 200 }
    );
}