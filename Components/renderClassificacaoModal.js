import DOMPurify from "dompurify";
import { messageModal } from "./renderMessageModal";
import { SetRatingReviews } from "../modules/localeStorage";

export function productReview(product) 
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
      margin: 15% auto;
      padding: 10px;
      border: 1px solid #ffbf00;
      width: 50%;
      max-width: 500px;
    }
    
    .input-field {
      width: 90%;
      margin-bottom: 20px;
      padding: 20px; 
    }

    .submitBtn{
      padding: 10px;
      border: 1px solid #ffbf00;
    }

    .close {
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
      cursor: pointer;
      padding: 10px;
      margin: 20px;
    }

    .stars {
      margin: 10% auto;
    }

    .star {
      font-size: 24px;
      cursor: pointer;
      color: white;
    }

    .star:hover,
    .star.active {
      color: #ffbf00;
    }
  `;

  // Create styles
  const style = document.createElement('style');
  style.innerHTML = modalStyles;
  document.head.appendChild(style);
  // Create modal 
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
  closeBtn.style.backgroundColor = 'black';
  // Create heading element
  const heading = document.createElement('h2');
  heading.textContent = 'How do you rate this item?';
  heading.style.color = 'white';
  // Create stars container
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  // Create star elements
  for (let i = 1; i <= 5; i++) 
  {
    const star = document.createElement('span');
    star.className = 'star';
    star.setAttribute('data-rating', i);
    star.innerHTML = '&#9733;';
    starsContainer.appendChild(star);
  }
  // name
  const nameInput = document.createElement('input');
  nameInput.type = 'text';
  nameInput.id = 'nameInput';
  nameInput.placeholder = 'name:';
  nameInput.className = 'input-field';
  
  // review
  const reviewInput = document.createElement('textarea');
  reviewInput.id = 'reviewInput';
  reviewInput.placeholder = 'review';
  reviewInput.className = 'input-field';
  
  // Create submit button
  const submitBtn = document.createElement('button');
  submitBtn.id = 'submitRating';
  submitBtn.textContent = 'Submeter';
  submitBtn.className = 'submitBtn';

  // Append elements to the modal content
  modalContent.appendChild(closeBtn);
  modalContent.appendChild(heading);
  modalContent.appendChild(starsContainer);
  modalContent.appendChild(nameInput);
  modalContent.appendChild(reviewInput);
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
  closeModalBtn.addEventListener('click', function() 
  {
    modalElement.style.display = 'none';
  });

  // Handle star rating selection
  const stars = document.querySelectorAll('.star');
  let rating = 0; // Initialize the rating variable

  stars.forEach(function(star, index) 
  {
      star.addEventListener('click', function() 
      {
        rating = index + 1;

        for (let i = 0; i < rating; i++) 
        {
          stars[i].classList.add('active');
        }

        for (let i = rating; i < stars.length; i++) 
        {
          stars[i].classList.remove('active');
        }

      });
  });

  // Handle rating submission
  submitBtn.addEventListener('click', function()
  {
    const selectedRating = document.querySelector('.star.active');
    const nameInput = document.getElementById('nameInput');
    const reviewInput = document.getElementById('reviewInput');

    if (selectedRating && nameInput.value && reviewInput.value) 
    {
      const name = DOMPurify.sanitize(nameInput.value);
      const review = DOMPurify.sanitize(reviewInput.value);

      //store reviews
      SetRatingReviews(product.id,name,rating,review)
      
      modalElement.style.display = 'none';
      modal.remove()      
    } 
    else 
    {
      messageModal('Please fill out all fields',"");
    }
  });

    //listeners
    closeModalBtn.addEventListener('click', function () 
    {
        modal.style.display = 'none';
        modal.remove()      
    });
    window.addEventListener('keydown', function (event) 
    {
        if (event.key === 'Escape') 
        {
          modal.style.display = 'none';          
          modal.remove() 
        }               
    });
    window.addEventListener('click', function (event) 
    {
        if (event.target === modal)
        {
          modal.style.display = 'none';          
          modal.remove()
        }
    });
}