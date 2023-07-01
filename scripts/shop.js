import { RenderModal } from "../Components/renderModal";
import { ShoppingCart } from '../Components/ClassCart'
import { ModalProduct } from "../Components/renderProductModal";
const buttonCart = document.getElementById("buttonCart")
const cards = document.querySelectorAll('.card')
//adding listeners to product cards
cards.forEach(card => {card.addEventListener('click', cardClick)});
//geting stocks
const Cart = new ShoppingCart()

buttonCart.onclick = function()
{
    window.location.href = '/pages/cart.html';
};

function cardClick(event)
{   


    var item
    for(var i=0; i < Cart.products.length;i++)
    {    
        if(event.target.id==Cart.products[i].id)
        {
            item=Cart.products[i]
            ModalProduct(item)
            i=Cart.products.length;
        }
    }
    if(item.quantityInCart>0)
    {
        RenderModal("Produto já existente no carrinho",
        "Pode modificar a quantidade desejada no carrinho")
        return
    }
    else if(item.quantity<1)        
    {
        RenderModal("Não podemos satisfazer o seu pedido",
        "o artigo está em rotura de stock")
    }
    else
    {
        Cart.addItem(item,1)
    }
};