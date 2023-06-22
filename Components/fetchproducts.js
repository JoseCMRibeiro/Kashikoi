
export async function fetchProducts() //
{
  try {
    const response = await fetch('http://127.0.0.1:3333/products');///get list of products
    
    const array_response = await response.json();

    console.log(array_response);
    return array_response;//return array with list of products

  } 
  catch (error) 
  {
    console.error('Error fetching products:', error.message);
    throw error;
  }
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////  


//const products = fetchProducts();

const coupon =
{
  "couponCode": "TWXTQVQ"
}
//const coupon_check = check_coupon(coupon);


const cart =
{
  "products": 
  [
    {
      "id": 1,
      "quantity": 2
    },
    {
      "id": 2,
      "quantity": 1
    }
  ],
  "coupon": "TWXTQVQ"  //discount coupon
}
//const response = checkout(cart);



//******************************************************************************************** */
  
async function checkout(cart) 
{

  const url = 'http://127.0.0.1:3333/checkout';

  try 
  {
    const response = await fetch(url, 
    {
      method: 'post',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify(cart)
    });

    const data = await response.json();
    console.log(data);
  } 
  catch (error) 
  {
    console.error(error);
  }
}
////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////    
async function check_coupon(coupon) 
{
//-------------------------------------------------------

  const url = 'http://127.0.0.1:3333/check-coupon';
//-------------------------------------------------------
  try 
  {
    const response = await fetch(url, 
    {
      method: 'post',
      headers: {'Accept': 'application/json','Content-Type': 'application/json'},
      body: JSON.stringify(coupon)
    });

    const data = await response.json();
    console.log(data);
  }
  catch (error) 
  {
    console.error(error);
  }
}

