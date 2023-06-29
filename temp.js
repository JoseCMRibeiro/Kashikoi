


addItem(item,n)
{  
  const storage = sessionStorage.getItem('products')
  this.products = JSON.parse(storage)
  item=this.products[item.productIndex]
  if(n<0)//remove items do cesto
  {
    const quantity = --this.products[item.productIndex].quantityInCart
    sessionStorage.setItem("clientCart", JSON.stringify(this.products));//actualiza storage      
    return (quantity)
  }

  if(item.quantityInCart < this.products[item.productIndex].quantity)
  {
    const quantity = ++this.products[item.productIndex].quantityInCart
    sessionStorage.setItem("clientCart", JSON.stringify(this.products));//actualiza storage      
    return (quantity)
  }
  else
  {
    const quantity = this.products[item.productIndex].quantity
    RenderModal("Só existem "+ this.products[item.productIndex].quantityInCart + " deste artigo em stock","")
    return (quantity)
  }
}

getTotal()
{
  var Total=0;
  for ( var i=0; i < this.products.length; i++)
    Total+=this.products[i].quantityInCart*this.products[i].price;

  return Total
}