import DOMPurify from 'dompurify'
import { checkCoupon, checkout ,fetchProducts} from './productsApi'
import { messageModal } from './modalMessage'

const total= document.getElementById("precototal")
const final = document.getElementById("precoFinal")
const desconto = document.getElementById("desconto")
const cupon = document.getElementById("cupon")


export class CheckOut
{
    constructor()//construtor 
    {             
      const armazemStorage = localStorage.getItem('products')
      if(armazemStorage)
        this.armazem = JSON.parse(armazemStorage)
      else
        this.armazem =[];//array de produtos na loja 
    }

    async addCoupon(codigo)     
    { 
      if(cupon.value.length>0)
      {
          const response=await checkCoupon(codigo) 
          if( response.discount) 
            {
              desconto.textContent=response.discount
              final.textContent=(parseFloat(total.textContent)*(100-parseFloat(response.discount))/100).toFixed(2)
            }
          else
            {              
              cupon.value="";
              desconto.textContent="0.00"
              final.textContent=total.textContent;
              RenderModal("COUPON INVALIDO",response.error)
            }
      }
      else
      {        
        cupon.value="";
        desconto.textContent="0.00"
        final.textContent=total.textContent;
      }
    }

    async efetuarPagamento()
    {
       let discount
      if(cupon.value)
         discount=cupon.value
      else
         discount = ""
      
    const data = await checkout(discount)//chamada a api    ~

    

      
    messageModal("OBRIGADO PELA SUA VISITA",JSON.stringify(data))


    localStorage.removeItem("products")
    }    
}

