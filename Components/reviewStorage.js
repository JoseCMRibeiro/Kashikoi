//retorna review do artigo pela id
export function getProductReview(id) 
{
  const data = localStorage.getItem('reviews');
  if (data)
  {
  const dataJson = JSON.parse(data)
  for (let i = 0; i < dataJson.length; i++) 
      if (dataJson[i].productID === id) 
          return dataJson[i];//review do produto
    
  }
  else
  return null; 
}
//-------------------------------------------------------------
//          Armazena classificações 
//-------------------------------------------------------------
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
  if (data) //storage não nula    
  {    
        let storedRatings= [] //cria array de reviews

        const jsonData=JSON.parse(data)
        if(jsonData.length>0)          
          storedRatings = JSON.parse(data)
        else
          storedRatings.push(JSON.parse(data))

        //vereficar se produto já existe        
        const existingProductIndex = storedRatings.findIndex(review => review.productID === productReview.productID);  
        
        if (existingProductIndex === -1) 
        {      
          storedRatings.push(productReview)
          const jsonAtualizado = JSON.stringify(storedRatings);
          localStorage.setItem('reviews', jsonAtualizado);      
        } 
        else //adiciona novo rating ao produto caso o produto já tenha ratings
        {          
          storedRatings[existingProductIndex].totalEstrelas+=rating
          const novaReview = { nome,comentario, rating };
          storedRatings[existingProductIndex].reviews.push(novaReview);
          const jsonAtualizado = JSON.stringify(storedRatings);
          localStorage.setItem('reviews', jsonAtualizado);
        }
    }
    else //storage vazia adicionar primeira review
      localStorage.setItem('reviews', JSON.stringify(productReview));
  }