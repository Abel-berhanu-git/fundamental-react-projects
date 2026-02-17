import {
  CLEAR_CART,
  REMOVE_ITEM,
  INCREASE_AMOUNT,
  DECREASE_AMOUNT,
  START_LOADING,
  STOP_LOADING,
  DISPLAY_ITEMS,
} from './action';

const reducer = (state, action) => {
  if (action.type === START_LOADING) {
    return { ...state, loading: true };
  }

  if (action.type === STOP_LOADING) {
    return { ...state, loading: false };
  }

  // display items
  if (action.type === DISPLAY_ITEMS) {
    const cartItems = action.payload.data;
    const cart = new Map(cartItems.map((item) => [item.id, item]));

    return { ...state, cart };
  }

  // clear cart

  if (action.type === CLEAR_CART) {
    return { ...state, cart: new Map() };
  }

  // remove item

  if (action.type === REMOVE_ITEM) {
    const newCart = new Map(state.cart);
    newCart.delete(action.payload.id);

    return { ...state, cart: newCart };
  }

  //increase amount

  if (action.type === INCREASE_AMOUNT) {
    const id = action.payload.id;

    const newCart = new Map(state.cart);
    const value = newCart.get(id);
    // console.log(value);
    // console.log(value.amount);

    newCart.set(id, { ...value, amount: value.amount + 1 });

    return { ...state, cart: newCart };
  }

  // decrease amount

  if (action.type === DECREASE_AMOUNT) {
    const id = action.payload.id;

    const newCart = new Map(state.cart);
    const value = newCart.get(id);

    if (value.amount === 1) {
      newCart.delete(id);
      // return state
    } else {
      newCart.set(id, { ...value, amount: value.amount - 1 });
    }

    return { ...state, cart: newCart };
  }

  throw new Error(`No Matching ${action.type} - action-type`);
};
export default reducer;
