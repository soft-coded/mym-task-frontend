import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi } from "../api/auth";

export const loginThunk = createAsyncThunk(
	"auth/login",
	async ({ email, password }: { email: string; password: string }) => {
		const response = await loginApi(email, password);
		return { token: response.data.token, email };
	}
);

type InitState = {
	status: "fetching" | "loading" | "idle";
	isAuthed: boolean;
	email: string;
	token: string;
	error: string;
};

const initialState: InitState = {
	status: "fetching",
	isAuthed: false,
	email: "",
	token: "",
	error: ""
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			state.isAuthed = true;
			state.email = action.payload.email!;
			state.token = action.payload.token;
			state.status = "idle";
			state.error = "";
		});

		builder.addCase(loginThunk.rejected, (state, action) => {
			state.isAuthed = false;
			state.email = "";
			state.token = "";
			state.status = "idle";
			state.error = action.error.message!;
		});

		builder.addCase(loginThunk.pending, (state, action) => {
			state.isAuthed = false;
			state.email = "";
			state.token = "";
			state.status = "loading";
			state.error = "";
		});
	}
});

export default authSlice.reducer;
export const authActions = authSlice.actions;
