import { screen, fireEvent } from "@testing-library/react";
// import * as reactRedux from "react-redux";

import { renderWithProviders } from "../../../utils/test/test.utils";
import Navigation from "../navigation.component";
import { signOutStart } from "../../../store/user/user.action";

// workaround for useDispatch mock
const mockDispatch = jest.fn();

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

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

  test("It shold dispatch signOutStart when the sign out link is clicked", async () => {
    // const mockDispatch = jest.fn();
    // jest.spyOn(reactRedux, "useDispatch").mockReturnValue(mockDispatch);

    renderWithProviders(<Navigation />, {
      preloadedState: {
        user: {
          currentUser: {},
        },
      },
    });

    const signOutLink = screen.getByText(/Sign Out/i);
    expect(signOutLink).toBeInTheDocument();

    await fireEvent.click(signOutLink);
    expect(mockDispatch).toHaveBeenCalled();

    const signOutAction = signOutStart();
    expect(mockDispatch).toHaveBeenCalledWith(signOutAction);

    mockDispatch.mockClear();
  });
});
