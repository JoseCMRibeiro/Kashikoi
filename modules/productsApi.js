import {API_PRODUCTS} from '../kashikoi.env'
import {API_CHECKOUT} from '../kashikoi.env'
import {API_COUPON} from '../kashikoi.env'


export async function fetchProducts() 
{
  try 
  {
    const response = await fetch(API_PRODUCTS);///get list of products
    
    const array_response = await response.json();
    return array_response;//return array with list of products

  } 
  catch (error) 
  {
    console.error('Error fetching products:', error.message);
    throw error;
  }
}
////////////////////////////
////////////////////////////
//                        //
//  products FORMAT       //   
//                        //
// const products =       //
// {                      //
//   "products":          //
//   [                    //
//     {                  //
//       "id": 1,         //
//       "quantity": 2    //
//     },                 //
//     {                  //
//       "id": 2,         //
//       "quantity": 1    //
//     }                  //  
//   ],                   //
//   "coupon": "TWXTQVQ"  //  
//  }                     //
////////////////////////////
////////////////////////////
export async function checkout(coupon) 
{

  let items=[]
  let productsStorage = localStorage.getItem('products')
  
  if(productsStorage)
    items=JSON.parse(productsStorage)

  const simplifiedProducts = items.map(({ id, quantityInCart }) => ({ id, quantity: quantityInCart }));//cria um novo JSON com apenas os atributos necessarios para checkout
  const cleanProducts = simplifiedProducts.filter(item => item.quantity > 0);//remove produtos a zero

  const products = 
  {
    products: cleanProducts,
    coupon: coupon
  }

  try 
  {
    const response = await fetch(API_CHECKOUT, 
    {
      method: 'post',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify(products)
    });

    const data = await response.json();
    return data
  } 
  catch (error) 
  {
    console.log(error);
  }
}
////////////////////////////////
////////////////////////////////
//                            //
//  COUPON FORMAT             //
//  const coupon =            //
//  {                         //
//   "couponCode": "TWXTQVQ"  //  
//  }                         //
//                            //
////////////////////////////////
////////////////////////////////
export async function checkCoupon(text) 
{


  const coupon=
  {
    "couponCode": text
  }

  try 
  {
    const response = await fetch(API_COUPON, 
    {
      method: 'post',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify(coupon)
    });

    const data = await response.json();
    console.log(data);
    return data;
  }
  catch (error) 
  {
    console.error(error);
  }
}/////////////////////////////////////////////////////////////