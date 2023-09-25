import Auth from "@/components/PopUp/auth/Auth";
import { AuthMetaData } from "@/components/PopUp/auth/authTypes";

const Login = async () => {
	const loginMetaData: AuthMetaData = {
		title: "Login",
		inputMetaData: {
			userName: "userName",
			password: "password",
		},
	};

	return (
		<main className="auth-main">
			<Auth {...loginMetaData} />
		</main>
	);
};

export default Login;