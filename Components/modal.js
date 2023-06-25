// modal.js

function Modal(options) 
{
    const { isOpen, onClose, title, content } = options;
  
    const modalContainer = document.createElement('div');
    modalContainer.className = 'modal';
  
    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';
  
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
  
    const modalTitle = document.createElement('h2');
    modalTitle.className = 'modal-title';
    modalTitle.textContent = title;
  
    const closeButton = document.createElement('button');
    closeButton.className = 'modal-close';
    closeButton.textContent = '×';
    closeButton.addEventListener('click', onClose);
  
    const modalBody = document.createElement('div');
    modalBody.className = 'modal-body';
  
    const modalText = document.createElement('p');
    modalText.textContent = content;
  
    modalHeader.appendChild(modalTitle);
    modalBody.appendChild(modalText);
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContainer.appendChild(modalContent);
    modalBody.appendChild(closeButton);
  
    if (isOpen) {
      modalContainer.style.display = 'block';
    } else {
      modalContainer.style.display = 'none';
    }    
    return modalContainer;
  }
  
  export default Modal;
  