import {NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { fetchProducts } from './Components/productsApi'
import { messageModal } from './Components/renderMessageModal'
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

        if (!armazem.fatal)
        {
            for (var i = 0; i < armazem.length; i++)
            {
                armazem[i].quantityInCart = 0
                armazem[i].productIndex = i
            }
            const products= JSON.stringify(armazem);
            localStorage.setItem("products", products);    
        }
        else
        messageModal ("Verifique ligação a base de dados", "Obrigado") 

    }
    catch(error)
    {
        messageModal ("Verifique ligação a API", error) 
    }
}//------------------------------------------------------------------------------------------------------