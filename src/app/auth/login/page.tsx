import AuthForm from "@/components/PopUp/auth/AuthForm";

const Login = async () => {
	return (
		<main className="auth-main">
			<AuthForm fields={["username", "password"]} endpoint="/login" />
		</main>
	);
};

export default Login;
