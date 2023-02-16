import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { loginApi, signupApi } from "../api/auth";

export const loginThunk = createAsyncThunk(
	"auth/login",
	async ({ email, password }: { email: string; password: string }) => {
		const response = await loginApi(email, password);
		return { token: response.data.token, email };
	}
);

export const signupThunk = createAsyncThunk(
	"auth/signup",
	async ({
		email,
		password,
		name
	}: {
		email: string;
		password: string;
		name: string;
	}) => {
		const response = await signupApi(email, password, name);
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

const USER_DATA_KEY = "userData";

function saveToLocalStorage(userData: { email: string; token: string }) {
	const userDataString = JSON.stringify(userData);
	localStorage.setItem(USER_DATA_KEY, userDataString);
}

function removeFromLocalStorage() {
	localStorage.removeItem(USER_DATA_KEY);
}

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		loginOnLoad(state) {
			const userDataString = localStorage.getItem(USER_DATA_KEY);
			if (userDataString) {
				const userData = JSON.parse(userDataString);
				state.email = userData.email;
				state.token = userData.token;
				state.isAuthed = true;
				state.error = "";
			}
			state.status = "idle";
		},

		// for oauth
		login(state, action) {
			state.email = action.payload.email;
			state.token = action.payload.token;
			state.isAuthed = true;
			state.status = "idle";
			state.error = "";
		},

		logout(state) {
			state.isAuthed = false;
			state.email = "";
			state.token = "";
			state.error = "";
			state.status = "idle";
			removeFromLocalStorage();
		}
	},
	extraReducers: builder => {
		builder.addCase(loginThunk.fulfilled, (state, action) => {
			state.isAuthed = true;
			state.email = action.payload.email!;
			state.token = action.payload.token;
			state.status = "idle";
			state.error = "";
			saveToLocalStorage({
				email: action.payload.email!,
				token: action.payload.token
			});
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

		builder.addCase(signupThunk.fulfilled, (state, action) => {
			state.isAuthed = true;
			state.email = action.payload.email!;
			state.token = action.payload.token;
			state.status = "idle";
			state.error = "";
			saveToLocalStorage({
				email: action.payload.email!,
				token: action.payload.token
			});
		});

		builder.addCase(signupThunk.rejected, (state, action) => {
			state.isAuthed = false;
			state.email = "";
			state.token = "";
			state.status = "idle";
			state.error = action.error.message!;
		});

		builder.addCase(signupThunk.pending, (state, action) => {
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
