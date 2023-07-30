import { getProductReview } from "../modules/localeStorage";

export function ModalProduct(product) 
{
  const modalStyle = document.createElement('style');
  modalStyle.textContent = `
  .productModal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;    
    z-index: 9999;
  }

  .productModalContent {
    background-color: #fefefe;
    padding: 5%;
    border: 5px solid #ffbf00;
    height: 100%;
    overflow-y: auto;
  }

  .imageContainer {
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .productImage {
    max-width: 30%;
    max-height: 100%;
    object-fit: contain;
  }
  `;

  // Create the container div
  const container = document.createElement('div');

  // Create the modal element
  const modal = document.createElement('div');
  modal.id = 'modal';
  modal.className = 'productModal';
  modal.style.display = 'block';

  // Create the modal content
  const modalContent = document.createElement('div');
  modalContent.className = 'productModalContent';

  //create image
  const imageContainer = document.createElement('div');
  imageContainer.className = 'imageContainer';
  imageContainer.style.marginTop = '50px'

  //create button
  const btContainer = document.createElement('div');
  btContainer.style.display = 'flex';
  btContainer.style.justifyContent = 'center';
  btContainer.style.alignItems = 'center';
  const closeButton = document.createElement('button');
  closeButton.textContent = 'CLOSE';
  closeButton.style.backgroundColor = 'grey';
  closeButton.style.color = 'white';  
  closeButton.style.marginTop = '50px';
  closeButton.style.marginLeft = 'auto';
  closeButton.style.marginRight = 'auto';
  closeButton.id = "closeButton"
  btContainer.appendChild(closeButton)

  // Create the product information elements
  const productName = document.createElement('h2');
  productName.id = 'productName';
  productName.textContent = product.name;

  const productDescription = document.createElement('p');
  productDescription.id = 'productDescription';
  productDescription.textContent = product.description;

  const productPrice = document.createElement('p');
  productPrice.id = 'productPrice';
  productPrice.textContent = 'Price: $' + product.price;
  productPrice.style.marginTop = '20px'

  const productImage = document.createElement('img');
  productImage.id = 'productImage';
  productImage.alt = 'Product Image';
  productImage.src = product.image;
  productImage.className = 'productImage';


  // Append the elements to the containers  
  imageContainer.appendChild(productImage);
  modalContent.appendChild(productName);
  modalContent.appendChild(productDescription);
  modalContent.appendChild(productPrice);
  modalContent.appendChild(imageContainer);

  

  const headerRatings = document.createElement('h2')
  headerRatings.textContent="REVIEWS:"
  modalContent.appendChild(headerRatings)
  const rating = getProductReview(product.id)
  if(rating)
  for ( var i = 0; i < rating.reviews.length ; i++)
  {    
    const nameRatings = document.createElement('h4')
    nameRatings.textContent="👤    " + rating.reviews[i].name + ":"
    nameRatings.style.margin = "20px";
    modalContent.appendChild(nameRatings)

    const productRatings = document.createElement('p')
    
    const stars=rating.reviews[i].rating
    for (let i = 0; i < 5; i++) 
    {
      const starIcon = document.createElement("span");
      const blackStarIcon = document.createElement("span");
      starIcon.style.color = "#E7B10A";
      blackStarIcon.style.color = "white"
      if (i < stars) 
      {
        starIcon.textContent = "★";        
        productRatings.appendChild(starIcon);
      }
      else
      {
        blackStarIcon.textContent = "★"        
        productRatings.appendChild(blackStarIcon);
      }
    }
    productRatings.style.margin="10px";

    //for multiline review
    const text = rating.reviews[i].review
    const paragraphs = text.split("\n");
    const paragraphContainer = document.createElement('div');
    paragraphs.forEach(paragraph => {
      if (paragraph.trim() !== "") {
        const pElement = document.createElement('p');
        pElement.innerHTML = paragraph; 
        paragraphContainer.appendChild(pElement);
      }
    });

    const  fixedBox = document.createElement("div");   
    fixedBox.style.background = "lightgray";
    fixedBox.style.padding = "2px";
    fixedBox.style.margin = "10px";
    fixedBox.appendChild(productRatings)
    fixedBox.appendChild(paragraphContainer)
    modalContent.appendChild(fixedBox)
  }
  

  modalContent.appendChild(btContainer);
  modal.appendChild(modalContent);

  container.appendChild(modal);
  container.appendChild(modalStyle);
  document.body.appendChild(container);


  //listeners
  closeButton.addEventListener('click', function () 
  {
    modal.style.display = 'none';
  });
  window.addEventListener('keydown', function (event) 
  {
    if (event.key === 'Escape') modal.style.display = 'none';
  });
  window.addEventListener('click', function (event) 
  {
    if (event.target === modal) modal.style.display = 'none';
  });
}