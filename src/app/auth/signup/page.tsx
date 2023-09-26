import AuthForm from "@/components/PopUp/auth/AuthForm";

const SignUp = () => {
	return (
		<main className="auth-main">
			<AuthForm fields={["username", "email", "password"]} endpoint="/signup" />
		</main>
	);
};

export default SignUp;
