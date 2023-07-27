import { messageModal } from "../Components/renderMessageModal"
import {STORAGE_PRODUCTS} from '../kashikoi.env'
import { setStoredProductes } from "./localeStorage"

const final = document.getElementById("total")
const discount = document.getElementById("discount")
const totalPrice = document.getElementById("totalPrice")


export  class ShoppingCart 
{ 
    addItem(item,n)
    {  
      const storage = localStorage.getItem(STORAGE_PRODUCTS)
      this.products = JSON.parse(storage)
      if(n<0)//removes items from cart
      {
        const quantity = --this.products[item.productIndex].quantityInCart
        setStoredProductes(JSON.stringify(this.products)) 
        return (quantity)
      }

      if(this.products[item.productIndex].quantityInCart < this.products[item.productIndex].quantity)
      {
        const quantity = ++this.products[item.productIndex].quantityInCart
        setStoredProductes(JSON.stringify(this.products)) 
        return (quantity)
      }
      else
      {
        const quantity = this.products[item.productIndex].quantity
        messageModal("OUT OF STOCK")
        return (quantity)
      }
    }//-----------------------------------------------------------------------
    
    removeItem(item)
    {
      this.products[item.productIndex].quantityInCart=0;
      setStoredProductes(JSON.stringify(this.products)) 
    }//-----------------------------------------------------------------------

    getTotal()
    {
      var total=0;
      for ( var i=0; i < this.products.length; i++)
      total+=this.products[i].quantityInCart*this.products[i].price;
      totalPrice.textContent = "€" + total.toFixed(2)
      const discountValue = parseInt(discount.textContent)
      const finalValue = total * (100 - discountValue)/100
      final.textContent =  "€" + finalValue.toFixed(2) 
      return total
    }//-----------------------------------------------------------------------
}