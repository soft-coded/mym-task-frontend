import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import Router from "./components/Router";
import store from "./store";

export default function App() {
	return (
		<BrowserRouter>
			<ReduxProvider store={store}>
				<Router />
			</ReduxProvider>
		</BrowserRouter>
	);
}
