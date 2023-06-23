const total=document.getElementById("precototal")
const final =document.getElementById("precoFinal")
const desconto =document.getElementById("desconto")
const cupon =document.getElementById("cupon")
const btSubmit =document.getElementById("cupon")
const btPagar =document.getElementById("cupon")


export class CheckOut
{
    constructor()//construtor 
    {             
      const armazemStorage = localStorage.getItem('products')
      if(armazemStorage)
        this.armazem = JSON.parse(armazemStorage)
      else
        this.armazem =[];//array de produtos na loja 
      const cartStorage = localStorage.getItem('cart')
      if(cartStorage)
        this.items=JSON.parse(cartStorage)
      else
        this.items=[]//array de produtos no carrinho
    }
}

addCoupon(codigo)
{
    return desconto
}

efetuarPagamento()
{
    
}