import { call } from "typed-redux-saga/macro";
import { testSaga } from "redux-saga-test-plan";

import {
  fetchCategoriesAsync,
  onFetchCategories,
  categoriesSaga,
} from "../category.saga";

import { CATEGORY_ACTION_TYPES } from "../category.types";

import { TextEncoder } from 'util';

Object.assign(global, { TextDecoder });

describe("category saga tests", () => {
  test("categoriesSaga", () => {
    testSaga(categoriesSaga)
      .next()
      .all([call(onFetchCategories)])
      .next()
      .isDone();
  });

  test("onFetchCategories", () => {
    testSaga(onFetchCategories)
      .next()
      .takeLatest(
        CATEGORY_ACTION_TYPES.FETCH_CATEGORIES_START,
        fetchCategoriesAsync
      )
      .next()
      .isDone();
  });
});
