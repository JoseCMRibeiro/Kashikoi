import DOMPurifyI  from "dompurify";
import { createProductCard } from "../Components/renderShopCard";
import { getStoredProducts } from "../modules/localeStorage";
import { ShoppingCart} from "../modules/classCart"
import { ModalProduct } from "../Components/renderProductModal";
import { messageModal } from "../Components/renderMessageModal";
import { productReview } from "../Components/renderClassificacaoModal";
import { renderSearch } from "../Components/renderSearch";

        /////////////
            Shop();//  
        /////////////



async function Shop()
{
        const Cart = new ShoppingCart()        
        const products = await getStoredProducts()
        Cart.products = await products;

        const main= document.getElementById("main")
        const cardGrid = document.createElement("div")
        cardGrid.classList.add("grid-container")
        const search = document.getElementById("search")
        
        renderCards()

        //************************************************************************ */
        //************************************************************************ */
        //************************************************************************ */

        async function renderCards(productsToRender)
        {
            const products = productsToRender || Cart.products;

            for (var i = 0; i < products.length; i++)
                cardGrid.appendChild(createProductCard(products[i]));
            main.appendChild(cardGrid); 
            
            //adding listeners to product cards
            const cardImages = document.querySelectorAll('img')
            cardImages.forEach(cardImage => {cardImage.addEventListener('click', cardClick)});
            
            //adding listeners to product cardIcon
            const cartIcons = document.querySelectorAll('.fa-cart-plus')
            cartIcons.forEach(icon => {icon.addEventListener('click', iconClick)});
            
            //adding listeners to stars
            const cartStars = document.querySelectorAll(".starsContainer")
            cartStars.forEach(stars => {stars.addEventListener('click', starClick)});  
        }//----------------------------------------------------------------------------------------------------

        //search listener
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
            else if (length===0 && (cardGrid.innerHTML==="" || cardGrid.childElementCount>0))
            {       
                cardGrid.innerHTML=""
                renderCards(Cart.products)
            }
        });//-----------------------------------------------------------------------------------------

        //card clicks to show reviews
        function cardClick(event)
        {       
            const item = matchItem(event.currentTarget.id)
            ModalProduct(item)
        };//-----------------------------------------------------------------------------------------

        //star click to insert review
        function starClick(event)
        {    
            const item = matchItem(event.currentTarget.id)
            productReview(item)   
        }//-----------------------------------------------------------------------------------------

        //cart click to add to cart
        function iconClick(event)
        {    
            const item = matchItem(event.currentTarget.id)

            if(item.quantity <= item.quantityInCart)
                messageModal("OUT OF STOCK")
            else
            {
                Cart.addItem(item,1)
                messageModal(item.name, "was added to your cart")
            }
        }//---------------------------------------------------------------------------------------------

        //go to cart button
        buttonCart.onclick = function()
        {
            window.location.href = '/pages/cart.html';
        };//-------------------------------------------------------------------------------------------------

        //search products
        function searchProductGrid(searchItem)
        {  
                
                //filtra os produtos com base na pesquisa
                const filteredProducts = Cart.products.filter(product => {
                    const productName = product.name.toLowerCase();
                    return productName.includes(searchItem.toLowerCase());
                });    

                renderCards(filteredProducts)

                if(filteredProducts.length==0)
                    return false
                else
                    return true        
        }//----------------------------------------------------------------------------------------------------------------

        //removes spaces from search count
        function countSpaces(str) {
            const spacesRegex = /\s/g;
            const matches = str.match(spacesRegex);
            return matches ? matches.length : 0;
        }//-----------------------------------------------------------------------------------------------------

        //match event to product
        function matchItem(eventTarget)
        {
            var item
            for(var i=0; i < Cart.products.length;i++)
            {    
                if(eventTarget==Cart.products[i].id)
                {
                    item=Cart.products[i]           
                    i=Cart.products.length;
                }
            }
            return item
        }
}