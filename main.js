import {NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { fetchProducts } from './Components/productsApi'
const header=document.getElementById("header")
const footer=document.getElementById("footer")
header.appendChild(NavbarTop())
footer.appendChild(NavBarBottom())



localStorage.setItem('cart',[])//limpa carinho

mainFunction()

async function mainFunction()
{
    try
    {        
      const armazem = await fetchProducts();
      const products= JSON.stringify(armazem);
      localStorage.setItem("products", products);

    
    }
    catch(error)
    {
        console.log("API ",error);
    }
}//------------------------------------------------------------------------------------------------------