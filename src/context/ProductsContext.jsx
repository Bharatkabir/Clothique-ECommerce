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
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchProducts = async () => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(API);
      const productsData = response.data;
      dispatch({ type: "My_API_DATA", payload: productsData });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useProductContext };
