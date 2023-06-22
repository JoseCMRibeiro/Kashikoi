const Cart = new ShoppingCart();

class ShoppingCart 
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

    addItem(id,n)//adicionar n produtos ao carrinho pelo id
    { }

   }

   Cart.addItem(1,1);
   var Index=0;
   for (var i = 0; i < Cart.items.lenght;i++)