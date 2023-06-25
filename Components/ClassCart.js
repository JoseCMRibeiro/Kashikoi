import { renderLiItem } from '/Components/renderCartList'
import { RenderModal} from './renderModal'
const cesto= document.getElementById('cesto')

export class ShoppingCart 
{ 
    constructor()//construtor 
    {      
      this.armazem=[]//produtos no armazem
      this.items=[]//array de produtos no carrinho
    }
    
  
    addItem(id,n)//adicionar n produtos id ao carrinho
    {                
      const storage = localStorage.getItem('cart')       
      if(storage)
        this.items=JSON.parse(storage)
      
      const armazem = localStorage.getItem('products')       
        if(armazem)
          this.armazem=JSON.parse(armazem)  
     
      let armazemIndex
      let quantity=1
      let stock
      let novo=true;
      for(var i=0; i < this.armazem.length;i++)//procura pelo item adicionado ao cesto no armazem
      {
        if(id==this.armazem[i].id)
          {
            stock=this.armazem[i].quantity
            armazemIndex=i;//index do produto no armazem
            i=this.armazem.length;//saida do for
          }
      }
      for(var i = 0; i < this.items.length;i++)//verifica se já existe o item no cesto e modifica a quantidade caso já haja
      {
        if(this.armazem[armazemIndex].id==this.items[i].id)//já existe no cesto
        {          
          novo=false;  
          quantity=this.items[i].quantity+=n; //actualiza a quantidade no cesto
          if (this.items[i].quantity <1)//remove do cesto
          {
            this.removeItem(id);
          }                   
          i=this.items.length;//sai do for
        }
      }
      
      if(novo && stock > 0)//se não existir no cesto adiciona ao cesto
      {       
        const item=this.newItem(armazemIndex,this.armazem)
        this.items.push(item);//adiciona a lista de produtos
        quantity=item.quantity=1;//inicializa quantidade no cesto em 1        
        const liItem=renderLiItem(this);//criar produto no cesto
        cesto.appendChild(liItem);
      }
      if(quantity>=stock)
      { 
        quantity=this.armazem[armazemIndex].quantity       
        RenderModal("STOCK LIMITADO", "só existem "+ quantity + " deste artigo em Stock")        
      }
      localStorage.setItem("cart", JSON.stringify(this.items));//actualiza storage      
      return quantity
    }
  
    removeItem(ID)//remover item com id=ID do carrinho 
    {
      let index=0;      
      for(let i= 0; i < this.items.length;i++)
      {
        if(ID==this.items[i].id)
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
  
    getTotal()//valor dos items no cesto 
    {
      var Total=0;
      for ( var i=0; i < this.items.length; i++)
        Total+=this.items[i].quantity*this.items[i].price;

      return Total

      //return this.items.reduce((total, item) => total + item.price*item.quantity, 0);
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

    newItem(index,olditem)
    {
      const item =
      {
        description: olditem[index].description, 
        id:olditem[index].id, 
        image:olditem[index].image, 
        name:olditem[index].name, 
        price:olditem[index].price, 
        quantity:olditem[index].quantity 
      };
      return item
    }
  }
  