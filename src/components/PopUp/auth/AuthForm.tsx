"use client";

import "./AuthForm.css";
import InputField from "./formGenerator";
import { initializeFormData, useForm } from "./formUtils";

const AuthForm = ({ fields, endpoint }: AuthFormProps) => {
	const initialData = initializeFormData(fields);
	const { handleChange, handleSubmit } = useForm(initialData, endpoint);

	return (
		<div className="form-container">
			<form className="auth-form" onSubmit={handleSubmit}>
				{fields.map((field) => (
					<InputField key={field} field={field} handleChange={handleChange} />
				))}
				<button type="submit" className="primary auth-submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default AuthForm;
