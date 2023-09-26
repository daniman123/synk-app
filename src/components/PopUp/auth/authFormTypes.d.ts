interface AuthFormProps {
	fields: string[];
	endpoint: string;
}

type InitialData = {
	[key in AuthFormProps["fields"][number]]: string;
};
