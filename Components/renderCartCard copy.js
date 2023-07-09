import { ShoppingCart } from './ClassCart'
const total=document.getElementById("precototal")
const submit=document.getElementById("bt_submeter_cupon")
const Cart = new ShoppingCart()

export function renderCartItem(item)
{    
    // const item=Cart.items[Cart.items.length-1]
    const words=item.name.split(' ');
    const name= words.slice(0,2).join(' ');
    const ID=item.id;
    // Create li element
    const cartItem = document.createElement('ul');
    cartItem.id = "inCart"+item.id;

    // Create container div
    const containerDiv = document.createElement('div');
    containerDiv.className = 'container';

    // Create image element
    const image = document.createElement('img');
    image.id = 'imagem_produto'+ID;
    image.src = item.image;
    image.alt = 'Image';
    image.width = '50';
    image.height = '50';

    // Create ul element
    const ul = document.createElement('ul');
    const li1 = document.createElement('ul');
    li1.textContent = name;
    const li2 = document.createElement('ul');
    li2.textContent = "Preço: €"+ item.price;
    const li3 = document.createElement('ul');
    li3.textContent = "";
    li3.id='SubTotal'+ID;

    // Append li elements to ul
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);

    // Append image and ul to container div
    containerDiv.appendChild(image);
    containerDiv.appendChild(ul);

    // Create div for buttons
    const buttonsDiv = document.createElement('div');

    // Create buttons
    const plusButton = document.createElement('button');
    plusButton.id = 'bt_mais'+ID;
    plusButton.textContent = '+';
    const quantityButton = document.createElement('button');
    quantityButton.id = 'quantidade'+ ID;
    quantityButton.textContent = item.quantityInCart;
    const minusButton = document.createElement('button');
    minusButton.id = 'bt_menos';
    minusButton.textContent = '-';
    const deleteButton = document.createElement('button');
    deleteButton.id = 'bt_trash'+ID;
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'fa fa-trash-o';

    deleteButton.appendChild(deleteIcon);

    // Append buttons to buttons div
    buttonsDiv.appendChild(plusButton);
    buttonsDiv.appendChild(quantityButton);
    buttonsDiv.appendChild(minusButton);
    buttonsDiv.appendChild(deleteButton);

    // Append container div and buttons div to li item
    cartItem.appendChild(containerDiv);
    cartItem.appendChild(buttonsDiv);

    //trash listener
    deleteButton.addEventListener('click',() => 
    {   
        const toRemove=document.getElementById("inCart"+item.id)
        toRemove.remove()    
        Cart.removeItem(item);  
        total.textContent=Cart.getTotal().toFixed(2)  
    });
    //adding listener
    plusButton.addEventListener('click',() => 
    {   
        const quantity = Cart.addItem(item,1);          
        quantityButton.textContent = quantity;
        total.textContent=Cart.getTotal().toFixed(2) 
        li3.textContent="Sub Total: " + (quantity*item.price).toFixed(2)     
    });
    //bt_minus listener
    minusButton.addEventListener('click',() => 
    {   
        if(quantityButton.textContent=="1")    
        {
            deleteButton.click()
            return
        }
        quantityButton.textContent=Cart.addItem(item,-1) 
        total.textContent=Cart.getTotal().toFixed(2) 
        li3.textContent="Sub Total: " +(item.quantityInCart*item.price).toFixed(2)          
    });   
    return cartItem;
}
