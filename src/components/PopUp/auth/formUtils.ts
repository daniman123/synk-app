import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
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
	const { setUserId, setUsername, setSession } = useAuthStore();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const { user_id, username } = await makeRequest("POST", endpoint, formData);

		setUsername(username);
		setUserId(user_id);
		setSession(true);
		window.location.href = "/";
	};
	return { formData, handleChange, handleSubmit };
};

export const capitalizeFirstLetter = (string: string) => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};
