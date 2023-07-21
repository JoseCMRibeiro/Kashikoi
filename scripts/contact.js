import { messageModal } from "../Components/renderMessageModal";
import { fetchusers } from "../modules/usersApi";
import { Slideshow} from "../modules/classCarousel";
import { RenderStaff } from "../Components/renderStaffCard";
import { RenderSlides } from "../Components/renderSlides";

const slides = document.getElementById("slides");
const left = document.getElementById("bt_left");
const rigth = document.getElementById("bt_rigth")
const staff = document.getElementById("staff")

slides.appendChild(RenderSlides())

const show = new Slideshow();
show.start();

left.addEventListener("click", function() 
{
  show.stop()
  show.goToPrevious()
});

rigth.addEventListener("click", function() 
{
    show.stop()
    show.goToNext()
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
  

const staffOneName=  users.results[0].name.title + " " 
                    + users.results[0].name.first + " "
                    + users.results[0].name.last;
const staffTwoName=  users.results[1].name.title + " " 
                    + users.results[1].name.first + " "
                    + users.results[1].name.last;   
                    
staff.appendChild(RenderStaff(users.results[0].picture.large, staffOneName))
staff.appendChild(RenderStaff(users.results[1].picture.large, staffTwoName))

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


