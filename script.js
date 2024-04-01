/* const productos = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 20 },
    { nombre: "Producto 3", precio: 15 },
    { nombre: "Producto 4", precio: 25 }
]; */

// Función para calcular el costo total
/* function calcularCostoTotal() {
    let costoTotal = 0;
    let continuar = true; */

    // Bucle para permitir al usuario seleccionar productos
   /*  while (continuar) {
        let opcion = parseInt(prompt("Ingrese el número del producto que desea agregar (0 para finalizar):"));
        if (opcion === 0) {
            continuar = false;
        } else if (opcion >= 1 && opcion <= productos.length) {
            costoTotal += productos[opcion - 1].precio;
        } else {
            alert("Opción inválida. Intente de nuevo.");
        }
    }

    return costoTotal;
} */

// Función principal
/* function simulador() {
    const costoTotal = calcularCostoTotal();
    alert(`El costo total de los productos seleccionados es: $${costoTotal}`);
} */

// Ejecutar el simulador
//simulador();


/* function menu() {
    let opcion
    let total = 0
    do {
        opcion = Number(prompt("Ingrese opción:\n1 manzanas $1500\n2 naranjas $500\n3 bananas $2500\n0 salir"))
        if (opcion < 0 || opcion > 3) {
            alert("Opcion ingresada incorrecta")
        } else if (opcion === 1) {
            total = agregarAlCarrito("manzanas", 1500, total)
        } else if (opcion === 2) {
            total = agregarAlCarrito("naranjas", 500, total)
        } else if (opcion === 3) {
            total = agregarAlCarrito("bananas", 2500, total)
        }
    } while (opcion !== 0)
    
    alert("El total de su compra es de " + total)
}

function agregarAlCarrito(fruta, precioPorKilo, total) {
    let cantidad = Number(prompt("Ingrese cantidad en gramos"))
    let subtotal = precioPorKilo * cantidad / 1000
    total = total + subtotal
    alert("Se agregaron " + fruta + " al carrito por un total de: " + subtotal)
    alert("Total hasta el momento es: " + total)

    return total
}

menu()  */


function menuPrincipal(){
let opcion  
let total = 0

do{
   opcion = Number(prompt("ingrese numero de la opcion:\n1 whisky bourbon $5000\n2 whisky irlandes $4500\n3 licores frutales $2500\n4 gaseosas lima limon 500ml $1200 \n5 pulpa de frutilla $2000 \n0 salir"))
    if (opcion < 0 || opcion > 5){
        alert("opcion incorrecta")    
    } else if (opcion === 1){
        total = agregarAlCarrito("whisky bourbon", 5000, total) 
    } else if(opcion === 2){
        total = agregarAlCarrito("whisky irlandes", 4500, total)
    } else if (opcion ===3){
        total = agregarAlCarrito("licores frutales", 2500, total)
    } else if (opcion === 4){
        total= agregarAlCarrito("gaseosas lima limon, 500ml", 1200, total)
    } else if (opcion === 5){
        total = agregarAlCarrito("pulpas de frutilla", 2000, total)
    }
} while (opcion !== 0)

total += calcularIVA(total)
alert("El total de su compra es de " + total)

}

function agregarAlCarrito(bebida, precioPorUnidad, total) {
    let cantidad = Number(prompt("¿cuantas unidades desea?"))
    let subtotal = precioPorUnidad * cantidad
    total = total + subtotal
    alert("Se agregaron " + bebida + " al carrito por un total de: " + subtotal)
    alert("Total hasta el momento es: " + total)
    return total
}

function calcularIVA(total) {
    return total * 0.21
}

menuPrincipal()