import axios from "axios";
import { SERVER_ORIGIN } from "../constants";

export const axiosClient = axios.create({
	baseURL: SERVER_ORIGIN,
	headers: {
		"Content-Type": "application/json"
	},
	timeout: 20000 // 20s
});

axiosClient.interceptors.response.use(undefined, error => {
	let msg: string;
	if (error.response) msg = error.response.data.message;
	else if (error.request) msg = "Network error. Check your connection";
	else msg = "Something went wrong. Try again";

	error.message = msg;
	return Promise.reject(error);
});
