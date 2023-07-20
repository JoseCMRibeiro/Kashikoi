import { ShoppingCart } from '../Components/classCart';
import { CheckOut } from  '../Components/ClassCheckOut'
import { renderCartItem } from '../Components/renderCartCard'; 
const btVisa = document.getElementById("bt_visa")
const btPay = document.getElementById("bt_pay_pal")
const btMaster = document.getElementById("bt_master_card")
const btSubmit =document.getElementById("bt_submeter_cupon")
const btPagar =document.getElementById("bt_efetuar_pagamento")
const btAmerican = document.getElementById("bt_American_express")


const Check = new CheckOut()
const Cart = new ShoppingCart()


const cartItems = document.getElementById("Cart")

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
//                                                             //
//                            EVENTS                           //
//                                                             //
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
bt
//-------------------------------------------------------
