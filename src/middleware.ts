import { NextResponse, NextRequest } from "next/server";

export function middleware(request: NextRequest) {
	console.log("Middleware");
	// console.log("response:", request.);
	// console.log("url:", request.url);

	// const cookies = request.cookies;

	// cookies.delete("jwt");
	// cookies.delete("user_credentials");

	// console.log("cookies:", cookies);

	return NextResponse.next();
}

export const config = {
	matcher: "/api/auth/logout",
};
