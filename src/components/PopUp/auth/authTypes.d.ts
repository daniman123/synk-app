export interface LoginMetaData {
	userName: string;
	password: string | number;
}

export interface SignUpMetaData extends LoginMetaData {
	email: string;
}

export interface InputFieldData {
	SignUpMetaData;
	LoginMetaData;
}

export interface AuthMetaData {
	title: string;
	inputMetaData: SignUpMetaData | LoginMetaData;
}
