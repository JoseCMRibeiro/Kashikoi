import { renderLiItem } from '/Components/cartListItem'
const cesto= document.getElementById('cesto')

export class ShoppingCart 
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
    {                
      const storage = localStorage.getItem('cart')       
      if(storage)
        this.items=JSON.parse(storage)
      else
        this.items=[]

      var armazemIndex
      let novo=true;
      for(var i=0; i < this.armazem.length;i++)//procura pelo item adicionado ao cesto na lista de produtos 
      {
        if(this.armazem[i].id==id)
          {
            armazemIndex=i;//index do produto no armazem
            i=this.armazem.length;
          }
      }
      for(var i = 0; i < this.items.length;i++)//verifica se já existe o item no cesto e aumenta a quantidade caso já haja
      {
        if(this.armazem[armazemIndex].id==this.items[i].id)//já existe no cesto
        {
          this.items[i].quantity+=n; 
          if (this.items[i].quantity <1)
            this.removeItem(id)
          i=this.items.length;
          novo=false;
        }
      }
      if(novo)//se não existir no cesto adiciona ao cesto
      {       
        this.items.push(this.armazem[armazemIndex]);
        const lastItem=this.items[this.items.length-1]
        lastItem.quantity=1;        
        const liItem=renderLiItem(this);
        cesto.appendChild(liItem);
      }

      localStorage.setItem("cart", JSON.stringify(this.items));//actualiza storage      
    }
  
    removeItem(ID)//remover item com id=ID do carrinho 
    {
      let index=0;      
      for(let i= 0; i < this.items.length;i++)
      {
        if(ID==this.items[i].ID)
        {
          index=i;
          i=this.items.length
        }
      }

      this.items.splice(index, 1);

      const li=document.getElementById(ID)
      cesto.removeChild(li)
      localStorage.setItem("cart", JSON.stringify(this.items));//actualiza storage      
      
    }
  
    getTotal()// 
    {
      return this.items.reduce((total, item) => total + item.price*item.quantity, 0);
    }
  
    getItems() //listagem de produtos no carrinho
    {      
      const cartStorage = localStorage.getItem('cart')
      if(cartStorage)
        this.items=JSON.parse(cartStorage)
      else
        this.items=[]//array de produtos no carrinho
     
      return this.items;
    }
  
    clearCart() //esvaziar carrinho
    {
      this.items = [];

    }
  }
  