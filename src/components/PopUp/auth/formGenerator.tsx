import React from "react";
import { capitalizeFirstLetter } from "./formUtils";

interface InputFieldProps {
	field: string;
	handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({ field, handleChange }: InputFieldProps) => (
	<div className={`${field} input-field-container`}>
		<label htmlFor={field}>{capitalizeFirstLetter(field)}</label>
		<input
			onChange={handleChange}
			required
			type={field === "password" ? "password" : "text"}
			name={field}
			id={field}
			className={`${field} input-field`}
		/>
	</div>
);

export default InputField;
