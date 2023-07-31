import { getStoredProducts } from '../modules/localeStorage'

export async function renderInvoice() 
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
  modal.style.color = 'black'
  //modal content
  const modalContent = document.createElement('div');
  modalContent.style.margin = '5% auto'
  modalContent.style.padding = '30px'
  modalContent.style.border = '1px solid black'
  modalContent.style.width = ' 80%'
  modalContent.style.minHeight = '90%'
  modalContent.style.backgroundColor = 'white'
  modalContent.style.color = 'black'
  //close buton
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.style.backgroundColor = 'grey';
  closeButton.style.color = 'white';
  closeButton.style.padding= '5px';
  closeButton.style.marginLeft = '100%'
  closeButton.addEventListener('click', function () 
  {
    modal.style.display = 'none';
  });

 
  //text 0
  const h0 = document.createElement('h0');
  h0.textContent="KASHIKOI Tech Store"
  h0.style.color = 'black';
  h0.style.margin = '10px';
  h0.style.textAlign = 'left'
  h0.style.fontSize = '20px' 

  //date time
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth() + 1; 
  const day = currentDate.getDate();
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
  const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const hdate = document.createElement('p');
  hdate.textContent=formattedDate + " " +formattedTime
  hdate.style.color = 'black';
  hdate.style.margin = '10px';
  hdate.style.textAlign = 'left'
  hdate.style.fontSize = '20px' 

  //text 1
  const h1 = document.createElement('h2');
  h1.textContent="INVOICE"
  h1.style.color = 'black';
  h1.style.margin = '10px';
  h1.style.textAlign = 'center'

  modalContent.appendChild(closeButton)
  modalContent.appendChild(h0)  
  modalContent.appendChild(hdate)  
  addEmptyParagraph(modalContent)
  addEmptyParagraph(modalContent)
  addEmptyParagraph(modalContent)
  modalContent.appendChild(h1)  
  addEmptyParagraph(modalContent)
  addEmptyParagraph(modalContent)
  addEmptyParagraph(modalContent)
  modal.appendChild(modalContent)
  document.body.appendChild(modal);
  modal.style.display = "block";


  const products = await  getStoredProducts()

  const details = document.createElement('div')
  details.style.display = 'grid'
  details.style.gridTemplateColumns = '1fr 1fr 1fr 1fr'
  details.style.gap = '10px'

  ////////////////////////////////////////////////////////////////////////////////////////////////////
  const Column1 = document.createElement('div');
  Column1.textContent="ITEM"
  const Column2 = document.createElement('div');
  Column2.textContent="QUANTITY"
  const Column3 = document.createElement('div');
  Column3.textContent="PRICE"
  const Column4 = document.createElement('div');
  Column4.textContent="SUBTOTAL"
  details.appendChild(Column1)
  details.appendChild(Column2)
  details.appendChild(Column3)
  details.appendChild(Column4)
  modalContent.appendChild(details)

  products.forEach(item => 
  {
    if (item.quantityInCart >0)
    {      
      const quantity = document.createElement('div');
      quantity.textContent = item.quantityInCart;

      const price = document.createElement('div');
      price.textContent = item.price;

      const name = document.createElement('div');
      const words=item.name.split(' ');    
      name.textContent=words.slice(0,2).join(' ');

      const subTotal=item.quantityInCart * parseFloat( item.price)

      const subTotalDiv = document.createElement('div');
      subTotalDiv.textContent=subTotal.toFixed(2)

      details.appendChild(name)
      details.appendChild(quantity)
      details.appendChild(price)
      details.appendChild(subTotalDiv)
    }
  });

  const Column11 = document.createElement('div');
  const Column12 = document.createElement('div');
  const Column13 = document.createElement('div');
  const Column14 = document.createElement('div');
  Column11.textContent=""
  Column12.textContent=""
  Column13.textContent="DISCOUNT:"
  const discount = document.getElementById("discount")
  Column14.textContent= discount.textContent
  details.appendChild(Column11)
  details.appendChild(Column12)
  details.appendChild(Column13)
  details.appendChild(Column14)
  modalContent.appendChild(details)


  const Column21 = document.createElement('div');
  const Column22 = document.createElement('div');
  const Column23 = document.createElement('div');
  const Column24 = document.createElement('div');
  Column21.textContent=""
  Column22.textContent=""
  Column23.textContent="TOTAL:"
  const total = document.getElementById("total")  
  Column24.textContent= total.textContent
  details.appendChild(Column21)
  details.appendChild(Column22)
  details.appendChild(Column23)
  details.appendChild(Column24)
  modalContent.appendChild(details)

  /////////////////////////////////////////////////////////////////////////////////////////////////////////

    //listeners
    closeButton.addEventListener('click', function () 
    {
      modal.style.display = 'none';
      window.location.href = '/pages/shop.html';
    });
    window.addEventListener('keydown', function (event) 
    {
      if (event.key === 'Escape') 
      {
        window.location.href = '/pages/shop.html';
        modal.style.display = 'none';
      }
    });
    window.addEventListener('click', function (event) 
    {
      if (event.target === modal) 
      {
        window.location.href = '/pages/shop.html';
        modal.style.display = 'none';
      }
    });
}

function addEmptyParagraph(details)
 {
  const p = document.createElement('br');
  p.textContent = " "
  details.appendChild(p);
}