// Clase base Producto
class Producto {
    constructor(name, price) {
      this.name = name;    // Nombre del producto
      this.price = price;  // Precio del producto
    }
  
    // Método para obtener el precio del producto
    getPrice() {
      return this.price;
    }
  }
  
  // Clase ProductoAlimenticio que extiende de Producto
  class ProductoAlimenticio extends Producto {
    constructor(name, price, fechaCaducidad) {
      super(name, price);        // Llamada al constructor de la clase base Producto
      this.fechaCaducidad = new Date(fechaCaducidad);  // Convertir la fecha de caducidad a un objeto Date
    }
  
    // Método para comprobar si el producto está caducado
    checkCaducidad() {
      const hoy = new Date(); // Fecha actual
      return this.fechaCaducidad < hoy; // Devuelve true si la fecha de caducidad ya pasó
    }
  }
  
  // Crear una instancia de ProductoAlimenticio
  const pan = new ProductoAlimenticio("Pan Integral", 3.50, "2024-05-30");
  
  // Comprobar si el producto está caducado
  const estaVencido = pan.checkCaducidad();
  console.log("¿El producto está vencido?:", estaVencido ? "Sí" : "No");
  
  // Mostrar detalles del producto
  console.log("Nombre del Producto:", pan.name);
  console.log("Precio:", pan.getPrice());
  console.log("Fecha de Caducidad:", pan.fechaCaducidad.toDateString());

