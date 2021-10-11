const fs = require("fs");

class Contenedor {
  productos = new Array();

  addProducto(title, price, th) {
    let producto = new Object();
    producto["title"] = title;
    producto["price"] = price;
    producto["thumbmail"] = th;
    producto["id"] = this.productos.length + 1;
    this.productos.push(producto);
  }

  getById(numero) {
    return this.productos[numero - 1];
  }

  getAll() {
    return this.productos;
  }

  deleteById(numero) {
    this.productos.pop[numero - 1];
    return this.productos;
  }

  deleteAll() {
    this.productos = [];
  }
}

//Función para crear ruta o archivo
async function crearArchivo() {
  try {
    await fs.promises.appendFile("./productos.txt", "");
    console.log("archivo creado con exito!");
  } catch (error) {
    console.log("Hubo un error al crear archivo!!");
  }
}

p = new Contenedor();

async function leerArchivo() {
  fs.promises
    .readFile("./productos.txt")
    .then((contenido) => {
      p.productos.push(contenido);
      console.log("SOY LA LECTURA DEL ARCHIVO");
      console.log(p.productos);
      console.log("fin de la LECTURA DEL ARCHIVO");
    })
    .catch((err) => {
      console.log("Hubo un error al leer archivo!!", err);
    });
}

a = p.productos;

async function save(a) {
  try {
    await fs.promises.writeFile("./productos.txt", a.toString());
    console.log("agregado!");
  } catch (error) {
    console.log("ERROR AL AGREGAR!!");
  }
}

//crearArchivo();
leerArchivo();
p.addProducto(
  "Escuadra",
  123.45,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png"
);
p.addProducto(
  "Calculadora",
  234.56,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png"
);
leerArchivo();
save(p);
p.addProducto(
  "Globo Terráqueo",
  345.67,
  "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png"
);
save(p);
leerArchivo();
console.log(p.getById(2));
console.log(p.getAll());
console.log(p.deleteById(1));
console.log(p.deleteAll());

//console.log(p.productos);
