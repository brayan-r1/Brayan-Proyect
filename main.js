function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "1234") {
        alert("Inicio de sesión exitoso");
    } else {
        alert("Usuario o contraseña incorrectos");
    }
}

const productos = [
    "ROSAMAR",
    "Marfit",
    "Relot",
    "RERR",
    "RTY"
];

function filtrarProductos() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    productos.forEach(producto => {
        if (producto.toLowerCase().includes(searchInput)) {
            const li = document.createElement('li');
            li.textContent = producto;
            resultsList.appendChild(li);
        }
    });
}

document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const postTitle = document.getElementById('postTitle').value.trim();
    const postContent = document.getElementById('postContent').value.trim();
    const postImage = document.getElementById('postImage').files[0];

    if (postTitle && postContent) {
        const messagesList = document.getElementById('messagesList');
        const newMessage = document.createElement('li');

        newMessage.innerHTML = `<strong>${postTitle}</strong>: ${postContent}`;

        if (postImage) {
            const img = document.createElement('img');
            img.src = URL.createObjectURL(postImage);
            newMessage.appendChild(img);
        }

        messagesList.appendChild(newMessage);

        
        document.getElementById('postTitle').value = '';
        document.getElementById('postContent').value = '';
        document.getElementById('postImage').value = '';

        
        alert('La publicación fue exitosa');
    } else {
        alert('Por favor, completa todos los campos antes de publicar.');
    }
});

document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const amount = document.getElementById('amount').value;

    if (cardNumber && expiryDate && cvv && amount) {
        document.getElementById('paymentStatus').innerText = 'Payment Successful!';
    } else {
        document.getElementById('paymentStatus').innerText = 'Please fill all fields.';
    }
});


const cart = [];
const totalPriceElement = document.getElementById('total-price');
const cartModal = document.getElementById('cart-modal');
const showCartButton = document.getElementById('show-cart');
const closeButton = document.querySelector('.close');


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const productElement = button.closest('.product');
        const productName = productElement.getAttribute('data-name');
        const productPrice = parseFloat(productElement.getAttribute('data-price'));

        
        cart.push({ name: productName, price: productPrice });

        
        updateCart();
    });
});