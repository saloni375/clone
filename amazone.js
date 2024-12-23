// JavaScript code for Amazon clone

// Function to handle search
function searchAmazon() {
    var searchInput = document.querySelector('.search-input').value;
    // You can perform search functionality here, like redirecting to search results page or showing search suggestions.
    console.log('Searching for:', searchInput);
}

// Function to handle sign-in
function signIn() {
    // You can add sign-in functionality here, like redirecting to sign-in page or showing sign-in modal.
    console.log('Signing in...');
}

// Function to handle view cart
function viewCart() {
    // You can add functionality to view cart here, like redirecting to cart page or showing cart modal.
    console.log('Viewing cart...');
}

// Function to handle clicking on "See more" buttons
function seeMore(category) {
    // You can add functionality here to redirect to a specific category page or show more products.
    console.log('Seeing more products in', category);
}

// Function to handle clicking on "Back to Top" button
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listeners
document.querySelector('.search-icon').addEventListener('click', searchAmazon);
document.querySelector('.nav-signin').addEventListener('click', signIn);
document.querySelector('.nav-cart').addEventListener('click', viewCart);
document.querySelector('.foot-panell').addEventListener('click', backToTop);

// You can add more event listeners for other interactive elements as needed.





// Sample order data
const orders = [
    {
      id: 1,
      products: [
        { id: 1, name: 'Product 1', price: 19.99 },
        { id: 2, name: 'Product 2', price: 29.99 }
      ],
      totalPrice: 49.98,
      date: '2024-05-07',
      status: 'Delivered'
    },
    // Add more orders as needed
  ];
  
  // Function to render order history
  function renderOrderHistory(orders) {
    const orderHistoryElement = document.getElementById('order-history');
    orderHistoryElement.innerHTML = ''; // Clear previous content
  
    orders.forEach(order => {
      const orderCard = document.createElement('div');
      orderCard.classList.add('order-card');
  
      const productsList = order.products.map(product => `${product.name} ($${product.price})`).join(', ');
  
      orderCard.innerHTML = `
        <h3>Order ID: ${order.id}</h3>
        <p>Products: ${productsList}</p>
        <p>Total Price: $${order.totalPrice}</p>
        <p>Date: ${order.date}</p>
        <p>Status: ${order.status}</p>
      `;
  
      orderHistoryElement.appendChild(orderCard);
    });
  }
  
  // Call renderOrderHistory function with the order data
  renderOrderHistory(orders);
  