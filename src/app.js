const stockProductos = [
        {
            id: 1,
            nombre: "Cells At Work #03",
            cantidad: 1,
            precio: 750,
            editorial:"Ivrea" ,
            imagen: "/images/cellsatwork03.jpg",
        },

        
        {
            id: 3,
            nombre: "Re:Zero #03",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" ,
            imagen: "/images/rezero3.jpg",
        },
        
        {
            id: 4,
            nombre: "Blue Period #04",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" ,
            imagen: "/images/blueperiod4.jpg",
        },
        
        {
            id: 5,
            nombre: "Look Back",
            cantidad: 1,
            precio: 750,
            editorial:"Ivrea" , 
            imagen: "/images/lookback.jpg",
        },
        
        
        {
            id: 7,
            nombre: "Fruits Basket #22",
            cantidad: 1,
            precio: 600,
            editorial:"Ivrea" ,
            imagen: "/images/fruitsbasket22.jpg",
        },
        
        
        
        {
            id: 10,
            nombre: "Rooster Fighter #02",
            cantidad: 1,
            precio: 850,
            editorial:"Ivrea" , 
            imagen: "/images/rooster.jpg",
        },
        
        
        {
            id: 12,
            nombre: "Kamen Rider Kuuga #08",
            cantidad: 1,
            precio: 1190,
            editorial:"Ovni" , 
            imagen: "/images/kamenrider8.jpg",
        },
        
        {
            id: 13,
            nombre: "Atom: The Beginning #05",
            cantidad: 1,
            precio: 1190,
            editorial:"Ovni" , 
            imagen: "/images/atom5.jpg",
        },
        
        {
            id: 14,
            nombre: "Bakemonogatari #13",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" , 
            imagen: "/images/bakemonogatari13.jpg",
        },
        
        {
            id:15,
            nombre: "Dr. Stone #18",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" , 
            imagen: "/images/drstone18.jpg",
        },
        
        {
            id:16, 
            nombre: "Fire Punch# 02",
            cantidad: 1,
            precio: 750,
            editorial:"Ivrea" ,
            imagen: "/images/firepunch2.jpg",
        },
        
        {
            id: 17,
            nombre: "Claymore #21",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" ,
            imagen: "/images/claymore21.jpg",
        },
        
        {
            id: 18,
            nombre: "Berserk #31",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" , 
            imagen: "/images/berserk31.jpg",
        },
        
        {
            id:19, 
            nombre:"Kengan Ashura #2",
            cantidad: 1,
            precio: 850,
            editorial:"Ivrea" ,
            imagen: "/images/kenganashura2.jpg",
        },
        
        {
            id: 20,
            nombre: "Solo Leveling #2",
            cantidad: 1,
            precio: 2950,
            editorial:"Ivrea" ,
            imagen: "/images/sololevelin2.jpg"
        },
        {
            id: 8,
            nombre: "Paradise Kiss Glamour Edition #04",
            cantidad: 1,
            precio: 1450,
            editorial:"Ivrea" ,
            imagen: "/images/paradise-kiss-3.jpg",
        },
        {
            id: 9,
            nombre: "Así Habló Kishibe Rohan #02",
            cantidad: 1,
            precio: 850,
            editorial:"Ivrea" , 
            imagen: "/images/rohan.jpg",
        },
        {
            id: 6,
            nombre: "Amor, Devoraré tu Corazón",
            cantidad: 1,
            precio: 850,
            editorial:"Ivrea" , 
            imagen: "/images/amordevorare.jpg",
        },
        
        {
            id: 2,
            nombre: "Takagi: La Maestra de las Bromas #13",
            cantidad: 1,
            precio: 1100,
            editorial:"Panini" ,
            imagen: "/images/takagi-13.jpg",
        },
        
        {
            id: 11,
            nombre: "Demon Slayer: Stories Of Water And Flame",
            cantidad: 1,
            precio: 750,
            editorial:"Ivrea" , 
            imagen: "/images/kny.jpg",
        },
    ];
    
    let carrito = []

    const contenedor = document.querySelector('#contenedor')
    const carritoContenedor = document.querySelector('#carritoContenedor')
    const vaciarCarrito = document.querySelector('#vaciarCarrito')
    const precioTotal = document.querySelector('#precioTotal')
    const procesarCompra = document.querySelector('#procesarCompra')
    const activarFuncion = document.querySelector('#activarFuncion')
    const totalProceso = document.querySelector('#totalProceso')
    const formulario = document.querySelector('#procesar-pago')


    if(activarFuncion){
    activarFuncion.addEventListener('click', procesarPedido)
    }

    if(formulario) {
        formulario.addEventListener('submit', enviarPedido)
    }
    document.addEventListener('DOMContentLoaded', () => {
        carrito = JSON.parse(localStorage.getItem('carrito')) || []
        mostrarCarrito()

        if(activarFuncion){
        document.querySelector('#activarFuncion').click(procesarPedido)
        }

    })

    stockProductos.forEach((prod) => {
        const {id, nombre, cantidad, precio, editorial, imagen} = prod
        contenedor.innerHTML += `<div class="merch-container">
        <h4>${nombre}</h4>
    <div class="img-anime">
        <img src="${imagen}" alt="${nombre}">
    </div>
    <div class="flex-btn-precio">
        <h3> $${precio}</h3>
        <button onclick="agregarProducto(${id})" class="button-add">Agregar</button>
    </div>  
    </div>
        `
    })
    if(procesarCompra){
    procesarCompra.addEventListener('click', () => {
        if(carrito.length === 0){
            Swal.fire( {
                title: "¡Tu carrito está vacío!",
                text: "Compra algo para continuar la compra",
                icon: "error",
                confirmButtonText: "Aceptar",
            }) 
        } else {
            location.href = "compra.html"
            procesarPedido()
        }
    })
}
    if(vaciarCarrito){
    vaciarCarrito.addEventListener('click', () => {
        carrito.length  = []
        mostrarCarrito();
    })
}

    function agregarProducto (id){

        const existe = carrito.some(prod => prod.id === id)

        if(existe) {
            const prod = carrito.map(prod => {
                if(prod.id === id){
                    prod.cantidad++
                }
            })
        }else {
            const item = stockProductos.find((prod) => prod.id === id)
            carrito.push(item)
        }

        mostrarCarrito();
    }

    const mostrarCarrito = () => {
        const modalBody = document.querySelector('.modal .modal-body')
        if(modalBody){
        
        modalBody.innerHTML = ''
        carrito.forEach((prod) => {
            const {id, nombre, cantidad, precio, editorial, imagen} = prod
            modalBody.innerHTML += `
            <div class= "modal-contenedor">
                <div>
                    <img class="img-fluid imagen-carrito" src="${imagen}">
            </div>

            <div>
                <p>Producto: ${nombre}</p>
                <p>Editorial: ${editorial}</p>
                <p>Precio: $${precio}</p>
                <p>Cantidad: ${cantidad}</p>

                <button onclick="eliminarProducto(${id})" class="btn btn-warning">Eliminar producto</button>
            </div>

            </div>
            `
        })
    }

        if(carrito.length === 0){
            modalBody.innerHTML = `
            <p class="text-center text-secondary parrafo">¡Aún no agregaste nada al carrito!</p>
            `
        }

        carritoContenedor.textContent = carrito.length

        if(precioTotal){
        precioTotal.textContent = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
        }
        guardarStorage()
    }

    function eliminarProducto(id) {
        const mangaId = id
        carrito = carrito.filter ((manga) => manga.id !== mangaId)
        mostrarCarrito()
    }

    function guardarStorage() {
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }

    function procesarPedido() {

        carrito.forEach((prod) => {
            const listaCompra = document.querySelector('#lista-compra tbdoy')
            const {id, nombre, cantidad, precio, editorial, imagen} = prod

            const row = document.createElement('tr')
            row.innerHTML += `
                <td>
                    <img class="img-fluid img-carrito" src="${imagen}">
                </td>
                <td>${nombre}</td>
                <td>${precio}</td>
                <td>${cantidad}</td>
                <td>${precio * cantidad}</td>
            `
            listaCompra.appendChild(row)
        })
        totalProceso.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
    }

function enviarPedido (e) {
    e.preventDefault()
    const cliente = document.querySelector('#cliente').value
    const correo = document.querySelector('#correo').value

    if(correo === '' || cliente === '') {
        Swal.fire({
            title: "¡Tenés que completar tu email y nombre!", 
            text: "Rellena el formulario", 
            icon: "error" ,
            confirmButtonText: "Aceptar"
        })
    } else {
        const spinner = document.querySelector('#spinner')
        spinner.classList.add ('d-flex')
        spinner.classList.remove ('d-none')

        setTimeout (() => {
            spinner.classList.remove ('d-flex') 
            spinner.classList.add ('d-none')
            formulario.reset()
        }, 3000)

        const alertExito = document.createElement('p')
        alertExito.classList.add ('alert', 'alerta', 'd-block', 'text-center', 'col-md-12', 'mt-2', 'alert-success')
        alertExito.textContent = "Compra realizada con éxito"
        formulario.appendChild(alertExito)

        setTimeout (() => {
            alertExito.remove()
        }, 3000)

    }
}