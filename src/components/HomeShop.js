/* eslint-disable jsx-a11y/img-redundant-alt */
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import "./cssFiles/Homeslid.css";
import {
  addTocart,
  decreseQuantity,
  increseQuantity,
} from "../rtk/slices/cartSlice";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";

function HomeShop() {
  const dispatch = useDispatch();
  const Navigation = useNavigate();
  useEffect(() => {
    dispatch(fetchProdects());
  }, []);
  const products = useSelector((state) => state.prodects);
  const cart = useSelector((state) => state.cart);
  return (
    <>
      <h1 className="text-center mt-5">Our Shop</h1>
      <div className="container">
        <div className="row justify-content-between mt-5">
          {products &&
            products.slice(1, 4).map((product) => {
              const item = cart.find((item) => item.id === product.id);
              const quantityInitem = item ? item.quantity : 0;
              return (
                <div
                  className="card homeCard col-md-2 col-lg-2"
                  key={product.id}
                  style={{ width: "18rem" }}
                >
                  <Link to={`/shop/${product.id}`}>
                    {" "}
                    <img
                      className="card-img-top"
                      src={product.image}
                      alt="Card image cap"
                    />
                  </Link>
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text"></p>
                    {quantityInitem === 0 ? (
                      <button
                        className="btn btn-primary addButton"
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
                        <button onClick={() => dispatch(decreseQuantity(item))}>
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
                    )}{" "}
                  </div>
                </div>
              );
            })}
        </div>
        <button
          onClick={() => {Navigation("/shop")
          window.scrollTo(0, 0); 
        }}
          className="btn btn-primary Move"
        >
          Move To Shop
        </button>
      </div>
    </>
  );
}
export default HomeShop;
