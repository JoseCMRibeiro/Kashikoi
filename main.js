import {NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { getStoredProducts } from './modules/storage'
import { renderFootNote } from './Components/renderFootNote'


const header=document.getElementById("header")
header.appendChild(NavbarTop())
const footer=document.getElementById("footer")
footer.appendChild(renderFootNote())
footer.appendChild(NavBarBottom())


getStoredProducts()


window.onresize = handleResize;
handleResize();
function handleResize() {
    if (window.innerWidth < 600) 
    {
        document.body.style.minHeight = '230vh';
    } 
    else 
    {     
        document.body.style.minHeight = '100vh';
    }
}

