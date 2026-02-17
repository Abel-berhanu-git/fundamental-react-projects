import CartItem from './CartItem';
import { useGlobalContext } from './Context';

const CartContainer = () => {
  // console.log(useGlobalContext())
  const { cart, clearCart, totalCost,resetCart } = useGlobalContext();

  // const cartArray = Array.from(carts)
  const cartArray = [...cart];

  if (cartArray.length === 0) {
    return (
      <section className='cart'>
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className='empty-cart'>is currently empty</h4>
        </header>
          <button type="button" className='btn rest-btn' onClick={resetCart}>reset cart</button>
      </section>
    );
  }
  return (
    <section className='cart'>
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map(([key, value]) => {
          return <CartItem key={key} {...value} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className='cart-total'>
            total <span>${totalCost}</span>
          </h5>
        </div>
        <button className='btn btn-hipster' onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
