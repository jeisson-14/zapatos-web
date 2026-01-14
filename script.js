let carrito = [];

function agregarCarrito(nombre, precio, imagen) {
  carrito.push({ nombre, precio, imagen });
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById("lista-carrito");
  const totalSpan = document.getElementById("total");

  lista.innerHTML = "";
  let total = 0;

  carrito.forEach((producto, index) => {
    total += producto.precio;

    lista.innerHTML += `
      <div class="item-carrito">
        <img src="${producto.imagen}">
        <div>
          <p>${producto.nombre}</p>
          <p>$${producto.precio}</p>
        </div>
      </div>
    `;
  });

  totalSpan.textContent = total;
}

function enviarWhatsApp() {
  let mensaje = "Hola, quiero hacer este pedido:%0A%0A";
  let total = 0;

  carrito.forEach(p => {
    mensaje += `- ${p.nombre} ($${p.precio})%0A`;
    total += p.precio;
  });

  mensaje += `%0A*Total:* $${total}`;

  const telefono = "573105822406"; // CAMBIA ESTE NÚMERO

  window.open(`https://wa.me/${telefono}?text=${mensaje}`);
}
