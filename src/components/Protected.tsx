import { Navigate } from "react-router-dom";

const isLoggedIn = false;

export default function Protected({
	children
}: {
	children: React.ReactElement;
}) {
	if (!isLoggedIn) {
		return <Navigate to="/login" replace />;
	}

	return children;
}
