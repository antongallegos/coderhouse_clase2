const fs = require("fs");

//Función para crear ruta o archivo
async function agregar() {
  try {
    await fs.promises.appendFile("./desafioDosArchivo.js", "");
    console.log("agregado!");
  } catch (error) {
    console.log("Hubo un error al crear archivo!!");
  }
}

//Para almacenar Productos
class Contenedor {
  constructor(productos) {
    this.productos = productos;
  }
}

class Producto {
  constructor(title, price, thumbmail, id) {
    this.title = title;
    this.price = price;
    this.thumbmail = thumbmail;
    this.id = id;
  }
}

lp = [];

function addProducto(title, price, th, id) {
  c = new Producto();
  c.tittle = title;
  c.price = price;
  c.thumbmail = th;
  c.id = id;
  lp.push(c);
  agregar();
}

function leerArchivo() {
  fs.promises
    .readFile("./desafioDosArchivo.js")
    .then((contenido) => {
      lp.push(contenido);
      console.log(lp);
    })
    .catch((err) => {
      console.log("Hubo un error al leer archivo!!", err);
    });
}

//escribe = lp.toString();

async function agregar() {
  escribe = "lp = " + lp;
  try {
    await fs.promises.writeFile("./desafioDosArchivo.js", escribe);
    console.log("agregado!");
  } catch (error) {
    console.log("ERROR AL AGREGAR!!");
  }
}

//agregar();
leerArchivo();
addProducto("Escuadra", 123.45, "una pagina", 1);
leerArchivo();
