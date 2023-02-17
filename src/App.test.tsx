import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import HomePage from "./pages/home";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";

describe("log in page test", () => {
	test("renders login page correctly", () => {
		render(<LoginPage />);

		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");
		const logInButton = screen.getByText(/log in/i);
		const googleAuth = screen.getByText(/log in with google/i);

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(logInButton).toBeInTheDocument();
		expect(googleAuth).toBeInTheDocument();
	});

	test("login working", () => {
		render(<LoginPage />);

		const logInButton = screen.getByText(/log in/i);

		userEvent.click(logInButton);

		expect(logInButton).toHaveTextContent(/logging in/i);
	});
});

describe("sign up page test", () => {
	test("renders signup page correctly", () => {
		render(<SignupPage />);

		const emailInput = screen.getByLabelText("Email");
		const passwordInput = screen.getByLabelText("Password");
		const nameInput = screen.getByLabelText("Name");
		const signupButton = screen.getByText(/sign up/i);
		const googleAuth = screen.getByText(/sign up with google/i);

		expect(emailInput).toBeInTheDocument();
		expect(passwordInput).toBeInTheDocument();
		expect(nameInput).toBeInTheDocument();
		expect(signupButton).toBeInTheDocument();
		expect(googleAuth).toBeInTheDocument();
	});

	test("signup working", () => {
		render(<SignupPage />);

		const signupButton = screen.getByText(/sign up/i);

		userEvent.click(signupButton);

		expect(signupButton).toHaveTextContent(/signing up/i);
	});
});

describe("home page test", () => {
	test("renders home page correctly", () => {
		render(<HomePage />);

		const image = screen.getByRole("img");
		const title = screen.getAllByRole("heading");

		expect(image).toBeInTheDocument();
		expect(title).toBeInTheDocument();
	});
});
