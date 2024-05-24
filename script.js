
/* 
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
    
    menuPrincipal(productos)  */



document.addEventListener("DOMContentLoaded", function () {
    const contenedorCarrito = document.getElementById("contenedorCarrito")
    const botonVerOcultar = document.getElementById("botonVerOcultar")
    const botonComprar = document.getElementById("botonComprar")
    const carrito = JSON.parse(localStorage.getItem("carrito")) || []
    let listaDeProductos = []

    fetch("./productos.json")
        .then(Response => Response.json())
        .then(data => {
            listaDeProductos = data
        })

    function mostrarMensaje(mensaje, tipo) {
        const mensajeUsuario = document.getElementById("mensajeUsuario")
        mensajeUsuario.textContent = mensaje
        mensajeUsuario.style.display = "block"
        setTimeout(() => {
            mensajeUsuario.style.display = "none"
        }, 3000)
    }

    function actualizarLocalStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    botonComprar.addEventListener("click", function () {
        if (carrito.length > 0) {
            carrito.length = 0
            actualizarLocalStorage()
            contenedorCarrito.innerHTML = " "
            contenedorCarrito.classList.add("oculto")
            mostrarMensaje("¡Gracias por tu compra!")
        } else {
            mostrarMensaje("No hay productos en el carrito")
        }
    })

    function agregarAlCarrito(producto) {
        Toastify({
            text: "PRODUCTO AGREGADO AL CARRITO",
            duration: 3000,
            close: false,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                borderRadius: "2rem",
            },
            offset: {
                x: "1.5rem", // horizontal axis - can be a number or a string indicating unity. eg: '2em'
                y: "1.5rem" // vertical axis - can be a number or a string indicating unity. eg: '2em'
            },
            onClick: function () { } // Callback after click
        }).showToast();
        if (producto.stock > 0) {
            const productoExistenteIndex = carrito.findIndex(item => item.nombre === producto.nombre)
            if (productoExistenteIndex !== -1) {
                carrito[productoExistenteIndex].cantidad++
            } else {
                carrito.push({ ...producto, cantidad: 1 })
            }
            producto.stock--
            actualizarCarrito()
            actualizarLocalStorage()
        } else {
            mostrarMensaje("¡Este producto está fuera de stock!")
        }
    }


    function actualizarCarrito() {
        contenedorCarrito.innerHTML = ""
        carrito.forEach(producto => {
            const elementoProducto = document.createElement("div")
            elementoProducto.innerHTML = `
                <span>${producto.nombre} - $${producto.precio} - Cantidad: ${producto.cantidad}</span>
                <button class="eliminar" data-nombre="${producto.nombre}">Eliminar</button>
            `
            contenedorCarrito.appendChild(elementoProducto)
        })
    }


    botonVerOcultar.addEventListener("click", function () {
        contenedorCarrito.classList.toggle("oculto")
    })




    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("agregar")) {
            const nombreProducto = event.target.parentElement.querySelector("h2").textContent
            const producto = listaDeProductos.find(item => item.nombre === nombreProducto)
            if (producto) {
                agregarAlCarrito(producto)
            }
        }
    })


    contenedorCarrito.addEventListener("click", function (event) {
        Swal.fire({
            title: "¿Estas seguro?",
            icon: "question",
            html: `
              se eliminará este producto
            `,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: `Si`,
            cancelButtonText: `No`
        })
            .then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    if (event.target.classList.contains("eliminar")) {
                        const nombreProducto = event.target.dataset.nombre
                        const index = carrito.findIndex(item => item.nombre === nombreProducto)
                        if (index !== -1) {
                            carrito.splice(index, 1)
                            actualizarCarrito()
                            actualizarLocalStorage()
                        }
                    }
                }
            })
    })



    actualizarCarrito()

})








