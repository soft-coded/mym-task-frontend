import { useRef } from "react";
import { Link } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store";
import { signupThunk } from "../../store/authSlice";
import "./signup.css";

export default function SignupPage() {
	const dispatch = useAppDispatch();
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

		const res = await dispatch(
			signupThunk({
				email: emailRef.current.value!,
				password: passwordRef.current.value,
				name: nameRef.current.value
			})
		).unwrap();

		console.log("in handleSignUp", res);
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
