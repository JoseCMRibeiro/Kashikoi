import { fetchProducts } from './Components/productsApi'
import { ShoppingCart } from './Components/ClassCart'
import { RenderModal } from './Components/renderModal.js';
import { CheckOut } from './Components/ClassCheckOut';
const btSubmit =document.getElementById("bt_submeter_cupon")
const btPagar =document.getElementById("bt_efetuar_pagamento")
import DOMPurify from 'dompurify'


const Check = new CheckOut()
const Cart = new ShoppingCart();
var armazem

localStorage.setItem('cart',[])//limpa carinho

mainFunction()

async function mainFunction()
{
    try
    {        
      armazem = await fetchProducts();
      const products= JSON.stringify(armazem);
      localStorage.setItem("products", products);

      
      addListener()     

      
    }
    catch(error)
    {
        console.log("API ",error);
    }
}//------------------------------------------------------------------------------------------------------
function addListener()//------------------------ADD LISTENER---------------------------------------------
{
  
  const storage = localStorage.getItem('cart')
  if(storage)
    Cart.items=JSON.parse(storage)
  else
    Cart.items=[];
  
 
  const images = document.querySelectorAll('.grid-item img'); 

  images.forEach(image => {image.addEventListener('click', imageClick)});//adiciona um eventlistener as imagens


cupon.addEventListener("keydown", function(event) 
{
  if (event.key === "Enter") 
  {  
    console.log(Check.addCoupon(cupon.value))
  }
});

btSubmit.addEventListener('click',() => 
{   
  console.log(Check.addCoupon(cupon.value))
}); 

btPagar.addEventListener('click',() => 
{   
  Check.efetuarPagamento()
}); 
}//add listeners-------------------------------------------------------------------------------------------------------

function imageClick(event)
{
  let armazemIndex=0;
  let cartIndex=0;
  let novo=true;
  for(var i = 0; i < armazem.length;i++)
  {
    if(event.target.id==armazem[i].id)
    {
      armazemIndex=i;
      i=armazem.length
    } 
  }
  
  for(var i = 0; i < Cart.items.length;i++)
  {      
    if(event.target.alt==Cart.items[i].id)
    {
      cartIndex = i;
      novo= false;
      RenderModal("O ARTIGO JÁ EXISTE NO CESTO", "Pode ajustar a quantidade pretendida no cesto")
      i=Cart.items.length
    }
  } 
  if(novo)
  {
    Cart.addItem(event.target.id,1)
    btSubmit.click()
  }

}

