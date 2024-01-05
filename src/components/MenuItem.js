import React,{useState} from "react";
import "../styles/MenuItem.css";
function MenuItem({image,name,price}){
 // const {menuItem}=MenuList;
   // const handleAddProduct=(product)=>{
     // const ProductExist=cartItems.find((item)=>item.id === product.id);
      //if(ProductExist){
       // setCartItems(
        //  cartItems.map((item)=>
          //item.id=== product.id ? {...ProductExist,quantity: ProductExist.quantity +1}:item
        //)
  //      );
  //    } else{
  //      setCartItems([...cartItems,{...product,quantity:1}]);
  //    }
   // };
  return (
    <div className="menuItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> Rs{price} &nbsp;&nbsp;&nbsp;&nbsp;
      <button className="product-add-button" >Add to Cart</button></p>
    </div>
  );
};
export default MenuItem;

