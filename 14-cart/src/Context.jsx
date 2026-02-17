import { createContext, useContext, useEffect, useReducer } from 'react';
// import cartItems from './data';
import reducer from './reducer';
import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  START_LOADING,
  STOP_LOADING,
  DISPLAY_ITEMS,
} from './action';
import { getTotals } from './utils';

const url = 'https://www.course-api.com/react-useReducer-cart-project';

// const cart = new Map(cartItems.map((item) => [item.id, item]));

const initialState = {
  loading: false,
  // cart: new Map(cartItems.map((item) => [item.id, item])),
  cart: new Map(),
};

const GlobalContext = createContext(initialState);
// default/fallback value if a component uses context outside the provider.

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { totalCost, totalAmount } = getTotals(state.cart);

  console.log(state);

  const fetchData = async () => {
    dispatch({ type: START_LOADING });
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`NOT FOUND ${response.status}`);
      }
      const data = await response.json();
      dispatch({ type: DISPLAY_ITEMS, payload: { data } });
    } catch (error) {
      console.log(error.message);
    } finally {
      dispatch({ type: STOP_LOADING });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };
  const remove = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const increaseAmount = (id) => {
    dispatch({ type: INCREASE_AMOUNT, payload: { id } });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: DECREASE_AMOUNT, payload: { id } });
  };

  const resetCart = () => {
    fetchData();
  };

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increaseAmount,
        decreaseAmount,
        totalCost,
        totalAmount,
        resetCart,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default AppProvider;

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};
