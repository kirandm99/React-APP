import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA from "../mocks/mockResMenu.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should render the restuarant menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText(
    "NEW BK Fusion (Made with KitKat) (5)"
  );

  expect(accordianHeader).toBeInTheDocument();
});

it("Should add items to the cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianHeader = screen.getByText(
    "NEW BK Fusion (Made with KitKat) (5)"
  );

  fireEvent.click(accordianHeader);
  const foodItem = screen.getAllByTestId("foodItems").length;
  expect(foodItem).toBe(5);

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
  expect(screen.getByText("Cart - 1 Items")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart - 2 Items")).toBeInTheDocument();

  expect(screen.getAllByTestId("foodItems").length).toBe(7); // 5 items in accordian + 2 items added same testid

  const clearBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearBtn);
  expect(screen.getAllByTestId("foodItems").length).toBe(5); // After clearing cart, only accordian items should be visible
  expect(
    screen.getByText("Cart is Empty. Add Items to the Cart.")
  ).toBeInTheDocument();
});
