import { ShoppingCart } from '../modules/classCart';
import { CheckOut } from  '../modules/ClassCheckOut'
import { renderCartItem } from '../Components/renderCartCard'; 
const btSubmit =document.getElementById("bt_cupon")
const btPagar =document.getElementById("bt_pagamento")
const cupon = document.getElementById("cupon")
const cartdiv = document.getElementById("Cart")
const cartItems = document.getElementById("Cart")

const Check = new CheckOut()
const Cart = new ShoppingCart()


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
        }
    }
}

Cart.getTotal()
checkCart()

export function checkCart()
{  
    if(cartdiv.innerHTML=="")
    {
      const img=document.createElement("img")
      img.src="/images/emptycart.jpg"
      img.style.maxWidth="400px"
      cartdiv.appendChild(img)
    }
}

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
//-------------------------------------------------------
