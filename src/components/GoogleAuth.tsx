import { GOOGLE_OAUTH_CREDENTIALS } from "../constants";

function getGoogleAuthURL() {
	const options = {
		redirect_uri: GOOGLE_OAUTH_CREDENTIALS.redirect_uri,
		client_id: GOOGLE_OAUTH_CREDENTIALS.client_id,
		access_type: "offline",
		response_type: "code",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/userinfo.email",
			"https://www.googleapis.com/auth/userinfo.profile"
		].join(" ")
	};

	const queryParams = new URLSearchParams(options);
	return `${GOOGLE_OAUTH_CREDENTIALS.auth_uri}?${queryParams.toString()}`;
}

type AuthComponentProps = {
	authType: "Log in" | "Sign up";
};

export default function GoogleAuth({ authType }: AuthComponentProps) {
	return (
		<a
			href={getGoogleAuthURL()}
			className="google-auth flex items-center justify-center gap-2"
		>
			<div className="google-logo flex items-center justify-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					version="1.1"
					xmlnsXlink="http://www.w3.org/1999/xlink"
					width="18"
					height="18"
					x="0"
					y="0"
					viewBox="0 0 512 512"
					xmlSpace="preserve"
				>
					<g>
						<path
							d="M113.47 309.408 95.648 375.94l-65.139 1.378C11.042 341.211 0 299.9 0 256c0-42.451 10.324-82.483 28.624-117.732h.014L86.63 148.9l25.404 57.644c-5.317 15.501-8.215 32.141-8.215 49.456.002 18.792 3.406 36.797 9.651 53.408z"
							fill="#fbbb00"
							data-original="#fbbb00"
						></path>
						<path
							d="M507.527 208.176C510.467 223.662 512 239.655 512 256c0 18.328-1.927 36.206-5.598 53.451-12.462 58.683-45.025 109.925-90.134 146.187l-.014-.014-73.044-3.727-10.338-64.535c29.932-17.554 53.324-45.025 65.646-77.911h-136.89V208.176h245.899z"
							fill="#518ef8"
							data-original="#518ef8"
						></path>
						<path
							d="m416.253 455.624.014.014C372.396 490.901 316.666 512 256 512c-97.491 0-182.252-54.491-225.491-134.681l82.961-67.91c21.619 57.698 77.278 98.771 142.53 98.771 28.047 0 54.323-7.582 76.87-20.818l83.383 68.262z"
							fill="#28b446"
							data-original="#28b446"
						></path>
						<path
							d="m419.404 58.936-82.933 67.896C313.136 112.246 285.552 103.82 256 103.82c-66.729 0-123.429 42.957-143.965 102.724l-83.397-68.276h-.014C71.23 56.123 157.06 0 256 0c62.115 0 119.068 22.126 163.404 58.936z"
							fill="#f14336"
							data-original="#f14336"
						></path>
					</g>
				</svg>
			</div>
			<h5>{authType} with Google</h5>
		</a>
	);
}
