import { useState } from "react";
import { makeRequest } from "../../../../lib/utils/NEXT_fetch";

export const initializeFormData = (fields: string[]) => {
	const initialData: InitialData = {};
	fields.forEach((field) => {
		initialData[field] = "";
	});
	return initialData;
};

export const useForm = (initialData: InitialData, endpoint: string) => {
	const [formData, setFormData] = useState(initialData);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const body = await makeRequest("POST", endpoint, formData);
		// console.log(formData);
		console.log("🚀 ~ file: formUtils.ts:23 ~ handleSubmit ~ body:", body)
	};
	return { formData, handleChange, handleSubmit };
};

export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
