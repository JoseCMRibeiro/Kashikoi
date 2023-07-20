import {NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { fetchProducts } from './Components/productsApi'
import { messageModal } from './Components/renderMessageModal'
const header=document.getElementById("header")
const footer=document.getElementById("footer")
header.appendChild(NavbarTop())
footer.appendChild(NavBarBottom())

    const footerText = '\u00A9 2023 KOSHIKAI || All Rights Reserved';

    footer.style.backgroundColor = '#f0f0f0';
    footer.style.textAlign = 'center';
    footer.style.padding = '10px';

    const footerContent = document.createTextNode(footerText);
    footer.appendChild(footerContent);

    const main = document.querySelector('main');
    const body = document.body;
    body.style.display = 'flex';
    body.style.flexDirection = 'column';
    main.style.flex = '1';   

body.appendChild(footer);

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

window.onresize = handleResize;
handleResize();

function handleResize() {
    if (window.innerWidth < 600) 
    {
        body.style.minHeight = '220vh';
    } 
    else 
    {     
        body.style.minHeight = '100vh';
    }
}

