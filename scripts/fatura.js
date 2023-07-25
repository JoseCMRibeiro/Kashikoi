import { getStoredProducts } from "../modules/localeStorage"
const linhafatura = document.getElementById("linhafatura")



getLines()


async function getLines()
{

    const storedProducts= await getStoredProducts()
    for (var i = 0; i < storedProducts.length;i++)
    {        
    console.log(storedProducts[i].quantityInCart)
    console.log(storedProducts[i].name)
    const linhadiv = document.createElement('div')
    const linhap = document.createElement('p')
    linhap.textContent =storedProducts[i].name
    linhafatura.appendChild(linhap)
    }   

}


