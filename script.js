let carrito = [];

function agregarCarrito(nombre, precio, imagen) {
  carrito.push({ nombre, precio, imagen });

  alert(nombre + " agregado al carrito 🛒");
  console.log(carrito);
}
