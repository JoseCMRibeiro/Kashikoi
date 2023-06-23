import { fetchProducts } from './Components/productsApi'
import { ShoppingCart } from './Components/ClassCart'
import { RenderNavBar } from './Components/renderNavBar';

const page=document.getElementById("page");



const Cart = new ShoppingCart();
mainFunction();

localStorage.setItem('cart',[])//remove carinho

async function mainFunction()
{
    try
    {        
      const armazem = await fetchProducts();
      const products= JSON.stringify(armazem);
      localStorage.setItem("products", products);

      const navBar=RenderNavBar();
      page.appendChild(navBar)
      addListener()
    }
    catch(error)
    {
        console.log("API ",error);
    }
}//------------------------------------------------------------------------------------------------------
function addListener()//------------------------ADD LISTENER---------------------------------------------
{
 
  const images = document.querySelectorAll('.grid-item img'); 

    images.forEach(image => 
    {

      image.addEventListener('click', () => 
      {
        const storage = localStorage.getItem('cart')
        if(storage)
          Cart.items=JSON.parse(storage)
        else
          Cart.items=[];

        let novo=true;
        for (var i= 0; i < Cart.items.length;i++)
        {
          if(parseInt(image.alt)==Cart.items[i].id)
          {
            novo=false;
            i=Cart.items.length;
          }
        }

        if(novo)
          Cart.addItem(image.alt,1)
      });
    });
}//-------------------------------------------------------------------------------------------------------
