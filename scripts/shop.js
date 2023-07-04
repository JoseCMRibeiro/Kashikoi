import { createProductCard } from "../Components/renderItemCard";
import { ShoppingCart} from "../Components/classCart"
import { ModalProduct } from "../Components/renderProductModal";
import { messageModal } from "../Components/modalMessage";

const Cart = new ShoppingCart()
const main= document.getElementById("main")
const cardGrid = document.createElement("div")
cardGrid.classList.add("grid-container")


for (var i = 0; i < Cart.products.length;i++)
{    
cardGrid.appendChild(createProductCard(Cart.products[i]))
}

main.appendChild(cardGrid)

//adding listeners to product cardIcon
const cartIcons = document.querySelectorAll('.fa-cart-plus')
cartIcons.forEach(icon => {icon.addEventListener('click', iconClick)});
//adding listeners to product cards
const cardImages = document.querySelectorAll('img')
cardImages.forEach(cardImage => {cardImage.addEventListener('click', cardClick)});

function cardClick(event)
{   
    for(var i=0; i < Cart.products.length;i++)
    {    
        if(event.target.id==Cart.products[i].id)
        {
            ModalProduct(Cart.products[i])
            i=Cart.products.length;
        }
    }
};


function iconClick(event)
{
    var item
    for(var i=0; i < Cart.products.length;i++)
    {    
        if(event.target.id==Cart.products[i].id)
        {
            item=Cart.products[i]           
            i=Cart.products.length;
        }
    }

     if(item.quantity<1)        
    {
        messageModal("Não podemos satisfazer o seu pedido","o artigo está em rotura de stock")
    }
    else
    {
        Cart.addItem(item,1)
        messageModal(item.name, "Foi adicionado ao carrinho")
    }
}

buttonCart.onclick = function()
{
    window.location.href = '/pages/cart.html';
};
