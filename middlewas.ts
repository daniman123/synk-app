import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	const cookies = request.cookies.getAll();
	console.log("🚀 ~ file: middleware.ts:9 ~ middleware ~ cookies:", cookies);

	const response = NextResponse.next();

	return response;
}
