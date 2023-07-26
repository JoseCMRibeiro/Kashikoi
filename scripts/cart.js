import { ShoppingCart } from '../modules/classCart';
import { CheckOut } from '../modules/classCheckOut';
import { renderCartItem } from '../Components/renderCartCard'; 
const btSubmit =document.getElementById("bt_cupon")
const btMakePurchase =document.getElementById("bt_payment")
const cupon = document.getElementById("cupon")
const cartdiv = document.getElementById("Cart")
const cartItems = document.getElementById("Cart")

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
        }
    }
}//-----------------------------------------------------------------------------

Cart.getTotal()
checkCart()

//--------------------------------------------------------------------------------

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

//--------------------------------------------------------------
//                                                             -
//                            EVENTS                           -
//                                                             -
//--------------------------------------------------------------

cupon.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") 
  {      
    const Check = new CheckOut()
    Check.addCoupon(cupon.value)
  }
});
//----------------------------------------------------------

btSubmit.addEventListener('click',() => 
{   
  const Check = new CheckOut()
  Check.addCoupon(cupon.value)
}); 
//-------------------------------------------------------------

btMakePurchase.addEventListener('click',() => 
{   
  const Check = new CheckOut()
  Check.makePurchase()
}); 
//-------------------------------------------------------