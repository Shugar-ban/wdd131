document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.querySelector('.product-grid');
    const navigationLinks = document.querySelectorAll('nav a');

    // Sample product data (objects in an array)
    const products = [
        { id: 1, name: 'Hp Zbook Firefly 15 G7', price: 580, image: 'images/IMG-20250409-WA0042.webp', description: 'Intel core i7 10th generation processor.' },
        { id: 2, name: 'Msi GP62 Gaming', price: 750, image: 'images/IMG-20250409-WA0048.webp', description: 'Intel core i7 7th generation processor' },
        { id: 3, name: 'Iphone 16Pro', price: 1.390 , image: 'images/IMG-20250409-WA0046.webp', description: 'Esim Unlocked' },
        { id: 4, name: 'Samsung S20 FE', price: 240, image: 'images/IMG-20250409-WA0049.webp', description: '(128GB + 6GB RAM, 4G LTE' },
        { id: 5, name: 'Dell XPS 13', price: 1.75, image: 'images/IMG-20250409-WA0053.webp', description: 'Intel core i7-1260P, 16GB Ram, 512GB SSD' },
        { id: 6, name: 'Iphone 12 Pro Max', price: 680, image: 'images/IMG-20250409-WA0062.webp', description: '256GB Dual Sim' },
        { id: 7, name: 'Iphone 15 Pro Max', price: 1.3, image: 'images/IMG-20250410-WA0012.webp', description: 'Esim Unlocked' },
        { id: 8, name: 'Samsung Watch Ultra 47MM', price: 650, image: 'images/IMG-20250411-WA0012.webp', description: 'Brand New' },
        { id: 9, name: 'Iwatch Ultra 49MM', price: 600, image: 'images/IMG-20250411-WA0014.webp', description: 'Uk used' },
        { id: 9, name: 'JBL Charge 6 Speaker', price: 245, image: 'images/IMG-20250411-WA0017.webp', description: 'Brand New' },
        { id: 9, name: 'Iphone 15 Pro Max', price: 790, image: 'images/IMG-20250411-WA0018.webp', description: 'Esim Locked' },
        { id: 9, name: 'Realme 9', price: 153, image: 'images/IMG-20250411-WA0000.webp', description: 'Uk used' },
        // Add more product objects here
    ];

    // Function to generate product HTML using template literals
    function createProductCard(product) {
        return `
            <div class="product-item">
                <img data-src="${product.image}" alt="${product.name}" width="300" height="200">
                <h3>${product.name}</h3>
                <p class="product-info">Price: $${product.price.toFixed(2)}</p>
                <button class="view-details" data-id="${product.id}">View Details</button>
            </div>
        `;
    }

    // Function to render products to the grid
    function renderProducts(productList) {
        productGrid.innerHTML = ''; // Clear existing content
        productList.forEach(product => {
            productGrid.innerHTML += createProductCard(product);
        });
        observeImages(); // Initialize lazy loading for newly added images
        attachDetailButtonListeners(); // Attach listeners to detail buttons
    }

    // Initial rendering of all products
    renderProducts(products);

    // Lazy Loading Implementation
    function observeImages() {
        const images = document.querySelectorAll('img[data-src]');

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        }, { threshold: 0.2 }); // Load when 20% of the image is visible

        images.forEach(img => {
            observer.observe(img);
        });
    }

    // DOM Interaction: Displaying product details (example)
    function attachDetailButtonListeners() {
        const detailButtons = document.querySelectorAll('.view-details');
        detailButtons.forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const selectedProduct = products.find(product => product.id === productId);
                if (selectedProduct) {
                    displayProductDetails(selectedProduct);
                }
            });
        });
    }

    function displayProductDetails(product) {
        const detailsContainer = document.createElement('div');
        detailsContainer.classList.add('product-details');
        detailsContainer.innerHTML = `
            <h2>${product.name}</h2>
            <img src="${product.image}" alt="${product.name}" width="400" height="300">
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
            <button class="close-details">Close</button>
        `;
        document.body.appendChild(detailsContainer);

        const closeButton = detailsContainer.querySelector('.close-details');
        closeButton.addEventListener('click', () => {
            detailsContainer.remove();
        });
    }

    // Conditional Branching and Array Methods: Filtering Top Deals (example)
    navigationLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.dataset.page;

            if (page === 'top-deals') {
                const topDeals = products.filter(product => product.price < 60); // Example condition
                renderProducts(topDeals);
            } else {
                renderProducts(products); // Show all products for other pages
            }
        });
    });

    // Local Storage: Saving and Retrieving User Preferences (example)
    const themeKey = 'userTheme';
    const defaultTheme = 'light';

    function setTheme(theme) {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(`${theme}-theme`);
        localStorage.setItem(themeKey, theme);
    }

    const savedTheme = localStorage.getItem(themeKey);
    const initialTheme = savedTheme || defaultTheme;
    setTheme(initialTheme);

    // Example function to toggle theme (can be triggered by a button)
    function toggleTheme() {
        const currentTheme = localStorage.getItem(themeKey);
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }

    // You would typically have a button in your HTML to trigger toggleTheme()
    // For example: <button id="theme-toggle">Toggle Theme</button>
    // And in JS: document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});