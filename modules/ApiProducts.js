import {API_PRODUCTS} from '../kashikoi.env'
import { messageModal } from '../Components/renderMessageModal';

export async function fetchProducts() 
{
  try 
  {
    const response = await fetch(API_PRODUCTS);///get list of products
    
    if (!response.ok) 
      throw new Error('Fetch Api Error');      
    else 
    {
      const productsJson = await response.json();
      return productsJson//return array with list of products
    } 
  } 
  catch (error) 
  {    
    messageModal("PRODUCTS", error.message)
    return false
  }
}