import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TransactionCreateStepTwo from "./TransactionCreateStepTwo";

test("on initial component render, pay button should be disabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1001" }} receiver={{ id: "1002" }} />);
});

test("if amount and note entered, pay button should be enabled", async () => {
  render(<TransactionCreateStepTwo sender={{ id: "1001" }} receiver={{ id: "1002" }} />);

  expect(await screen.findByRole("button", { name: /pay/i })).toBeDisabled();

  userEvent.type(screen.getByPlaceholderText(/amount/i), "50");
  userEvent.type(screen.getByPlaceholderText(/add a note/i), "breakfast");

  expect(await screen.findByRole("button", { name: /pay/i })).toBeEnabled();
});
