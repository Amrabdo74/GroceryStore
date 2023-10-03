import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { useState } from "react";
import "./cssFiles/shop.css";
import img1 from "../assets/images/grocery-cart.png";
import img2 from "../assets/images/Fresh-Vegetables.svg";
import { useDispatch } from "react-redux";
import {
  fetchProdects,
  filtersubcategorys,
  getspecifiProdect,
} from "../rtk/slices/prodects-slice";

function Filtermenu() {
  const dispatch = useDispatch();
  const [toggled, setToggled] = useState(false);

  return (
    <>
      <div className="filter">
        <button className="button-toogle " onClick={() => setToggled(!toggled)}>
          {toggled ? "Hide Filter-Items <" : "Show Filter-Items  >"}
        </button>

        <Sidebar style={{ left: toggled ? "0" : "-300px" }}>
          <Menu>
            <MenuItem
              className="firstMenu"
              onClick={() => dispatch(fetchProdects())}
              icon={<img src={img1} alt="all" width="30px" />}
            >
              All categorys
            </MenuItem>
            <SubMenu
              className="bg-white my-1 mx-1"
              label="fresh vegetables"
              icon={<img src={img2} alt="all" width="30px" />}
              onClick={() => {
                dispatch(getspecifiProdect("fresh vegetables"));
              }}
            >
              <MenuItem
                onClick={() =>
                  dispatch(filtersubcategorys("flower vegetables"))
                }
              >
                {" "}
                Flower Vegetables
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("leaf vegetables"))}
              >
                Leaf Vegetables
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("stem vegetables"))}
              >
                {" "}
                Stem Vegetables
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("root vegetables"))}
              >
                {" "}
                Root Vegetables
              </MenuItem>

              <MenuItem
                onClick={() => dispatch(filtersubcategorys("seed vegetables"))}
              >
                {" "}
                Seed Vegetables
              </MenuItem>
            </SubMenu>
            <SubMenu
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Fresh-Fruites.svg"
                  width="24"
                  alt=""
                />
              }
              label="fresh fruits"
              onClick={() => dispatch(getspecifiProdect("fresh fruits"))}
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("rerries"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Berries
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("citrus fruite"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Citrus Fruits
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("drupes"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Drupes
                </p>{" "}
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("tropical fruits"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  {" "}
                  Tropical Fruits
                </p>{" "}
              </MenuItem>
            </SubMenu>{" "}
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("dairy & eggs"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  className=""
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/Dairy-eggs.svg"
                  width="25"
                  alt=""
                />
              }
              label="dairy & Eggs"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("butter"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Butter
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("eggs"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Eggs
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("milk"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Milk
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("yougurt"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Yougurt
                </p>{" "}
              </MenuItem>
            </SubMenu>{" "}
            <MenuItem
              onClick={() => dispatch(getspecifiProdect("breakfast"))}
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Bakery.svg"
                  alt="all"
                  width="30px"
                />
              }
            >
              Breakfast
            </MenuItem>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("frozen"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Frozen.svg"
                  width="22"
                  alt=""
                />
              }
              label="frozen"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("cutted fish"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Cutted Fish
                </p>{" "}
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("cutted meat"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Cutted Meat
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("icecream"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Ice cream
                </p>
              </MenuItem>
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("packet meat"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Packet Meal
                </p>
              </MenuItem>
            </SubMenu>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("organic"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Organic.svg"
                  width="24"
                  alt=""
                />
              }
              label="organic"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("honey"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Honey
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("oil"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Oil
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("syrups"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Syrup
                </p>
              </MenuItem>
            </SubMenu>
            <MenuItem
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/canned-food.svg"
                  width="25"
                  alt=""
                />
              }
              onClick={() => dispatch(getspecifiProdect("canned food"))}
            >
              {" "}
              <p className=" text-left w-[50%] ">Canned Food</p>
            </MenuItem>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("coffe & snacks"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124731/coffee-cup.svg"
                  width="28"
                  alt=""
                />
              }
              label="coffe & snacks"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("chocolate"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Chocolate
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("coffee"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  coffee
                </p>
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("chips"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  crisp
                </p>
              </MenuItem>
            </SubMenu>
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("Beverage & Juice"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124730/Beverage-Juice.svg"
                  width="18"
                  alt="beverage & juice"
                />
              }
              label="beverage & juice"
            >
              <MenuItem
                onClick={() => dispatch(filtersubcategorys("fizzy drinks"))}
              >
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Fizzy Drinks
                </p>{" "}
              </MenuItem>
              <MenuItem onClick={() => dispatch(filtersubcategorys("juices"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Juice
                </p>
              </MenuItem>
            </SubMenu>
            {/*  */}
            <SubMenu
              onClick={() => dispatch(getspecifiProdect("sauces & jams"))}
              className="bg-white my-1 mx-1"
              icon={
                <img
                  src="https://d1rn6kzjmi8824.cloudfront.net/wp-content/uploads/2020/07/11124732/Sauces-Jams.svg"
                  width="24"
                  alt=""
                />
              }
              label="sauces & jams"
            >
              <MenuItem onClick={() => dispatch(filtersubcategorys("jams"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Jams
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("Noodles"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Noodles
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("pasta"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Pasta
                </p>
              </MenuItem>

              <MenuItem onClick={() => dispatch(filtersubcategorys("Sauces"))}>
                <p className=" text-sm font-normal  text-left pl-6 text-[#8f8c8c] w-[50%]">
                  Sauces
                </p>
              </MenuItem>
            </SubMenu>
          </Menu>
        </Sidebar>
      </div>
    </>
  );
}
export default Filtermenu;
