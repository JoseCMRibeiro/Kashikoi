import { RenderCard } from "./product_card";

export function updateProductGrid(searchItem){
    //obtem os produtos no localStorage
    if(searchItem.length >= 3){   
    const jsonProducts = localStorage.getItem("products");
    const products = JSON.parse(jsonProducts);  //convert string to json

    //filtra os produtos com base a pesquisa
    const filteredProducts = products.filter(product => {
        const productName = product.name.toLowerCase(); 
        return productName.includes(searchItem.toLowerCase());
    });

    console.log(filteredProducts);

    //obtem o elementos da grid e limpa
    const cardGrid = document.getElementById("cardGridId");
    cardGrid.innerHTML = "";

    //
    filteredProducts.forEach(product => { 
        const {title,price,imageUrl,id} = product; //desestruturação dos dados do produto
        const card = RenderCard(title,price,imageUrl,id); //cria o card com os dados do produto
        cardGrid.appendChild(card); //adiciona o card na grid

    });
    }
}
