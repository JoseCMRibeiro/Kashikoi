import { NavbarTop, NavBarBottom} from './Components/renderNavbars'
import { renderFootNote } from './Components/renderFootNote'


const header=document.getElementById("header")
header.appendChild(NavbarTop())
const footer=document.getElementById("footer")
footer.appendChild(renderFootNote())
footer.appendChild(NavBarBottom())