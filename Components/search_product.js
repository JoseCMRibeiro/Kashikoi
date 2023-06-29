import { createCard } from './cardProducts.js';

const searchInput = document.querySelector('.search');
const productsContainer = document.querySelector('.DataGridProducts');

searchInput.addEventListener('input', handleSearch);

async function handleSearch() {
  const searchValue = searchInput.value.trim().toLowerCase();
  if (searchValue.length < 3) {
    // Limpar a lista de produtos se a pesquisa estiver vazia
    productsContainer.innerHTML = ' <h2> Product not found </h2>';
    return;
  }

  const jsonProducts = localStorage.getItem("products");
    const products = JSON.parse(jsonProducts);

  const filteredProducts = products.filter((product) => {
    const productName = product.name.toLowerCase();
    return productName.includes(searchValue);
  });

  renderProducts(filteredProducts);
}

function renderProducts(products) {
  productsContainer.innerHTML = '';

  products.forEach((product) => {
    const card = createCard(product);
    productsContainer.appendChild(card);
  });
}
