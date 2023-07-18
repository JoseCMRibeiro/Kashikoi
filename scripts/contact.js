import { messageModal } from "../Components/renderMessageModal";
import { fetchusers } from "../Components/usersApi";
import { Slideshow} from "../Components/carousel";

const slides = document.getElementById("slides");
const esquerda = document.getElementById("bt_esquerda");
const direita = document.getElementById("bt_direita")
const suport1= document.getElementById("suport1")
const suport2= document.getElementById("suport2")

const show = new Slideshow();



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
  if (show.isSlideshowRunning()) 
    show.stop()
  else 
    show.start()
}

show.start();

let users = localStorage.getItem('users')
if(!users)
  users = getUsers()
else 
  users = JSON.parse(users)
  
console.log(users)

suport1.src = users.results[0].picture.medium;
suport2.src = users.results[1].picture.medium;


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


// messageModal
// (
//   users.results[0].name.title + " " +users.results[0].name.first + " " + users.results[1].name.last , 
//   users.results[1].name.title + " " + users.results[1].name.first + " " + users.results[1].name.last 
// ) 


