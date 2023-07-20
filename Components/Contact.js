function sanitizeInput(input) {
  const sanitizedInput = input.replace(/[^\w\s]/gi, '');
  return sanitizedInput;
}

function validateForm() {
  var firstName = document.getElementById("first-name").value;
  var company = document.getElementById("company").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  firstName = sanitizeInput(firstName);
  company = sanitizeInput(company);
  message = sanitizeInput(message);

  if (!email.includes("@")) {
    alert("O email deve conter um '@'.");
    return false;
  }

  if (firstName.length > 20) {
    alert("O nome não deve ultrapassar 20 caracteres.");
    return false;
  }

  if (company.length > 20) {
    alert("A Empresa não deve ultrapassar 20 caracteres.");
    return false;
  }

  if (message.length < 20) {
    alert("A mensagem não deve ter menos que 20 caracteres.");
    return false;
  }

  return true;
}

var carouselSlide = document.querySelector(".carousel-slide");
var carouselItems = document.querySelectorAll(".carousel-item");
var prevButton = document.querySelector(".carousel-control-prev");
var nextButton = document.querySelector(".carousel-control-next");
var currentIndex = 0;

function showSlide(index) {
  carouselSlide.style.transition = "transform 0.5s ease";
  carouselSlide.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  }
  showSlide(currentIndex);
}

prevButton.addEventListener("click", prevSlide);
nextButton.addEventListener("click", nextSlide);

function startCarousel() {
  setInterval(nextSlide, 2000);
}

window.onload = function () {
  startCarousel();
};
