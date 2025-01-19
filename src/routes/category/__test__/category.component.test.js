import { screen } from "@testing-library/react";

import Category from "../category.component";
import { renderWithProviders } from "../../../utils/test/test.utils";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({
    category: "mens",
  }),
}));

describe("category tests", () => {
  test("It should render a spinner if isLoading is true", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: true,
          categories: [],
        },
      },
    });

    const spinnerElement = screen.getByTestId("spinner");
    expect(spinnerElement).toBeInTheDocument(); 
  });

  test("It should render products if isLoading is false", () => {
    renderWithProviders(<Category />, {
      preloadedState: {
        categories: {
          isLoading: false,
          categories: [{
            title: "Mens",
            items: [
              {
                id: 1,
                name: "Product 1",
                price: 100,
                imageUrl: "https://test.com/test.jpg",
              },
              {
                id: 2,
                name: "Product 2",
                price: 100,
                imageUrl: "https://test.com/test.jpg",
              },
            ]
          }],
        },
      },
    });

    const spinnerElement = screen.queryByTestId("spinner");
    expect(spinnerElement).toBeNull();

    const categoryTitle = screen.getByText(/Mens/i);
    expect(categoryTitle).toBeInTheDocument();

    const product1 = screen.getByText(/Product 1/i);
    expect(product1).toBeInTheDocument();
  });
});