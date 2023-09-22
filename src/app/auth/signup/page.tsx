import Auth from "@/components/PopUp/auth/Auth";
import { AuthMetaData } from "@/components/PopUp/auth/authTypes";

const Pagas = () => {
	const signUpMetaData: AuthMetaData = {
		title: "Sign Up",
		inputMetaData: {
			email: "email",
			userName: "userName",
			password: "password",
		},
	};

	return (
		<main className="auth-main">
			<Auth {...signUpMetaData} />
		</main>
	);
};

export default Pagas;
