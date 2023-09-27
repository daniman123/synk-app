import { NextRequest, NextResponse } from "next/server";
import { DB_URL } from "../../../../../lib/config";
import { postAuth } from "../../../../../lib/auth/postAuth";

export async function POST(req: NextRequest) {
	const path = DB_URL.LOGIN;
	return postAuth(req, path);
}

export async function GET() {
	const body = "User logged out!";
	console.log("🚀 ~ file: route.ts:5 ~ GET ~ body:", body);
	return NextResponse.json({ body });
}
