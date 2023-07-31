export function messageModal(text1, text2) 
{
  //modal
  const modal = document.createElement("div");
  modal.style.display = 'none'
  modal.style.position = 'fixed'
  modal.style.zIndex = 1;
  modal.style.left = '0'
  modal.style.top = '0'
  modal.style.width= '100%'
  modal.style.height = '100%'
  modal.style.overflow = 'auto'
  modal.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  modal.style.color = 'white'
  //modal content
  const modalContent = document.createElement('div');
  modalContent.style.margin = 'auto'
  modalContent.style.marginTop= '100px'
  modalContent.style.padding = '30px'
  modalContent.style.border = '1px solid #ffbf00'
  modalContent.style.width = ' 50%'
  modalContent.style.minWidth = '400px'
  modalContent.style.textAlign = 'center'
  modalContent.style.backgroundColor = '#313131ee'
  modalContent.style.color = 'white'
  //text 1
  const h1 = document.createElement('h3');
  h1.textContent=text1
  h1.style.color = 'white';
  h1.style.margin = 'auto';
  h1.style.marginTop = '50px';
  //text 2
  const h2 = document.createElement('h3');
  h2.textContent=text2
  h2.style.color = 'white';
  h2.style.margin = 'auto';
  h2.style.marginTop = '50px';
  //close buton
  const closeButton = document.createElement('button');
  closeButton.textContent = 'CLOSE';
  closeButton.style.backgroundColor = 'grey';
  closeButton.style.color = 'white';
  closeButton.style.padding = '5px';
  closeButton.style.marginTop = '100px'
  
  closeButton.style.marginBottom = '0px'

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