import { fireEvent, screen } from "@testing-library/dom";

import { renderWithProviders } from "../../../utils/test/test.utils";
import ProductCard from "../product-card.component";

describe("product card tests", () => {
  test("It should add a product when the add to cart button is clicked", async () => {
    const product = {
      id: 1,
      name: "Test Product",
      price: 100,
      imageUrl: "https://test.com/test.jpg",
    };

    const { store } = renderWithProviders(<ProductCard product={product} />, {
      preloadedState: {
        cart: {
          cartItems: [],
        },
      },
    });

    const addToCartButton = screen.getByText(/add to cart/i);
    await fireEvent.click(addToCartButton);
    expect(store.getState().cart.cartItems.length).toBe(1);
  });
});
