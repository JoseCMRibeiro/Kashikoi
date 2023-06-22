export  function RenderCard(title, price, imageUrl,id) 
{
  //create elements

  const card = document.createElement('div');
  const image = document.createElement('img');  
  const cardLegend = document.createElement('a');  
  // const cardDescription = document.createElement('p');

  //atributes  
  image.src = imageUrl;
  image.alt = title;
  card.id = id;
  cardLegend.textContent = title;
  // cardDescription.textContent = description;

  //add css
  card.classList.add('card');
  image.classList.add('card_image');

  //add to card body
  card.appendChild(image);
  card.appendChild(cardLegend);
  return card;
}
