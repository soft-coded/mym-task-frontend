import { Link } from "react-router-dom";

import "./signup.css";

export default function SignupPage() {
	return (
		<main className="signup">
			<div className="container">
				<h1 className="text-center">SIGN UP</h1>
				<form>
					<div className="form-group">
						<label htmlFor="name">Name</label>
						<input type="text" id="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" required />
					</div>
					<div className="form-group">
						<button type="submit">SIGN UP</button>
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
