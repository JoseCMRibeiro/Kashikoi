import {NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { fetchProducts } from './Components/productsApi'
const header=document.getElementById("header")
const footer=document.getElementById("footer")
header.appendChild(NavbarTop())
footer.appendChild(NavBarBottom())

const storage = localStorage.getItem('products')
if(!storage) mainFunction()

async function mainFunction()
{
    try
    {        
      const armazem = await fetchProducts();
      for(var i=0;i< armazem.length;i++)
      {
        armazem[i].quantityInCart=0
        armazem[i].productIndex=i
        armazem[i].classificacao=0
        //armazem[i].reviews=new JSON
      }
      const products= JSON.stringify(armazem);
      localStorage.setItem("products", products);    
    }
    catch(error)
    {
        console.log("API ",error);
    }
}//------------------------------------------------------------------------------------------------------