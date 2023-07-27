import { ShoppingCart } from "../modules/classCart";
import { checkCart } from "../scripts/cart";

const total=document.getElementById("totalPrice")

export function renderCartItem(products,item) 
{
    const Cart = new ShoppingCart()
    Cart.products = products
    const words = item.name.split(' ');
    const name = words.slice(0, 2).join(' ');
    const ID = item.id;
  
    // Create cart item container div
    const cartItem = document.createElement('div');
    cartItem.style.display = 'flex';
    cartItem.style.alignItems = 'center';
    cartItem.style.justifyContent = 'space-between';
    cartItem.style.borderBottom = '1px solid #ccc';
    cartItem.style.padding = '10px';
    cartItem.id = "itemDiv"+ item.id;
  
    // Create image element
    const image = document.createElement('img');
    image.id = 'productPicture' + ID;
    image.src = item.image;
    image.alt = 'Image';
    image.style.width = '50px';
    image.style.height = '50px';
    image.style.marginRight = '10px';
  
    // Create div to hold item details (name and price)
    const itemDetailsDiv = document.createElement('div');
    itemDetailsDiv.style.flex = '1';
  
    // Create h3 element for item name
    const nameHeading = document.createElement('h3');
    nameHeading.textContent = name;
    nameHeading.style.margin = '0';
  
    // Create paragraph element for item price
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = "€ " + item.price;
  
    // Append item name and price to item details div
    itemDetailsDiv.appendChild(nameHeading);
    itemDetailsDiv.appendChild(priceParagraph);
  
    // Create div for buttons
    const buttonsDiv = document.createElement('div');
  
    // Create buttons
    const plusButton = document.createElement('button');
    plusButton.id = 'bt_mais' + ID;
    plusButton.textContent = '+';
    plusButton.style.padding = "3px"
    plusButton.style.width = "25px"
  
    const quantityButton = document.createElement('button');
    quantityButton.id = 'quantidade' + ID;
    quantityButton.textContent = item.quantityInCart;
    quantityButton.style.padding = "3px"
    quantityButton.style.width = "25px"
  
    const minusButton = document.createElement('button');
    minusButton.id = 'bt_menos';
    minusButton.textContent = ' - ';
    minusButton.style.padding = "3px"
    minusButton.style.width = "25px"
  
    const deleteButton = document.createElement('button');
    deleteButton.id = 'bt_trash' + ID;  
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash-o';
    deleteIcon.style.padding = "3px"
    deleteIcon.style.width = "26px"
  
    deleteButton.appendChild(deleteIcon);
  
    // Append buttons to buttons div
    buttonsDiv.appendChild(minusButton);
    buttonsDiv.appendChild(quantityButton);
    buttonsDiv.appendChild(plusButton);
    buttonsDiv.appendChild(deleteButton);
  
    // Append image, item details, and buttons to the cart item container div
    cartItem.appendChild(image);
    cartItem.appendChild(itemDetailsDiv);
    cartItem.appendChild(buttonsDiv);
  
    //trash listener
    deleteButton.addEventListener('click', () => 
    {      
        const divToRemove = document.getElementById("itemDiv" + item.id);   
        divToRemove.parentNode.removeChild(divToRemove)
        Cart.removeItem(item);
        total.textContent = Cart.getTotal().toFixed(2);
        checkCart();
    });//---------------------------------------------------

    //adding listener
    plusButton.addEventListener('click', () => 
    {     
      quantityButton.textContent = Cart.addItem(item, 1);
      total.textContent = Cart.getTotal().toFixed(2);
    });//-----------------------------------------------------
  
    //bt_minus listener
    minusButton.addEventListener('click', () => 
    {
      if (quantityButton.textContent === "1") {
        deleteButton.click();
        return;
      }
      quantityButton.textContent = Cart.addItem(item, -1);
      total.textContent = Cart.getTotal().toFixed(2);
    });//-------------------------------------------------------
  
    return cartItem;
  }
  