import { WeeklyMenu } from "@/components/document-builder";
import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json(
        { message: WeeklyMenu },
        { status: 200 }
    );
}