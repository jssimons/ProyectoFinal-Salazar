const productos = [
    { nombre: "Whisky Bourbon", precio: 5000 },
    { nombre: "Whisky Irlandés", precio: 4500 },
    { nombre: "Licores Frutales", precio: 2500 },
    { nombre: "Gaseosa Lima Limón 500ml", precio: 1200 },
    { nombre: "Pulpa de Frutilla", precio: 2000 }
]


function menuPrincipal(productos) {

    let total = 0
    const carrito = []
    
    
    do {
        let menu = ""
        productos.forEach(function (producto, index) {
            menu += (index + 1) + ". " + producto.nombre + " $" + producto.precio + "\n"
        })
        menu += "0. Salir"

        let opcion = Number(prompt(menu))

        if (opcion === 0) {
            break
        } 
       
        let cantidad = prompt("ingrese la cantidad que desea comprar")

        const productoSeleccionado = productos[opcion - 1]
        let subtotal = productoSeleccionado.precio * cantidad
        total = total + subtotal

        carrito.push({ producto: productoSeleccionado, cantidad })
        alert("se agregaron " + cantidad + " " + productoSeleccionado.nombre + " al carrito por un total de $" + subtotal)

    } while (true)

    total = total + (total * 0.21)

    
    let mensaje = ""
    carrito.forEach(function (item, index) {
        mensaje += (index + 1) + ". " + item.cantidad + " X " + item.producto.nombre + " $" + item.producto.precio * item.cantidad + "\n"
    })
    alert("el total de su compra es de $" + total)
}

menuPrincipal(productos)