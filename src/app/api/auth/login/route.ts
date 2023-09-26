import { NextRequest, NextResponse } from "next/server";
import { DB_URL } from "../../../../../lib/config";

export async function POST(req: NextRequest) {
	const body = await req.json();
	const endpoint = "/user/login";

	const requestOptions: RequestInit = {
		method: "POST",
		mode: "cors",
		cache: "no-cache",
		credentials: "same-origin",
		headers: {
			"Content-Type": "application/json",
		},
	};

	requestOptions.body = JSON.stringify(body);

	const res = await fetch(DB_URL + endpoint, requestOptions);
	const payload = await res.json();

	return NextResponse.json({ body: payload });
}

export async function GET() {
	const body = "User logged out!";
	console.log("🚀 ~ file: route.ts:5 ~ GET ~ body:", body);
	return NextResponse.json({ body });
}
