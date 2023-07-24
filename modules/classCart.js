import { messageModal } from "../Components/renderMessageModal"

const final = document.getElementById("precoFinal")
const discount = document.getElementById("discount")
const precoTotal = document.getElementById("precototal")


export class ShoppingCart 
{ 
    constructor()//construtor 
    {  
      const storage = localStorage.getItem('products')
      this.products = JSON.parse(storage)
    }///////////////////////////////////////////////////////////////

    addItem(item,n)
    {  
      const storage = localStorage.getItem('products')
      this.products = JSON.parse(storage)
      item=this.products[item.productIndex]
      if(n<0)//removes items from cart
      {
        const quantity = --this.products[item.productIndex].quantityInCart
        localStorage.setItem("products", JSON.stringify(this.products));
        return (quantity)
      }

      if(item.quantityInCart < this.products[item.productIndex].quantity)
      {
        const quantity = ++this.products[item.productIndex].quantityInCart
        localStorage.setItem("products", JSON.stringify(this.products));  
        return (quantity)
      }
      else
      {
        const quantity = this.products[item.productIndex].quantity
        messageModal("Só existem "+ this.products[item.productIndex].quantityInCart + " deste artigo em stock","")
        return (quantity)
      }
    } //////////////////////////////////////////////////////////
    
    removeItem(item)
    {
      const storage = localStorage.getItem('products')
      this.products = JSON.parse(storage)
      this.products[item.productIndex].quantityInCart=0;
      localStorage.setItem("products", JSON.stringify(this.products));
    }//////////////////////////////////////////////////////////
    getTotal()
    {
      var total=0;
      for ( var i=0; i < this.products.length; i++)
      total+=this.products[i].quantityInCart*this.products[i].price;
      precoTotal.textContent = "€" + total.toFixed(2)
      const discountValue = parseInt(discount.textContent)
      const finalValue = total * (100 - discountValue)/100
      final.textContent =  "€" + finalValue.toFixed(2) 
      return total
    }////////////////////////////////////////////////////////////////////
}