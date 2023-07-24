import { Slideshow} from "../modules/classCarousel";
import { RenderStaffCard } from "../Components/renderStaffCard";
import { RenderSlides } from "../Components/renderSlides";
import { getStoredUsers } from "../modules/storage";

const slides = document.getElementById("slides");
const left = document.getElementById("bt_left");
const rigth = document.getElementById("bt_rigth")
const staff = document.getElementById("staff")


renderStaff()  

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



//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

async function renderStaff ()
{  
  const users = await getStoredUsers()

  const staffOneName=  users.results[0].name.title + " " 
  + users.results[0].name.first + " "
  + users.results[0].name.last;
  const staffTwoName=  users.results[1].name.title + " " 
  + users.results[1].name.first + " "
  + users.results[1].name.last;   

  staff.appendChild(RenderStaffCard(users.results[0].picture.large, staffOneName))
  staff.appendChild(RenderStaffCard(users.results[1].picture.large, staffTwoName))
}//-------------------------------------------------------------------------------------