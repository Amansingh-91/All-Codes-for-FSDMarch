import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../Login";

test("username input should render", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl).toBeInTheDocument();
});
test("Password input should render", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  expect(passwordInputEl).toBeInTheDocument();
});
test("Login Button should render", () => {
  render(<Login />);
  const ButtonEl = screen.getByRole("button");
  expect(ButtonEl).toBeInTheDocument();
});

test("username input should Be Empty", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  expect(usernameInputEl.value).toBe("");
});
test("Password input should Be Empty", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  expect(passwordInputEl.value).toBe("");
});

test("Login Button should be Disabled if no value in username and password", () => {
  render(<Login />);
  const ButtonEl = screen.getByRole("button");
  expect(ButtonEl).toBeDisabled();
});

test("username input should change", () => {
  render(<Login />);
  const usernameInputEl = screen.getByPlaceholderText(/username/i);
  const testValue = "test";
  fireEvent.change(usernameInputEl, { target: { value: testValue } });
  expect(usernameInputEl.value).toBe(testValue);
});
test("Password input should change", () => {
  render(<Login />);
  const passwordInputEl = screen.getByPlaceholderText(/Password/i);
  const testValue = "password";
  fireEvent.change(passwordInputEl, { target: { value: testValue } });
  expect(passwordInputEl.value).toBe(testValue);
});
