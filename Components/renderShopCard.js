  import { getProductReview } from "../modules/localeStorage";
  
  // Function to create the product card
  export function createProductCard (item) 
  {
    const cardContainer = document.createElement('div');
    cardContainer.className = 'card';
    cardContainer.id=item.id

    const imageContainer = document.createElement('div');
    imageContainer.className = 'image-container';

    const image = document.createElement('img');
    image.src = item.image;
    image.alt = item.name;
    image.id = item.id;

    imageContainer.appendChild(image);

    const textContainer1 = document.createElement('div');
    textContainer1.className = 'text-container';

    const titlePriceHeading = document.createElement('h4');

    const titleSpan = document.createElement('span');

    const words=item.name.split(' ');    
    titleSpan.textContent = words.slice(0,2).join(' ');

    const priceSpan = document.createElement('span');
    priceSpan.textContent = '€'+item.price;

    titlePriceHeading.appendChild(titleSpan);
    titlePriceHeading.appendChild(priceSpan);

    textContainer1.appendChild(titlePriceHeading);

    const textContainer2 = document.createElement('div');
    textContainer2.className = 'text-container';

    const ratingHeading = document.createElement('h4');

    const starsContainer = document.createElement('div');
    starsContainer.className = 'starsContainer';
    starsContainer.id=item.id

    let stars=0
    const review = getProductReview(item.id)
    if (review!=null)
    {
      stars = review.numberOfStars/review.reviews.length
    }


    for (let i = 0; i < 5; i++) 
    {
      const starSpan = document.createElement('span');
      if(i>=stars)
        starSpan.className = 'fa fa-star-o'
      else
        {
          starSpan.className = 'fa fa-star';          
          starSpan.style.color = '#C07F00';
        }
        
      
      starSpan.classList.add("stars")
      starsContainer.appendChild(starSpan);
    }

    const emptySpan1 = document.createElement('span');
    const emptySpan2 = document.createElement('span');

    const cartIcon = document.createElement('i');
    cartIcon.className = 'fa fa-cart-plus fa-lg';
    cartIcon.id=item.id;
    cartIcon.setAttribute('aria-hidden', 'true');

    ratingHeading.appendChild(starsContainer);
    ratingHeading.appendChild(emptySpan1);
    ratingHeading.appendChild(emptySpan2);
    ratingHeading.appendChild(cartIcon);

    textContainer2.appendChild(ratingHeading);

    cardContainer.appendChild(imageContainer);
    cardContainer.appendChild(textContainer1);
    cardContainer.appendChild(textContainer2);

    return cardContainer;
  };
