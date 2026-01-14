// Lista de productos
const productos = [
    {nombre: "Zapato Deportivo niño", precio: 00, imagen: "img/foto1.jpeg"},
    {nombre: "Zapato Deportivo niña", precio: 00, imagen: "img/foto1.jpeg"},
    
];

// Seleccionamos los contenedores
const contenedorProductos = document.querySelector('.productos');
const contenedorCarrito = document.querySelector('.carrito-items');
const totalCarrito = document.querySelector('.total');

let carrito = [];

// Función para mostrar productos
function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>$${producto.precio.toLocaleString()}</p>
        `;
        // Al hacer clic se agrega al carrito
        div.addEventListener('click', () => {
            agregarAlCarrito(producto);
        });
        contenedorProductos.appendChild(div);
    });
}

// Función para agregar al carrito
function agregarAlCarrito(producto) {
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar carrito en HTML
function actualizarCarrito() {
    contenedorCarrito.innerHTML = '';
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        const div = document.createElement('div');
        div.classList.add('carrito-item');
        div.innerHTML = `
            <span>${producto.nombre} - $${producto.precio.toLocaleString()}</span>
            <button onclick="eliminarProducto(${index})">X</button>
        `;
        contenedorCarrito.appendChild(div);
    });

    totalCarrito.innerText = `Total: $${total.toLocaleString()}`;
}

// Función para eliminar producto del carrito
function eliminarProducto(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Inicializamos
mostrarProductos();
