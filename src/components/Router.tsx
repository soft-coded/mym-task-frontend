import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "../store";
import { authActions } from "../store/authSlice";
import HomePage from "../pages/home";
import SignupPage from "../pages/signup";
import LoginPage from "../pages/login";
import Protected from "./Protected";

export default function Router() {
	const dispatch = useAppDispatch();
	const authStatus = useAppSelector(state => state.auth.status);

	useEffect(() => {
		dispatch(authActions.loginOnLoad());
	}, [dispatch]);

	return authStatus === "fetching" ? (
		<div className="text-center h-screen w-screen flex items-center justify-center">
			<h1>LOADING...</h1>
		</div>
	) : (
		<Routes>
			<Route path="/login" element={<LoginPage />} />
			<Route path="/signup" element={<SignupPage />} />
			<Route
				path="/"
				element={
					<Protected>
						<HomePage />
					</Protected>
				}
			/>
		</Routes>
	);
}
