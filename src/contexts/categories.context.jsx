// import { createContext, useEffect, useReducer } from "react";

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// import { createAction } from "../utils/reducer/reducer.utils.js";

// export const CategoriesContext = createContext({
//   categoriesMap: {},
// });

// const CATEGORIES_ACTION_TYPES = {
//   SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
// };

// export const categoriesReducer = (state, action) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
//       return {
//         ...state,
//         categoriesMap: payload,
//       };

//     default:
//       throw new Error(`Unhandled type ${type} in categoriesReducer`);
//   }
// };

// const INITIAL_STATE = {
//   categoriesMap: new Map(),
// };

// export const CategoriesProvider = ({ children }) => {

//   const [{ categoriesMap }, dispatch] = useReducer(
//     categoriesReducer,
//     INITIAL_STATE
//   );

//   const setCategoriesMap = (categoryMap) => {
//     dispatch(createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP, categoryMap));
//   };

//   useEffect(() => {
//     const getCategoriesMap = async () => {
//       const categoryMap = await getCategoriesAndDocuments();
//       setCategoriesMap(categoryMap);
//     };

//     getCategoriesMap();
//   }, []);

//   const value = { categoriesMap };

//   return (
//     <CategoriesContext.Provider value={value}>
//       {children}
//     </CategoriesContext.Provider>
//   );
// };
