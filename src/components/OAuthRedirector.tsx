import { useSearchParams, Navigate } from "react-router-dom";

import { useAppDispatch } from "../store";
import { authActions } from "../store/authSlice";

export default function OAuthRedirector() {
	const searchParams = useSearchParams()[0];
	const dispatch = useAppDispatch();

	dispatch(
		authActions.login({
			email: searchParams.get("email"),
			token: searchParams.get("token")
		})
	);

	return <Navigate to="/" />;
}
