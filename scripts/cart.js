import { ShoppingCart } from '../modules/classCart';
import { CheckOut } from '../modules/classCheckOut';
import { renderCartItem } from '../Components/renderCartCard'; 
import { getStoredProducts } from '../modules/localeStorage';
const btSubmit =document.getElementById("bt_coupon")
const btMakePurchase =document.getElementById("bt_payment")
const coupon = document.getElementById("coupon")
const cartdiv = document.getElementById("Cart")
const cartItems = document.getElementById("Cart")


          ///////////////////
          /**/clientCart()///
          //////////////////

/////////////////////////////////////////////////////////////////////////////
async function clientCart()
{
    const products= await getStoredProducts();

    for(var i = 0; i < await products.length;i++)
      if(products[i].quantityInCart>0)
          {
            const item= renderCartItem(products,products[i])
            cartItems.appendChild(item)
          }
    
    const Cart = new ShoppingCart();
    Cart.products =  await products;    
    Cart.getTotal()
    checkCart()
}//-------------------------------------------------------------------------------

          //--------------------------------------------------------------
          //                                                             -
          //                            EVENTS                           -
          //                                                             -
          //--------------------------------------------------------------

coupon.addEventListener("keydown", function(event) 
{
if (event.key === "Enter") 
    {      
      const Check = new CheckOut()
      Check.validadeCoupon(coupon.value)
    }
});//----------------------------------------------------------

btSubmit.addEventListener('click',() => 
{   
   const Check = new CheckOut()
    Check.validadeCoupon(coupon.value)
});//-------------------------------------------------------------

btMakePurchase.addEventListener('click',() => 
{   
    const Check = new CheckOut()
    Check.makePurchase()
});//-------------------------------------------------------

export async function checkCart()
{  
    if(cartdiv.innerHTML=="")
    {
      const img=document.createElement("img")
      img.src="/images/emptycart.jpg"
      img.style.maxWidth="400px"
      cartdiv.appendChild(img)
    }
}