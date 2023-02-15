import { createSlice } from "@reduxjs/toolkit";

type InitState = {
	status: "fetching" | "loading" | "idle";
	isAuthed: boolean;
	email: string;
	token: string;
};

const initialState: InitState = {
	status: "fetching",
	isAuthed: false,
	email: "",
	token: ""
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {}
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
