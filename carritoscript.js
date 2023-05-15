let carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let compra = document.getElementById("compra")

let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)

function mostrarCarrito (){
    let acumulador = 0
    let total = document.getElementById("total")
    let suma = document.createElement('li')

    //carrito.forEach((prod) => {

    for (let i = 0; i < carrito.length; i++) {
        let prod = carrito[i]
        let comprado = document.createElement('li')
        comprado.innerHTML = `
        <h3>${prod.tipo}</h3>
        <h5>Color: ${prod.color}</h5>
        <p>${prod.descripcion}</p>
        <h4>$${prod.precio}</h4>
        <button>Eliminar</button>
        `
        //console.log(prod.precio)
        compra.appendChild(comprado)
        let botonEliminar = comprado.getElementsByTagName('button')[0]
        
        botonEliminar.onclick = () => {
        
            let carritoActualizado = carrito.filter(p => p.id != prod.id);
            console.log(carritoActualizado)
            
            //productoActualizado.stock -= 1;
            //Actualizar total
            let restador = 0
            carritoActualizado.forEach((prodActualizado) => {
                restador += prodActualizado.precio  
            })

            suma.innerHTML = `$${restador}<button>FINALIZAR COMPRA</button>`           
            comprado.remove()
            //guardar carrito actualizado en el storage
            sessionStorage.setItem('carrito', JSON.stringify(carritoActualizado))
            //actualizar array carrito
            carrito = carritoActualizado

            let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)

        }

        acumulador += prod.precio
        
        }//)


        suma.innerHTML = `$${acumulador}
        <button>FINALIZAR COMPRA</button>
        `
        total.appendChild(suma)
        console.log(acumulador)

        let botonFinalizar = suma.getElementsByTagName('button')[0]
        
        botonFinalizar.onclick = () => {
            let msjFinal = swal("Recuerda que esto es una simulación", "Puedes buscar a Wayra por Instagram!");
        }


}

mostrarCarrito()


