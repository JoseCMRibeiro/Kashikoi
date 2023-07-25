import {STORAGE_PRODUCTS} from '../kashikoi.env'
import { getStoredProducts } from './localeStorage'
import { checkCoupon, checkout} from './ApiCheckOut'
import { refreshProductStorage } from './localeStorage'
import { messageModal } from '../Components/renderMessageModal'

const total= document.getElementById("totalPrice")
const final = document.getElementById("total")
const discount = document.getElementById("discount")
const cupon = document.getElementById("cupon")


export class CheckOut
{
    constructor()//construtor 
    {   
      const storage = localStorage.getItem(STORAGE_PRODUCTS)
      if(storage)
        this.storage = JSON.parse(storage)
      else
        this.storage =[];
    }//////////////////////////////////////////////////////////////////////////

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
              messageModal("COUPON INVALIDO",response.error)
            }
      }
      else
      {        
        cupon.value="";
        discount.textContent="0.00"
        final.textContent=total.textContent;
      }
    }//----------------------------------------------------------------------

    async payment()
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
          }
      }//------------------------------------------------------------
//////////////////////////////////////////////////////////////////    
}

