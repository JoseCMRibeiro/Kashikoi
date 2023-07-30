import DOMPurifyI  from "dompurify";
import { Slideshow} from "../modules/classCarousel";
import { RenderStaffCard } from "../Components/renderStaffCard";
import { RenderSlides } from "../Components/renderSlides";
import { getStoredUsers } from "../modules/localeStorage";
import { messageModal } from "../Components/renderMessageModal";

const slides = document.getElementById("slides");
const controls = document.getElementById("carouselControls")
const left = document.getElementById("bt_left");
const rigth = document.getElementById("bt_rigth")
const staff = document.getElementById("staff")

controls.style.display = 'none'
renderStaff()  

slides.appendChild(RenderSlides())  
const show = new Slideshow();
show.start();

left.addEventListener("click", function() 
{
  show.goToPrevious()
});

rigth.addEventListener("click", function() 
{
    show.goToNext()
});

slides.onclick = function() 
{
  console.log("SLIDES")
  if (show.SlideshowRunning()) 
  {      
    show.stop()
    controls.style.display = 'block'
  }
  else 
  {    
    show.start()
    controls.style.display = 'none'
  }
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


function sanitizeInput(input) {
  const sanitizedInput =  DOMPurifyI.sanitize(input.replace(/[^\w\s]/gi, ''));
  return sanitizedInput;
}


function validateForm()
{
  var firstName = document.getElementById("first-name").value;
  var company = document.getElementById("company").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  firstName = sanitizeInput(firstName);
  company = sanitizeInput(company);
  message = sanitizeInput(message);
  
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email))
  {
    messageModal("Invalid Email");
    return false;
  }

  if (firstName.length > 20)
  {
    messageModal("Name should not exceed 20 characters.");
    return false;
  }  
  else if (firstName.length < 5)
  {
    messageModal("Name should have at least 5 characters.");
    return false;
  }

  if (company.length > 20)
  {
    messageModal("Company name should not exceed 20 characters.");
    return false;
  }
  else if (company.length < 5)
  {
    messageModal("Company name should have at least 5 characters.");
    return false;
  }

  if (message.length < 20)
  {
    messageModal("Message should have at least 20 characters.");
    return false;
  }
  return true;
}

const bt_submit = document.getElementById("bt_submit");

bt_submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  if (validateForm()) {
    // Retrieve form values
    const firstName = document.getElementById("first-name").value;
    const company = document.getElementById("company").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Display form data using an messageModal (you can change this to your desired action)
    const formData = `First Name: ${firstName}\nCompany: ${company}\nEmail: ${email}\nMessage: ${message}`;
    messageModal(formData);

    // Reset the form after submission (optional)
    document.getElementById("first-name").value = "";
    document.getElementById("company").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }
});