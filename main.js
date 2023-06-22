import { fetchProducts } from './Componentes/productsApi'
import { ShoppingCart } from './Componentes/ClassCart'


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
    

    images.forEach(image => {
      image.addEventListener('click', () => 
      {
        let novo=true;
        var items=Cart.getItems;
        for (var i= 0; i < items.length;i++)
        {
          if(image.alt==items[i].id)
          {
            novo=false;
            i=items.length;
          }
        }

        if(novo)
          Cart.addItem(image.alt,1)
      });
    });
}//-------------------------------------------------------------------------------------------------------
