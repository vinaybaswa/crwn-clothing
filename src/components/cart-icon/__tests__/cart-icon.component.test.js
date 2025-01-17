import {screen} from "@testing-library/react";

import { renderWithProviders }  from "../../../utils/test/test.utils";
import CartIcon from "../cart-icon.component";

describe("cart icon tests", () => {
  test("Uses preloaded state to render", () => {
    const initialCartItems = [
      { id: 1, name: "Test 1", price: 100, quantity: 1 },
      { id: 2, name: "Test 2", price: 100, quantity: 2 },
    ];

    renderWithProviders(<CartIcon />, {
      preloadedState: {
        cart: {
          cartItems: initialCartItems,
        },
      },
    });

    const cartIconElement = screen.getByText("3"); // 1 + 2
    expect(cartIconElement).toBeInTheDocument();
  })
})