import { Navigate } from "react-router-dom";

import { useAppSelector } from "../store";

export default function Protected({
	children
}: {
	children: React.ReactElement;
}) {
	const isAuthed = useAppSelector(state => state.auth.isAuthed);

	if (!isAuthed) {
		return <Navigate to="/login" replace />;
	}

	return children;
}
