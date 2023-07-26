import DOMPurifyI  from "dompurify";
import { createProductCard } from "../Components/renderShopCard";
import { ShoppingCart} from "../modules/classCart"
import { ModalProduct } from "../Components/renderProductModal";
import { messageModal } from "../Components/renderMessageModal";
import { ligthStars } from "../Components/renderClassificacaoModal";
import { renderSearch } from "../Components/renderSearch";
import { getStoredProducts } from "../modules/localeStorage";

const Cart = new ShoppingCart()
const main= document.getElementById("main")
const cardGrid = document.createElement("div")
cardGrid.classList.add("grid-container")

renderCards(Cart.products)


//adding listener to search
const search = document.getElementById("search")

search.addEventListener("keyup", function(event) 
{
    const length=search.value.length - countSpaces(search.value)
    const filteredValue = DOMPurifyI.sanitize(search.value.replace(/[^a-zA-Z0-9]/g, ''));
    if(length >0 && length<3)   
    { 
        cardGrid.innerHTML=""
        cardGrid.appendChild(renderSearch());
    }
        
    else if(length > 2 )
    {        
        cardGrid.innerHTML=""
        if(!searchProductGrid(filteredValue))
            cardGrid.appendChild(renderSearch());
        else
        {            
            cardGrid.innerHTML=""
            searchProductGrid(filteredValue)
        }        
    }
    else if (length==0 && (cardGrid.innerHTML=="" || cardGrid.childElementCount>0))
    {       
        cardGrid.innerHTML=""
        renderCards(Cart.products)
    }
});
//-----------------------------------------------------------------------------------------
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
//-----------------------------------------------------------------------------------------
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
        messageModal("OUT OF STOCK")
    }
    else
    {
        Cart.addItem(item,1)
        messageModal(item.name, "was added to your cart")
    }
}
//---------------------------------------------------------------------------------------------
buttonCart.onclick = function()
{
    window.location.href = '/pages/cart.html';
};
//-------------------------------------------------------------------------------------------------
function renderCards( products)
{
    for (var i = 0; i < products.length;i++)
        cardGrid.appendChild(createProductCard(products[i]))

    main.appendChild(cardGrid)    
    //adding listeners to product cards
    const cardImages = document.querySelectorAll('img')
    cardImages.forEach(cardImage => {cardImage.addEventListener('click', cardClick)});
    //adding listeners to product cardIcon
    const cartIcons = document.querySelectorAll('.fa-cart-plus')
    cartIcons.forEach(icon => {icon.addEventListener('click', iconClick)});
    //adding listeners to stars
    const stars = document.querySelectorAll(".starsContainer")    

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
          starClick(products[stars[index].id]); // Pass the index as an argument to starClick
        });
      });
}
//----------------------------------------------------------------------------------------------------
function searchProductGrid(searchItem)
{  
        const products=Cart.products

        //filtra os produtos com base na pesquisa
        const filteredProducts = products.filter(product => 
        {
            const productName = product.name.toLowerCase(); 
            return productName.includes(searchItem.toLowerCase());
        });     

        renderCards(filteredProducts)

        if(filteredProducts.length==0)
            return false
        else
            return true        
}
//----------------------------------------------------------------------------------------------------------------
function starClick(item)
{    
    ligthStars(item)
}
//----------------------------------------------------------------------------------------------------------------
function countSpaces(str) {
    const spacesRegex = /\s/g;
    const matches = str.match(spacesRegex);
    return matches ? matches.length : 0;
}//-----------------------------------------------------------------------------------------------------
window.onresize = handleResize;
handleResize();
function handleResize() {
    if (window.innerWidth < 600) 
    {
        document.body.style.minHeight = '105vh';
    } 
    else 
    {     
        document.body.style.minHeight = '100vh';
    }
}
