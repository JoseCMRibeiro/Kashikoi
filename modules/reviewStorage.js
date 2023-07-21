export function getProductReview(id) 
{
  const data = localStorage.getItem('reviews');
  if (data)
  {
  const dataJson = JSON.parse(data)
    for (let i = 0; i < dataJson.length; i++) 
      if (dataJson[i].productID === id) 
          return dataJson[i];
    
  }
  else
  return null; 
}/////////////////////////////////////////////////////////////

export function ratingStorage(ID,nome,rating,comentario)
{
  var productReview = 
      { 
        productID: ID, 
        totalEstrelas: rating,
        reviews: 
        [
          { nome: nome, comentario: comentario, rating: rating }
        ]
      }

  const data = localStorage.getItem('reviews');
  if (data)    
    {    
        let storedRatings= [] 

        const jsonData=JSON.parse(data)
        if(jsonData.length>0)          
          storedRatings = JSON.parse(data)
        else
          storedRatings.push(JSON.parse(data))

        const existingProductIndex = storedRatings.findIndex(review => review.productID === productReview.productID);  
        
        if (existingProductIndex === -1) 
        {      
          storedRatings.push(productReview)
          const jsonAtualizado = JSON.stringify(storedRatings);
          localStorage.setItem('reviews', jsonAtualizado);      
        } 
        else 
        {          
          storedRatings[existingProductIndex].totalEstrelas+=rating
          const novaReview = { nome,comentario, rating };
          storedRatings[existingProductIndex].reviews.push(novaReview);
          const jsonAtualizado = JSON.stringify(storedRatings);
          localStorage.setItem('reviews', jsonAtualizado);
        }
    }
    else //stores first review
    {
      const reviews  = [productReview];
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  }////////////////////////////////////////////////////////////