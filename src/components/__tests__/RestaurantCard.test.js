import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import { withLabelPromted } from "../RestaurantCard";
import "@testing-library/jest-dom";

it("Should render restaurant card component with props data", () => {
  render(<RestaurantCard resObj={MOCK_DATA} />);
  const name = screen.getByText("KFC");
  expect(name).toBeInTheDocument();
});

const PromotedRestaurantCard = withLabelPromted(RestaurantCard);

it("Should render restaurant card component with promoted label", () => {
  render(<PromotedRestaurantCard resObj={MOCK_DATA} />);
  const label = screen.getByText("Promoted");
  expect(label).toBeInTheDocument();
});
