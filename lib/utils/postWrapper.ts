import { AxiosRequestConfig } from "axios";
import { axiosFetch } from "./fetchWrapper";

export async function axiosPost(endpoint: string, data: Object) {
	const method = "post";
	const options: AxiosRequestConfig = {
		headers: {
			"Content-Type": "application/json",
		},
		data: data,
	};
	const res = await axiosFetch(endpoint, method, options);
	return res;
}
