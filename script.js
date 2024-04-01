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