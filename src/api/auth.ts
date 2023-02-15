import { axiosClient } from ".";

export const loginApi = (email: string, password: string) =>
	axiosClient.post("/login", {
		email,
		password
	});

export const signupApi = (email: string, password: string, name: string) =>
	axiosClient.post("/signup", {
		email,
		password,
		name
	});
