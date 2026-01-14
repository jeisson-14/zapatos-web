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
  let mensaje = "Hola, quiero hacer este pedido:%0A%0A";
  let total = 0;

  carrito.forEach(p => {
    mensaje += `- ${p.nombre} x ${p.cantidad} ($${p.precio})%0A`;
    total += p.precio * p.cantidad;
  });

  mensaje += `%0A*Total:* $${total}`;

  const telefono = "573123456789"; // CAMBIA A TU NÚMERO

  window.open(`https://wa.me/${telefono}?text=${mensaje}`);
}
