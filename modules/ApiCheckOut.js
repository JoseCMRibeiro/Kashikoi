import {API_CHECKOUT} from '../kashikoi.env'
import {API_COUPON} from '../kashikoi.env'
import { getStoredProducts } from './storage'

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

    return response.json();
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
    return response.json();
  }
  catch (error) 
  {
    console.error(error);
  }
}