import {API_CHECKOUT} from '../kashikoi.env'
import {API_COUPON} from '../kashikoi.env'
import { getStoredProducts } from './localeStorage'

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
  let productsStorage = getStoredProducts()
  
  if(productsStorage.PromiseResult)
    items=JSON.parse(PromiseResult)

  const simplifiedProducts = items.map(({ id, quantityInCart }) => ({ id, quantity: quantityInCart }));//builds JSON with only the required data
  const cleanProducts = simplifiedProducts.filter(item => item.quantity > 0);//removes products with quantity=0

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

    const responseJson = await response.json();
    return responseJson;
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
    const responseJson = await response.json();
    return responseJson;
  }
  catch (error) 
  {
    console.error(error);
  }
}