export function createCard(product) {
    const card = document.createElement('div');
    card.id = product.id;
    card.classList.add('card');
  
    const img = document.createElement('img');
    img.id = product.id;
    img.src = product.image;
    card.appendChild(img);
  
    const name = document.createElement('h4');
    name.id = 'title';
    name.textContent = product.name;
    card.appendChild(name);
  
    const price = document.createElement('h4');
    price.id = 'price';
    price.textContent = `$${product.price}`;
    card.appendChild(price);
  
    const starContainer = document.createElement('div');
    card.appendChild(starContainer);
  
    const star = document.createElement('i');
    star.classList.add('fa', 'fa-star');
    starContainer.appendChild(star);
  
    const button = document.createElement('button');
    const link = document.createElement('a');
    button.appendChild(link);
  
    const cartIcon = document.createElement('i');
    cartIcon.classList.add('fa', 'fa-cart-plus', 'fa-lg');
    link.appendChild(cartIcon);
  
    card.appendChild(button);
  
    return card;
  }
  