import { getStoredProducts } from './localeStorage'
import { checkCoupon, checkOut} from './ApiCheckOut'
import { refreshProductStorage } from './localeStorage'
import { messageModal } from '../Components/renderMessageModal'
import { checkCart } from '../scripts/cart'

const total= document.getElementById("totalPrice")
const final = document.getElementById("total")
const discount = document.getElementById("discount")
const coupon = document.getElementById("coupon")


export class CheckOut
{
    async validadeCoupon(codigo)     
    {       
      if(coupon.value.length>0)
      {
          const response=await checkCoupon(codigo) 
          if( response.discount) 
            {
              discount.textContent=response.discount + " %"              
              const finalPrice=(parseFloat(total.textContent.replace("€", ""))*(100-response.discount)/100)
              final.textContent=finalPrice.toFixed(2)
            }
          else
            {              
              coupon.value="COUPON INVALID";
              discount.textContent="0.00"
              final.textContent=total.textContent;
              messageModal("COUPON INVALID",response.error)
            }
      }
      else
      {        
        coupon.value="";
        discount.textContent="0.00"
        final.textContent=total.textContent;
      }
    }//----------------------------------------------------------------------

    async makePurchase()
    {
          const productsStorage = await getStoredProducts()
          const productsToSell = await packToSell(productsStorage)

          if(productsToSell==null)
            //empty cart
            {
              messageModal("YOUR CART IS EMPTY")
              return null
            }          

          let couponCode
          if(coupon.value && coupon.value!="COUPON INVALID")
            couponCode=coupon.value
          else
            couponCode=""

          const dataJson = await checkOut(couponCode,productsToSell)
          if(!dataJson.error && dataJson.success) 
          {      
              total.textContent = "€ 0.00"
              final.textContent = "€ 0.00"
              discount.textContent = "0.00"
              coupon.value = ""
            
              messageModal("fatura")
              refreshProductStorage()

              //window.location.href = '/pages/shop.html';
              checkCart()
          }
          else
            messageModal(dataJson.error)
      }//------------------------------------------------------------

}//------------------------------------------------------------------

export async function packToSell(items)
{
    //builds JSON with only the required data
    const simplifiedProducts = items.map(({ id, quantityInCart }) => ({ id, quantity: quantityInCart }));
    //removes products with quantity=0
    const itemsInCart = simplifiedProducts.filter(item => item.quantity > 0);

    if(itemsInCart.length==0)     
      return null
    else 
      return itemsInCart
} 