import { NextRequest } from "next/server";
import { DB_URL } from "../../../../../lib/config";
import { postAuth } from "../../../../../lib/auth/postAuth";

export async function POST(req: NextRequest) {
	const path = DB_URL.LOGIN;
	return postAuth(req, path);
}
