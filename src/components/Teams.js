import { useDispatch, useSelector } from "react-redux";
import teamImge from "../assets/images/terms.jpg";
import { useEffect } from "react";
import { fetchProdects } from "../rtk/slices/prodects-slice";
import { getFromlocaStore } from "../rtk/slices/cartSlice";

function Teams() {
    const dispatch = useDispatch()
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
      <div className=" position-relative mb-5 bg-secondary   ">
        <img src={teamImge} className="img-fluid " alt="FaqImage" />
        <h2 className=" text-black position-absolute top-50 start-50 translate-middle ">
          Terms
        </h2>
      </div>
        <div className="container">
        <div className="row">
        <div id="list-example" className="list-group col-md-3 mb-4 ">
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-1"
          >
          Purpose
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-2"
          >
          General Disclaimer
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-3"
          >
       Protecting Your Personal Information
          </a>
          <a
            className="list-group-item list-group-item-action"
            href="#list-item-4"
          >
         Trade Mark & Business Names
          </a>
        </div>
        <div
          data-bs-spy="scroll"
          data-bs-target="#list-example"
          data-bs-offset="0"
          className="scrollspy-example col-md-9 col-sm-12"
          tabIndex={0}
        >
          <h4 id="list-item-1">Purpose </h4>
          <p>
            {" "}
            Pulvinar proin gravida hendrerit lectus a. Placerat vestibulum
            lectus mauris ultrices eros in. Faucibus interdum posuere lorem
            ipsum. Malesuada proin libero nunc consequat interdum varius.
            Ullamcorper morbi tincidunt ornare massa. Magna etiam tempor orci eu
            lobortis elementum. Quam viverra orci sagittis eu volutpat odio.
            Hendrerit gravida rutrum quisque non tellus. Euismod lacinia at quis
            risus. Cursus in hac habitasse platea. Id porta nibh venenatis cras
            sed felis eget. Turpis cursus in hac habitasse. Velit scelerisque in
            dictum non consectetur a. Porta nibh venenatis cras sed felis.
            Tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada proin
            libero. Est velit egestas dui id ornare arcu. Venenatis a
            condimentum vitae sapien pellentesque habitant. Lectus sit amet est
            placerat. Vitae proin sagittis nisl rhoncus mattis rhoncus urna
            neque.
          </p>
          <h4 id="list-item-2">General Disclaimer</h4>
          <p>
            Nunc aliquet bibendum enim facilisis gravida neque convallis a cras.
            Morbi non arcu risus quis varius. Odio morbi quis commodo odio.
            Consectetur a erat nam at lectus urna duis convallis convallis. Nibh
            venenatis cras sed felis eget velit aliquet sagittis id. Egestas
            congue quisque egestas diam in arcu. Arcu odio ut sem nulla pharetra
            diam sit amet. Cras pulvinar mattis nunc sed blandit libero
            volutpat. Dui sapien eget mi proin. Donec massa sapien faucibus et
            molestie. Dolor sit amet consectetur adipiscing elit ut aliquam
            purus sit. Ultricies mi eget mauris pharetra. Augue lacus viverra
            vitae congue eu consequat ac.
          </p>
          <h4 id="list-item-3">Protecting Your Personal Information</h4>
          <p>
            Interdum varius sit amet mattis vulputate enim nulla. Vulputate eu
            scelerisque felis imperdiet. Viverra tellus in hac habitasse platea
            dictumst vestibulum rhoncus. Amet nisl purus in mollis nunc sed id
            semper. Bibendum arcu vitae elementum curabitur vitae nunc.
            Tristique senectus et netus et malesuada fames ac. Urna et pharetra
            pharetra massa massa. Malesuada pellentesque elit eget gravida cum
            sociis natoque penatibus et. Enim ut sem viverra aliquet eget sit.
            Tristique senectus et netus et malesuada fames ac turpis. Porta nibh
            venenatis cras sed.
          </p>
          <h4 id="list-item-4">Trade Mark & Business Names</h4>
          <p>
            Nullam non nisi est sit amet. Eget nulla facilisi etiam dignissim
            diam quis. Phasellus egestas tellus rutrum tellus pellentesque eu
            tincidunt tortor aliquam. Turpis tincidunt id aliquet risus feugiat.
            Vitae turpis massa sed elementum tempus egestas sed sed. Viverra
            suspendisse potenti nullam ac tortor vitae purus faucibus. Diam
            donec adipiscing tristique risus nec feugiat. Ac orci phasellus
            egestas tellus rutrum tellus pellentesque. Sapien faucibus et
            molestie ac feugiat sed lectus vestibulum mattis. In massa tempor
            nec feugiat nisl. Et sollicitudin ac orci phasellus egestas tellus.
            Tempor nec feugiat nisl pretium fusce. Vulputate sapien nec sagittis
            aliquam malesuada bibendum. At lectus urna duis convallis convallis
            tellus id interdum. Congue mauris rhoncus aenean vel elit
            scelerisque mauris pellentesque. Enim tortor at auctor urna nunc. Ac
            turpis egestas maecenas pharetra convallis posuere morbi leo urna.
            Lacus vestibulum sed arcu non odio euismod lacinia. Viverra tellus
            in hac habitasse platea dictumst vestibulum rhoncus. Vel orci porta
            non pulvinar neque laoreet suspendisse. Quis risus sed vulputate
            odio ut. Your Visit To Our Website
          </p>
        </div>
      </div>
        </div>
    </>
  );
}
export default Teams;
