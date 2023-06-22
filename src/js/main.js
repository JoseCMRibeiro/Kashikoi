// Import our custom CSS
import '../scss/styles.scss';
import '../scss/grid.css';
// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'



const app = document.getElementById('app');

import { fetchProducts } from '../../Components/fetchproducts.js';
import { RenderCardGrid } from '../../Components/products_grid.js';



mainFunction();


async function mainFunction()
{
    try
    {        
        const products = await fetchProducts();
        const product_storage = JSON.stringify(products);
        localStorage.setItem("products", product_storage);
        const card_grid=RenderCardGrid();
        app.appendChild(card_grid)


    }
    catch(error)
    {
        console.log(error);
    }
}

