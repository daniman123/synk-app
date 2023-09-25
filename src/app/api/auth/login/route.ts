import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	const body = await req.json();
	// console.log("🚀 ~ file: route.ts:5 ~ POST ~ body:", body);
	return NextResponse.json({ body });
}

export async function GET() {
	const body = "User logged out!";
	console.log("🚀 ~ file: route.ts:5 ~ GET ~ body:", body);
	return NextResponse.json({ body });
}
