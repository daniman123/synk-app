import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { DB_URL } from "../config";

const apiClient = axios.create({
	baseURL: DB_URL,
	withCredentials: true, // Include cookies in the request
});

export const axiosFetch = async (
	url: string,
	method: string = "get",
	options: AxiosRequestConfig = {}
): Promise<any> => {
	try {
		const response: AxiosResponse = await apiClient.request({
			url,
			method,
			...options,
		});
		return response.data;
	} catch (error) {
		handleRequestError(error);
	}
};

const handleRequestError = (error: any): void => {
	const { response } = error;

	if (response) {
		const { status, data } = response;
		console.log(
			"🚀 ~ file: fetchWrapper.ts:32 ~ handleRequestError ~ data:",
			data,
			status
		);
		// throw new Error(JSON.stringify({ status: status, data: data }));
	} else {
		throw new Error("Request failed: no response received");
	}
};
