images.forEach(image => 
  {
    image.addEventListener('click', () => 
    {
      let novo=true;
      for (var i= 0; i < Cart.items.length;i++)
      {
        const index=parseInt(image.alt)
        if(products[index])
        if(index==Cart.items[i].id)
        {
          RenderModal("O ARTIGO JÁ EXISTE NO CESTO", "Pode ajustar a quantidade pretendida no cesto")
          novo=false;
          i=Cart.items.length;
        }
      }
      if(novo)
      {

        Cart.addItem(image.alt,1)
        btSubmit.click()
      }
    });
  });
