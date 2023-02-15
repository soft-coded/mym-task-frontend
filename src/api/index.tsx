import axios from "axios";

const baseURL = "http://localhost:5000";

export const axiosClient = axios.create({
	baseURL,
	headers: {
		"Content-Type": "application/json"
	},
	timeout: 20000 // 20s
});
