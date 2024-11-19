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
  
  // Clase ProductoCongelado que extiende de ProductoAlimenticio
  class ProductoCongelado extends ProductoAlimenticio {
    constructor(name, price, fechaCaducidad, temperaturaRecomendada, margen = 5) {
      super(name, price, fechaCaducidad); // Llamada al constructor de ProductoAlimenticio
      this.temperaturaRecomendada = temperaturaRecomendada; // Temperatura recomendada para el almacenamiento
      this.margen = margen; // Margen de temperatura permitido
    }
  
    // Método para verificar si el producto está almacenado correctamente según la temperatura actual
    estaAlmacenadoCorrectamente(temperaturaActual) {
      const minTemperatura = this.temperaturaRecomendada - this.margen; // Temperatura mínima aceptable
      const maxTemperatura = this.temperaturaRecomendada + this.margen; // Temperatura máxima aceptable
      
      // Devuelve true si la temperatura actual está dentro del rango permitido
      return temperaturaActual >= minTemperatura && temperaturaActual <= maxTemperatura;
    }
  }
  
  // Crear una instancia de ProductoCongelado
  const helado = new ProductoCongelado("Helado de Vainilla", 2.99, "2024-12-31", -18);
  
  // Temperatura actual de almacenamiento
  const temperaturaActual = -20; // Supongamos que esta es la temperatura actual
  
  // Verificar si el producto está almacenado correctamente
  const estaAlmacenadoCorrectamente = helado.estaAlmacenadoCorrectamente(temperaturaActual);
  console.log("¿Está almacenado correctamente?:", estaAlmacenadoCorrectamente ? "Sí" : "No");
  
  // Verificar si el producto está caducado
  const esCaducado = helado.checkCaducidad();
  console.log("¿El producto está caducado?:", esCaducado ? "Sí" : "No");
  
  // Mostrar detalles del producto
  console.log("Nombre del Producto:", helado.name);
  console.log("Precio:", helado.getPrice());
  console.log("Fecha de Caducidad:", helado.fechaCaducidad.toDateString());
  console.log("Temperatura Recomendada:", helado.temperaturaRecomendada, "grados");
  