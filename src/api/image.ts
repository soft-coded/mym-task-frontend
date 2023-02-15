import { axiosClient } from ".";

export const getImage = (headers: any) =>
	axiosClient.get("/get-image", {
		headers
	});
