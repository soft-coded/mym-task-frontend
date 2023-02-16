import { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../../store";
import { loginThunk } from "../../store/authSlice";
import "./login.css";

export default function LoginPage() {
	const dispatch = useAppDispatch();
	const navigate = useNavigate();
	const { status: authStatus, error } = useAppSelector(state => state.auth);
	// using uncontrolled components to save time
	const emailRef = useRef<HTMLInputElement>(null);
	const passwordRef = useRef<HTMLInputElement>(null);

	async function handleLogIn(
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) {
		e.preventDefault();
		if (!emailRef.current || !passwordRef.current) return;

		try {
			await dispatch(
				loginThunk({
					email: emailRef.current.value!,
					password: passwordRef.current.value
				})
			).unwrap();
			// only redirect on a successful login
			navigate("/");
		} catch (err) {
			// do nothing, redux automatically takes care of this
		}
	}

	return (
		<main className="login">
			<div className="container">
				<h1 className="text-center">LOG IN</h1>
				<form>
					{error && <div className="form-group">{error}</div>}
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
							onClick={handleLogIn}
							disabled={authStatus !== "idle"}
						>
							LOG IN
						</button>
					</div>
					<div className="form-group">
						<div className="info text-center">
							Don't have an account?{" "}
							<Link to="/signup" className="link">
								Sign up
							</Link>
						</div>
					</div>
				</form>
			</div>
		</main>
	);
}
