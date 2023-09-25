import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { LOCAL_URL } from "../api_paths";
import { NextResponse } from "next/server";

const apiClient = axios.create({
	baseURL: LOCAL_URL,
	withCredentials: true, // Include cookies in the request
});

// Define the RequestOptions type based on the usage within fetchData function
export type RequestOptions = AxiosRequestConfig;

// Utility function to fetch data from an API using Axios
export const fetchData = async (
	url: string,
	method: string = "get",
	options: RequestOptions = {}
): Promise<any> => {
	try {
		const response: NextResponse = await apiClient.request({
			url,
			method,
			...options,
		});
		return response;
	} catch (error) {
		handleRequestError(error);
	}
};

// Handles the error that occurred during the API request
const handleRequestError = (error: any): void => {
	const { response } = error;

	if (response) {
		// const { status, data } = response;
		// throw new Error(JSON.stringify({ status: status, data: data }));
		console.log(response);
	} else {
		throw new Error("Request failed: no response received");
	}
};
