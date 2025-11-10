// Load products from localStorage or use sample data
function loadProducts() {
  const productsList = document.getElementById('products-list');
  let products = JSON.parse(localStorage.getItem('tara_products')) || [
    { name: 'Signature Handbag', description: 'Exquisitely crafted Italian leather with gold accents', price: 3200, image: 'https://via.placeholder.com/230x280?text=Handbag' },
    { name: 'Luxury Silk Scarf', description: 'Handmade silk with exclusive TARA print', price: 780, image: 'https://via.placeholder.com/230x280?text=Scarf' },
    { name: 'Designer Clutch', description: 'Premium leather clutch with diamond pattern', price: 1850, image: 'https://via.placeholder.com/230x280?text=Clutch' }
  ];
  
  productsList.innerHTML = '';
  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <p style="font-weight: bold; margin-top: 1em;">$${product.price}</p>
    `;
    productsList.appendChild(card);
  });
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', loadProducts);

// Admin function to add products (localStorage)
function addProductAdmin(name, description, price, image) {
  let products = JSON.parse(localStorage.getItem('tara_products')) || [];
  products.push({ name, description, price, image });
  localStorage.setItem('tara_products', JSON.stringify(products));
  loadProducts();
}
