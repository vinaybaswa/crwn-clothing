import { screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";

describe("navigation tests", () => {
  test("It should render a Sign In and not a Sign Out link when there is no currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: null,
        },
      },
    });

    const signOutLink = screen.queryByText(/Sign Out/i);
    expect(signOutLink).toBeNull();

    const signInLink = screen.getByText(/Sign In/i);
    expect(signInLink).toBeInTheDocument();
  });

  test("It should render a Sign Out and not Sign In link when there is a currentUser", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signInLink = screen.queryByText(/Sign In/i);
    expect(signInLink).toBeNull();

    const signOutLink = screen.getByText(/Sign Out/i);
    expect(signOutLink).toBeInTheDocument();
  });

  test("It should render a CartDropdown component if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: true,
          cartItems: [],
        },
      },
    });

    const cartDropdownElement = screen.getByText(/your cart is empty/i);
    expect(cartDropdownElement).toBeInTheDocument();
  });

  test("It should render a CartDropdown component if isCartOpen is true", () => {
    renderWithProviders(<Navigation />, {
      preloadedState: {
        cart: {
          isCartOpen: false,
          cartItems: [],
        },
      },
    });

    const cartDropdownElement = screen.queryByText(/your cart is empty/i);
    expect(cartDropdownElement).toBeNull();
  });
});
