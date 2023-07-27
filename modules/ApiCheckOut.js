import {API_COUPON} from '../kashikoi.env'
import {API_CHECKOUT} from '../kashikoi.env'
import { messageModal } from '../Components/renderMessageModal'

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
export async function checkOut(coupon,items ) 
{

  const products = 
  {
    products: items,
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
   messageModal("CHECKOUT",error)
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
    messageModal("COUPON",error)
    return false
  }
}