import {STORAGE_USERS} from '../kashikoi.env'
import {STORAGE_REVIEWS} from '../kashikoi.env'
import {STORAGE_PRODUCTS} from '../kashikoi.env'
import { fetchProducts } from './ApiProducts'
import { fetchusers } from './ApiUsers'


//*******************************************************/
//***************        USERS     **********************/
//*******************************************************/
export  function getStoredUsers()
{
    const users = localStorage.getItem(STORAGE_USERS)
    if(users)
        return JSON.parse(users)
    else
    {
        const users =  callApiUsers();  
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

export function setStoredProductes(products)
{
    localStorage.setItem(STORAGE_PRODUCTS, products); 
}//-----------------------------------------------

export  async function getStoredProducts()
{
    const products =  localStorage.getItem(STORAGE_PRODUCTS)
    if(products)
    {
      const productsJson =  JSON.parse(products)
      return  productsJson  
    }
    
    else
    {        
        const products =  await callApiProducts();        
        if(products)
        {            
            for (var i = 0; i < products.length; i++)
            {
                products[i].quantityInCart = 0
                products[i].productIndex = i
            }             
            setStoredProductes(JSON.stringify(products));
            return products;  
        }    
    }
}//----------------------------------------------------

export function refreshProductStorage()
{
    localStorage.removeItem(STORAGE_PRODUCTS);    
    const cart = document.getElementById("Cart")    
    cart.innerHTML = "";
    getStoredProducts();
}//-----------------------------------------------------

async function callApiProducts()
{
    const productsJson = await fetchProducts();
    return productsJson;
}//---------------------------------------------------------

//*******************************************************/
//***************      REVIEWS     **********************/
//*******************************************************/

export function getProductReview(id) 
{
  const data = localStorage.getItem(STORAGE_REVIEWS);
  if (data)
  {
  const dataJson = JSON.parse(data)
    for (let i = 0; i < dataJson.length; i++) 
      if (dataJson[i].productID === id) 
          return dataJson[i];    
  }
  else
    return null; 
}//---------------------------------------------------------------

export function SetRatingReviews(ID,name,rating,review)
{
  var productReview = 
      { 
        productID: ID, 
        numberOfStars: rating,
        reviews: 
        [
          { name: name, review: review, rating: rating }
        ]
      }

  const data = localStorage.getItem(STORAGE_REVIEWS);
  if (data)    
    {    
        let storedRatings= [] 

        const jsonData=JSON.parse(data)
        if(jsonData.length>0)          
          storedRatings = JSON.parse(data)
        else
          storedRatings.push(JSON.parse(data))

        const existingProductIndex = storedRatings.findIndex(review => review.productID === productReview.productID);  
        
        if (existingProductIndex === -1) 
        {      
          storedRatings.push(productReview)
          localStorage.setItem(STORAGE_REVIEWS, JSON.stringify(storedRatings));          
        } 
        else 
        {          
          storedRatings[existingProductIndex].numberOfStars+=rating
          const novaReview = { name,review, rating };
          storedRatings[existingProductIndex].reviews.push(novaReview);
          localStorage.setItem(STORAGE_REVIEWS, JSON.stringify(storedRatings));      
        }
    }
    else //stores first review
    {
      const reviews  = [productReview];
      localStorage.setItem(STORAGE_REVIEWS, JSON.stringify(reviews));
    }
  }//------------------------------------------------------------------


  