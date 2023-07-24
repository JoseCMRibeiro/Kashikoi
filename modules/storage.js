import {STORAGE_USERS} from '../kashikoi.env'
import {STORAGE_REVIEWS} from '../kashikoi.env'
import {STORAGE_PRODUCTS} from '../kashikoi.env'
import { fetchusers } from './ApiUsers'
import { fetchProducts } from './ApiProducts'
//import { checkCoupon,checkout } from './ApiCheckOut'


//*******************************************************/
//***************        USERS     **********************/
//*******************************************************/
export async function getStoredUsers()
{
    const users = localStorage.getItem(STORAGE_USERS)
    if(users)
        return JSON.parse(users)
    else
    {
        const users = await callApiUsers();  
        return users;      
    }
}//---------------------------------------------
export function setStoredUsers(users)
{    
    localStorage.setItem(STORAGE_USERS, users); 
}//-----------------------------------------------

async function callApiUsers()
{
    const usersJson = await fetchusers();
    setStoredUsers(JSON.stringify(usersJson));
    return usersJson;
}
//*******************************************************/
//***************     PRODUCTS     **********************/
//*******************************************************/
export function updateProducts(products)
{
    localStorage.removeItem(STORAGE_PRODUCTS)    
    setStoredProductes(products);
}//------------------------------------------------

export function setStoredProductes(products)
{
    localStorage.setItem(STORAGE_PRODUCTS, products); 
}//-----------------------------------------------

export async function getStoredProducts()
{
    const products = localStorage.getItem(STORAGE_PRODUCTS)
    if(products)
        return JSON.parse(products)
    else
    {
        
        const products = await callApiProducts();  
        for (var i = 0; i < products.length; i++)
        {
            products[i].quantityInCart = 0
            products[i].productIndex = i
        }
        
        if(products)
        setStoredProductes(JSON.stringify(products));
        return products;      
    }
}//----------------------------------------------------

async function callApiProducts()
{
    const productsJson = await fetchProducts();
    return productsJson;
}//----------------------------------------------------