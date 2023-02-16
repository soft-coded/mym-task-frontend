import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store";
import { signupThunk } from "../../store/authSlice";
import GoogleAuth from "../../components/GoogleAuth";

export default function SignupPage() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { status: authStatus, error } = useAppSelector(state => state.auth);
	// using uncontrolled components to save time
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);
	const nameRef = useRef<HTMLInputElement>(null);

	async function handleSignUp(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		e.preventDefault();
		if (!emailRef.current || !passwordRef.current || !nameRef.current) return;

		// skipping form validation to save time, kindly input the correct values :)
		try {
			await dispatch(
				signupThunk({
					email: emailRef.current.value!,
					password: passwordRef.current.value,
					name: nameRef.current.value
				})
			).unwrap();
			// only redirect in case of a successful signup
			navigate("/");
		} catch (err) {
			// do nothing, redux takes care of this automatically
		}
	}

	return (
		<main className="signup">
			<div className="container">
				<h1 className="text-center">SIGN UP</h1>
				<form>
					{error && <div className="form-group error">{error}</div>}
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input ref={nameRef} type="text" id="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input ref={emailRef} type="email" id="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input ref={passwordRef} type="password" id="password" required />
					</div>
					<div className="form-group">
						<button
							type="submit"
							disabled={authStatus !== "idle"}
							onClick={handleSignUp}
						>
							SIGN UP
						</button>
					</div>
					<div className="separator-or flex items-center justify-center font-semibold">
						<h5>OR</h5>
					</div>
					<GoogleAuth authType="Sign up" />
					<div className="form-group">
						<div className="info text-center">
							Have an account?{" "}
							<Link to="/login" className="link">
								Log in
							</Link>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
}
