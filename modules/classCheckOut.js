import { getStoredProducts } from './localeStorage'
import { checkCoupon, checkout} from './ApiCheckOut'
import { refreshProductStorage } from './localeStorage'
import { messageModal } from '../Components/renderMessageModal'
import { checkCart } from '../scripts/cart'

const total= document.getElementById("totalPrice")
const final = document.getElementById("total")
const discount = document.getElementById("discount")
const cupon = document.getElementById("cupon")


export class CheckOut
{
    async addCoupon(codigo)     
    { 
      if(cupon.value.length>0)
      {
          const response=await checkCoupon(codigo) 
          if( response.discount) 
            {
              discount.textContent=response.discount
              final.textContent=(parseFloat(total.textContent)*(100-parseFloat(response.discount))/100).toFixed(2)
            }
          else
            {              
              cupon.value="";
              discount.textContent="0.00"
              final.textContent=total.textContent;
              messageModal("COUPON INVALID",response.error)
            }
      }
      else
      {        
        cupon.value="";
        discount.textContent="0.00"
        final.textContent=total.textContent;
      }
    }//----------------------------------------------------------------------

    async makePurchase()
    {
          const productsStorage = await getStoredProducts()

          let discount
          if(cupon.value)
            discount=cupon.value
          else
            discount = ""

          const data = await checkout(discount,productsStorage)

          if(data)
          {      
              messageModal("We cant wait to see YOU again",JSON.stringify(data))
              refreshProductStorage()
              checkCart()
          }
      }//------------------------------------------------------------
}

