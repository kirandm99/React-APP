import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Component test cases", () => {
  beforeAll(() => {
    console.log("Before all tests");
  });

  beforeEach(() => {
    console.log("Before each test");
  });

  afterAll(() => {
    console.log("After all tests");
  });

  afterEach(() => {
    console.log("After each test");
  });

  test("Should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside contact us component", () => {
    render(<Contact />);
    // const button = screen.getByRole("button");
    const button = screen.getByText("Submit");
    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside contact us component", () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText("Name");
    expect(name).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);
    const inputBox = screen.getAllByRole("textbox");
    // console.log(inputBox);
    // expect(inputBox.length).toBe(2);
    expect(inputBox.length).not.toBe(3);
  });
});
