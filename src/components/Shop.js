import "./cssFiles/shop.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProdects,
} from "../rtk/slices/prodects-slice";
import {
  addTocart,
  decreseQuantity,
  getFromlocaStore,
  increseQuantity,
} from "../rtk/slices/cartSlice";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import Filtermenu from "./Filtermenu";

function Shop() {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.prodects);
  const cart = useSelector((state) => state.cart);
  if (cart.length >= 1) {
  localStorage.setItem('cart', JSON.stringify(cart));
    
  }
  useEffect(() => {
    dispatch(fetchProdects());
    const cartLocalstorge = JSON.parse(localStorage.getItem("cart"));
      dispatch(getFromlocaStore(cartLocalstorge));
 
  }, []);
  return (
    <>
      <div className="shopPage">
      <Filtermenu   />
        
        <div className="products" >
          <div className="card-content">
            {product &&
              product.map((product) => {
                const item = cart.find((item) => item.id === product.id);
                const quantityInitem = item ? item.quantity : 0;
                return (
                  <div className="card" key={product.id}>
                    <Link to={`/Shop/${product.id}`}><img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    /></Link>
                    <div className="card-body">
                      <h5 className="card-title">
                        <span className="span-text"> ${product.price}</span>
                        <br />

                        {product.name}
                      </h5>
                      {quantityInitem === 0 ? (
                        <button
                          className="btn btn-primary"
                          onClick={() => {
                            dispatch(addTocart(product));
                            const Toast = Swal.mixin({
                              toast: true,
                              position: "top-end",
                              showConfirmButton: false,
                              timer: 3000,
                              timerProgressBar: true,
                              didOpen: (toast) => {
                                toast.addEventListener(
                                  "mouseenter",
                                  Swal.stopTimer
                                );
                                toast.addEventListener(
                                  "mouseleave",
                                  Swal.resumeTimer
                                );
                              },
                            });

                            Toast.fire({
                              icon: "success",
                              title: product.name,
                            });
                          }}
                        >
                          Add
                        </button>
                      ) : (
                        <div className="d-flex cartqun quntityShop">
                          <button
                            onClick={() => dispatch(decreseQuantity(item))}
                          >
                            -
                          </button>
                          <p>{item.quantity}</p>
                          <button
                            onClick={() => {
                              dispatch(increseQuantity(item));
                            }}
                          >
                            +
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Shop;
