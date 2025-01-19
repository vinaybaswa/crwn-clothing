import {
  selectCategories,
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../category.selector";

const mosckState = {
  categories: {
    isLoading: false,
    categories: [
      {
        title: "mens",
        items: [
          {
            id: 1,
            name: "Product 1",
            price: 100,
            imageUrl: "https://test.com/test.jpg",
          },
        ],
      },
      {
        title: "womens",
        items: [
          {
            id: 2,
            name: "Product 2",
            price: 100,
            imageUrl: "https://test.com/test.jpg",
          },
        ],
      },
    ],
  },
};

describe("category selector tests", () => {
  test("selectCategories should return the categoriesData", () => {
    const categoriesSlice = selectCategories(mosckState);
    expect(categoriesSlice).toEqual(mosckState.categories.categories);
  });

  test("selectCategoriesIsLoading should return the isLoading state", () => {
    const isLoading = selectCategoriesIsLoading(mosckState);
    expect(isLoading).toEqual(mosckState.categories.isLoading);
  });

  test("selectCategoriesMap should return the categories in a map", () => {
    const categoriesMap = selectCategoriesMap(mosckState);
    expect(categoriesMap).toEqual({
      mens: [
        {
          id: 1,
          name: "Product 1",
          price: 100,
          imageUrl: "https://test.com/test.jpg",
        },
      ],
      womens: [
        {
          id: 2,
          name: "Product 2",
          price: 100,
          imageUrl: "https://test.com/test.jpg",
        },
      ],
    });
  });
});
