import { messageModal } from "./modalMessage";
export function ligthStars(product) 
{

  const modalStyles = `
    .modal {
      display: none;
      position: fixed;
      z-index: 1;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: rgba(0, 0, 0, 0.5);
      
    }

    .modal-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: #313131ee;      
      color: white;
      margin: 20% auto;
      padding: 20px;
      border: 1px solid white;
      width: 50%;
      max-width: 500px;
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
    }

    .stars {
      margin-bottom: 20px;
    }

    .star {
      font-size: 24px;
      cursor: pointer;
      color: #131212;
    }

    .star:hover,
    .star.active {
      color: #ffbf00;
    }
  `;

  // Create style element and append CSS styles
  const style = document.createElement('style');
  style.innerHTML = modalStyles;
  document.head.appendChild(style);

  // Create modal element
  const modal = document.createElement('div');
  modal.id = 'myModal';
  modal.className = 'modal';
  modal.style.display = 'none';

  // Create modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content';

  // Create close button
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close';
  closeBtn.innerHTML = '&times;';

  // Create heading element
  const heading = document.createElement('h2');
  heading.textContent = 'Como qualifica este produto?';

  // Create stars container
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';

  // Create star elements
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement('span');
    star.className = 'star';
    star.setAttribute('data-rating', i);
    star.innerHTML = '&#9733;';
    starsContainer.appendChild(star);
  }

  // Create name input
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'nameInput';
  nameInput.placeholder = 'Nome:';

  // Create review textarea
  const reviewInput = document.createElement('textarea');
  reviewInput.id = 'reviewInput';
  reviewInput.placeholder = 'Comentario';

  // Create empty paragraph element
  const emptyParagraph = document.createElement('p');

  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitRating';
  submitBtn.textContent = 'Submeter';

  // Append elements to the modal content
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(heading);
  modalContent.appendChild(starsContainer);
  modalContent.appendChild(nameInput);
  modalContent.appendChild(reviewInput);
  modalContent.appendChild(emptyParagraph);
  modalContent.appendChild(submitBtn);

  // Append modal content to the modal
  modal.appendChild(modalContent);

  // Append modal to the document body
  document.body.appendChild(modal);

  // Get the modal element
  const modalElement = document.getElementById('myModal');
  modalElement.style.display = 'block';

  // Get the <span> element that closes the modal
  const closeModalBtn = document.getElementsByClassName('close')[0];

  // Close the modal when the close button is clicked
  closeModalBtn.addEventListener('click', function() {
    modalElement.style.display = 'none';
  });

  // Handle star rating selection
  const stars = document.querySelectorAll('.star');
  let rating = 0; // Initialize the rating variable

  stars.forEach(function(star, index) {
    star.addEventListener('click', function() {
      // Set the rating to the index of the clicked star plus 1
      rating = index + 1;

      // Add the 'active' class to stars up to the selected rating
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }

      // Remove the 'active' class from stars after the selected rating
      for (let i = rating; i < stars.length; i++) {
        stars[i].classList.remove('active');
      }

    });
  });

  // Handle rating submission
  submitBtn.addEventListener('click', function() {
    const selectedRating = document.querySelector('.star.active');
    const nameInput = document.getElementById('nameInput');
    const reviewInput = document.getElementById('reviewInput');

    if (selectedRating && nameInput.value && reviewInput.value) 
    {
      const selectedRatingValue = selectedRating.getAttribute('data-rating');
      const name = nameInput.value;
      const review = reviewInput.value;

      // Send the rating, name, and review data to your server for further processing
      console.log(selectedRatingValue);
      console.log(name);
      console.log(review);

      // Reset input fields and close the modal
      nameInput.value = '';
      reviewInput.value = '';
      modalElement.style.display = 'none';
    } 
    else 
    {
      messageModal('Por favor preencha todos os campos',"");
    }
  });
  return modal;
}

function ratingStorage()
{
  
}