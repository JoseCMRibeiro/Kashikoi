import { checkCoupon, checkout} from './ApiCheckOut'
import { messageModal } from '../Components/renderMessageModal'
import { refreshProductStorage } from './localeStorage'

const total= document.getElementById("precototal")
const final = document.getElementById("precoFinal")
const discount = document.getElementById("discount")
const cupon = document.getElementById("cupon")


export class CheckOut
{
    constructor()//construtor 
    {             
      const storage = localStorage.getItem('products')
      if(storage)
        this.storage = JSON.parse(storage)
      else
        this.storage =[];//
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
    }//////////////////////////////////////////////////////////////////////////

    async payment()
    {
      let discount
      if(cupon.value)
         discount=cupon.value
      else
         discount = ""
    const data = await checkout(discount)

    messageModal("OBRIGADO PELA SUA VISITA",JSON.stringify(data))
    refreshProductStorage()

    }//////////////////////////////////////////////////////////////////////////    
}

