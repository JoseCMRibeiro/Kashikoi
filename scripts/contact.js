import { messageModal } from "../Components/renderMessageModal";
import { fetchusers } from "../Components/usersApi";

const users = localStorage.getItem('users')
if(!users)getUsers()


async function getUsers()
{  
  try
  {
    const usersJson = await fetchusers();
    const userString= JSON.stringify(usersJson);
    localStorage.setItem("users", userString);   
    messageModal(usersJson.results[0].name.title + " " +
      usersJson.results[0].name.first + " " + 
      usersJson.results[0].name.last,"")    
  }
  catch(error)
  {
    messageModal ("Verifique ligação a API", error); 
  }
}


let slideIndex = 0;
let timeout;

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");

  // let navbar = document.getElementById("myNavBar")
  // navbar.classList.add("hide")
  
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  
  slides[slideIndex-1].style.display = "block";  
  
  timeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

function stopSlideshow() {
  
  clearTimeout(timeout); // Stop the slideshow
}