import { messageModal } from "../Components/renderMessageModal";
import { fetchusers } from "../Components/usersApi";
import { Slideshow} from "../Components/classCarousel";
import { RenderStaff } from "../Components/renderStaffCard";
import { RenderSlides } from "../Components/renderSlides";

const slides = document.getElementById("slides");
const esquerda = document.getElementById("bt_esquerda");
const direita = document.getElementById("bt_direita")
const staff = document.getElementById("staff")

slides.appendChild(RenderSlides())

const show = new Slideshow();
show.start();

esquerda.addEventListener("click", function() 
{
  show.stop()
  show.goToPrevious()
  console.log("ESQUERDA");
});

direita.addEventListener("click", function() 
{
    show.stop()
    show.goToNext()
    console.log("DIREITA");
});

slides.onclick = function() 
{
  console.log("SLIDES")
  if (show.SlideshowRunning()) 
    show.stop()
  else 
    show.start()
}


let users = localStorage.getItem('users')
if(!users)
  users = getUsers()
else 
  users = JSON.parse(users)
  

staff.appendChild(RenderStaff(users.results[0].picture.large))
staff.appendChild(RenderStaff(users.results[1].picture.large))

async function getUsers()
{  
  try
  {
    const usersJson = await fetchusers();
    const userString= JSON.stringify(usersJson);
    localStorage.setItem("users", userString);         
  }
  catch(error)
  {
    messageModal ("Verifique ligação a API", error); 
  }
}


