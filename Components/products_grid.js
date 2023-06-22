import { RenderCard } from './product_card.js'

export function RenderCardGrid()
{       
    
    const json_products = localStorage.getItem("products");
    const product=JSON.parse(json_products)

    //create elements
    const cardGrid = document.createElement('div');    
    const gridContainer = document.createElement('div');
    
    //types and ID
    cardGrid.id = "cardGridId";
    gridContainer.id = "gridContainer";

    
    //add css
    cardGrid.classList.add('card_grid');  
    gridContainer.classList.add('grid_Container')    


    for(let i = 0; i < 6; i++)
    {
        cardGrid.appendChild( RenderCard(product[i].name,product[i].price,product[i].image,product[i].id) )
    }
    gridContainer.appendChild(cardGrid);    
    
    return gridContainer;
}