import { ShoppingCart } from '../Components/classCart';
import { renderCartItem } from '../Components/renderCartItem'; 
import { CheckOut } from  '../Components/ClassCheckOut'
const btSubmit =document.getElementById("bt_submeter_cupon")
const btPagar =document.getElementById("bt_efetuar_pagamento")


const Check = new CheckOut()
const Cart = new ShoppingCart()


const cartItems = document.getElementById("Cart")//ponto de entrada

for(var i = 0; i < Cart.products.length;i++)
{    
    if(Cart.products[i].quantityInCart>0)
    {
        const item= renderCartItem(Cart.products[i])
        cartItems.appendChild(item)
        if(Cart.products[i].quantityInCart>1)
        {
            const subTotalValue =Cart.products[i].quantityInCart * Cart.products[i].price
            const subTotal=document.getElementById("SubTotal" + Cart.products[i].id)
            subTotal.textContent="SubTotal: €"+ subTotalValue.toFixed(2);            
        }
    }
}
Cart.getTotal()
/////////////////////////////////////////////////////////////////
//
//                              EVENTS
//
/////////////////////////////////////////////////////////////////

cupon.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") 
  {  
    Check.addCoupon(cupon.value)
  }
});
//----------------------------------------------------------
btSubmit.addEventListener('click',() => 
{   
  Check.addCoupon(cupon.value)
}); 
//-------------------------------------------------------------
btPagar.addEventListener('click',() => 
{   
  Check.efetuarPagamento()
}); 
//-------------------------------------------------------
