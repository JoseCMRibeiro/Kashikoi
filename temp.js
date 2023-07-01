export function ModalProduct(product)
{
    // css
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
      }


      .modal-content {
        background-color: #fefefe;
        padding: 10%;
        border: 1px solid #888;
        heigth: 200%;
      }
      
      .imageContainer{
        max-width: 10%;
        max-height: 10%;
      }

      .productImage{   
        object-fit: cover;
      }

    `;
    
    // Create the container div
    const container = document.createElement('div');
    // Create the modal element
    const modal = document.createElement('div');
    modal.id = 'productModal';
    modal.className = 'productModal';    
    modal.style.display = 'block';    
    // Create the modal content
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';   
    const imageContainer= document.createElement('div')
    imageContainer.className="imageContainer"
    
    const closeButton = document.createElement('button');
    closeButton.textContent = ' CLOSE ';
    closeButton.style.backgroundColor = "grey";
    closeButton.style.color = "white";    
    closeButton.addEventListener('click', function() 
    {
      modal.style.display = 'none';
    });


    
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
    
    const productImage = document.createElement('img');
    productImage.id = 'productImage';
    productImage.alt = 'Product Image';
    productImage.src = product.image;
    productImage.className=productImage
     

    


    // Append the elements to the container
       
    modal.appendChild(modalContent);  
    modalContent.appendChild(closeButton) 
    modalContent.appendChild(productName);
    modalContent.appendChild(productDescription);
    imageContainer.appendChild(productImage);
    modalContent.appendChild(productPrice);
    modalContent.appendChild(imageContainer)

    container.appendChild(modalStyle);
    container.appendChild(modal); 
    

    // Inject the component into the body of the page
    document.body.appendChild(container);
}