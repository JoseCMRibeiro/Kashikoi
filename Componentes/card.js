export function createCard(id,string1, string2, imageUrl) 
{
    // Create elements
    const container = document.createElement('div');
    const card = document.createElement('div');
    const title =  document.createElement('h2');
    const description =  document.createElement('p');    
    
    container.appendChild(title);
    container.appendChild(card);
    container.appendChild(description);
    
    //adding properties 
    container.id=id; 
    title.innerText = string1;
    description.innerText=string2;  
    card.style.backgroundImage = imageUrl;


    return container;
  }