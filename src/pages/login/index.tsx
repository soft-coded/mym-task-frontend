import { Link } from "react-router-dom";

import "./login.css";

export default function LoginPage() {
	return (
		<main className="login">
			<div className="container">
				<h1 className="text-center">LOG IN</h1>
				<form>
					<div className="form-group">
						<label htmlFor="email">Email</label>
						<input type="email" id="email" required />
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" id="password" required />
					</div>
					<div className="form-group">
						<button type="submit">LOG IN</button>
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
