import { ShoppingCart } from './ClassCart.js'
const total=document.getElementById("TOTAL")

export function renderLiItem(item)
{    
    const Cart = new ShoppingCart();

    const words=item.name.split(' ');
    const name= words.slice(0,2).join(' ');
    const ID=item.id;
    // Create li element
    const liItem = document.createElement('ul');
    liItem.id = item.id;

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
    li3.id='SubTotal'+ ID;

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
    quantityButton.textContent = item.quantity;

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
    liItem.appendChild(containerDiv);
    liItem.appendChild(buttonsDiv);

    //trash listener
    deleteButton.addEventListener('click',() => 
    {       
        Cart.removeItem(ID);
    });
    //adding listener
    plusButton.addEventListener('click',() => 
    {       
        changeQuantity(Cart,ID,quantityButton,li3,1 )
    });
    //bt_minus listener
    minusButton.addEventListener('click',() => 
    {       
        changeQuantity(Cart,ID,quantityButton,li3,-1)
    }); 
    
    return liItem;
}
function changeQuantity(Cart,ID,quantityButton,li3,n)
{    
    Cart.addItem(ID.toString(),n);
    var Index=0;
    var Total=0;
    for (var i = 0; i < Cart.items.length;i++)
    {
        Total+= Cart.items[i].price * Cart.items[i].quantity
        if(Cart.items[i].id==ID)
        {
            Index=i;   
        } 
    }
    const quantity=Cart.items[Index].quantity;
    if (quantity+n<0)
        Cart.removeItem(ID)
    else
    {
    quantityButton.textContent = quantity.toString();
    li3.textContent = "SubTotal: "+ (quantity*Cart.items[Index].price);
    }
    total.textContent=Total.toString();

}