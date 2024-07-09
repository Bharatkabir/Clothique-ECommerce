import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductsReducer";

const AppContext = createContext("");

const API = `https://api.pujakaitem.com/api/products`;

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const productsData = response.data;
      dispatch({ type: "My_API_DATA", payload: productsData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error("Error fetching products:", error);
    }
  };
  const getSingleProduct = async (API) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const res = await axios.get(API);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };
  useEffect(() => {
    fetchProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
