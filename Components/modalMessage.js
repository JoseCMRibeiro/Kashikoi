export function messageModal(text1, text2) 
{
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <style>
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
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        text-align: center;
      }
    </style>
  `;

  const modalContent = document.createElement('div');
  modalContent.classList.add("modal-content")
  const h1 = document.createElement('h1');
  h1.textContent=text1
  const h2 = document.createElement('h2');
  h2.textContent=text2
  const closeButton = document.createElement('button');
  closeButton.textContent = 'CLOSE';
  closeButton.style.backgroundColor = 'grey';
  closeButton.style.color = 'white';
  closeButton.addEventListener('click', function () 
  {
    modal.style.display = 'none';
  });


  modalContent.appendChild(h1)
  modalContent.appendChild(h2)
  modalContent.appendChild(closeButton)
  modal.appendChild(modalContent)
  document.body.appendChild(modal);

  modal.style.display = "block";
}