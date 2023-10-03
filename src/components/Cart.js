import { useDispatch, useSelector } from "react-redux";
import "./cssFiles/cart.css";
import { openCat } from "../rtk/slices/cartNav";
import {
  clearCart,
  decreseQuantity,
  increseQuantity,
  removeFeomcart,
} from "../rtk/slices/cartSlice";
import Ximg from "../assets/images/pngegg.png";

function Cart() {

  // Add a
  const cartNav = useSelector((state) => state.carNav);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);
  return (
    <div className={cartNav ? "open cartStyle position-fixed " : "close cartStyle"}>
      <div className="cartNav">
        <h5>Shopping Cart</h5>
        <h5 className="X" onClick={() => dispatch(openCat(false))}>
          X
        </h5>
      </div>
      {cart.length > 0 ? (
        cart.map((cart) => (
          <div
            key={cart.id}
            className="d-flex justify-content-between align-items-center pt-5 pb-3 border-bottom"
          >
            <div className="img-container">
              <img style={{ width: "80px" ,height:'80px'}} src={cart.image} alt={cart.name} />
              <div
                className="remove"
                onClick={() => {
                  dispatch(removeFeomcart(cart));
                  const local = JSON.parse(localStorage.getItem('cart'))
                  const finded =  local.filter((product)=> product.id !== cart.id);
                 finded && localStorage.setItem('cart', JSON.stringify(finded));
                }}
              >
                <img
                  style={{
                    width: "50px",
                    border: "1px solid #000",
                    borderRadius: "50%",
                  }}
                  src={Ximg}
                  alt="remove"
                />
              </div>
            </div>
            <div style={{width:'85%'}}>
              <p>
                {cart.name}
                <br />
                <span
                  style={{ color: "rgb(156 163 175)", padding: "10px 0 0 0" }}
                >
                  Unit price {cart.price}$
                </span>
              </p>

              <div className="d-flex justify-content-between">
                <div className="d-flex cartqun">
                  <button onClick={() => dispatch(decreseQuantity(cart))}>
                    -
                  </button>
                  <p>{cart.quantity}</p>
                  <button onClick={() => dispatch(increseQuantity(cart))}>
                    +
                  </button>
                </div>
                <h5 className="font-weight-bold">
                  {(cart.price * cart.quantity).toFixed(2)}$
                </h5>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <div className="d-flex  justify-content-center ">
            <img
              style={{ width: "250px" }}
              src="https://cartsy.redq.io/wp-content/themes/cartsy/assets/images/not-found-alt.svg"
              alt="a"
            />
          </div>
          <h5 className="text-center mt-5">No products in the cart.</h5>
        </div>
      )}
      <div className="d-flex mt-2 justify-content-between">
        {" "}
        <h5> Total Price : {totalPrice.toFixed(2)}</h5>{" "}
        <button className="btn btn-danger" onClick={()=>{
          dispatch(clearCart())
          localStorage.setItem('cart', JSON.stringify([]));
          
          }}>Clear Cart</button>{" "}
      </div>
    </div>
  );
}
export default Cart;
