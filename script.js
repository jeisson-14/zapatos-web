let carrito = [];

function agregarCarrito(nombre, precio, imagen) {
  const existe = carrito.find(p => p.nombre === nombre);

  if (existe) {
    existe.cantidad++;
  } else {
    carrito.push({ nombre, precio, imagen, cantidad: 1 });
  }

  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    const subtotal = producto.precio * producto.cantidad;
    total += subtotal;

    lista.innerHTML += `
      <div class="item-carrito">
        <img src="${producto.imagen}">
        <div>
          <p><strong>${producto.nombre}</strong></p>
          <p>$${producto.precio} x ${producto.cantidad}</p>
          <p>Subtotal: $${subtotal}</p>
          <button onclick="eliminarProducto(${index})">❌</button>
        </div>
      </div>
    `;
  });

  totalSpan.textContent = total;
}

function eliminarProducto(index) {
  carrito.splice(index, 1);
  mostrarCarrito();
}

function enviarWhatsApp() {
  let mensaje = "Hola, quiero hacer este pedido:%0A%0
