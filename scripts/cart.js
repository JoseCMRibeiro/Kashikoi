import { ShoppingCart } from '../Components/ClassCart'
import { renderCartItem } from "../Components/renderCartItem";
const cartItems = document.getElementById("Cart")

const Cart = new ShoppingCart()

for(var i = 0; i < Cart.products.length;i++)
{
    
    if(Cart.products[i].quantityInCart>0)
    {
    const item= renderCartItem(Cart.products[i])
    cartItems.appendChild(item)
    }
}