const carrito = JSON.parse(sessionStorage.getItem('carrito')) || []; 
let listaProductos = document.getElementById("listaProductos")
listaProductos.setAttribute('class','listaProductos')
let carrito2 = document.getElementById("carrito2")

let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)

fetch('../data.json')
    .then((resp) => resp.json())
    .then((dato) => {
        dato.forEach((info) => {
            let lista = document.createElement('li')
            lista.innerHTML = `
            <img src=${info.imagen}>
            <h3>${info.tipo}</h3>
            <h4>$${info.precio}</h4>
            <h5>Color: ${info.color}</h5>
            <p>${info.descripcion}</p>
            <button>Comprar</button>
            `
            listaProductos.appendChild(lista)
            let boton = lista.getElementsByTagName('button')[0];

            boton.onclick = () => {
            
            console.log(info.tipo)

                Toastify({
                    text: "Agregaste un producto al carrito!",
                    duration: 2000,
                    destination: "./carrito.html",
                    newWindow: false,
                    close: true,
                    gravity: "top", 
                    position: "right", 
                    stopOnFocus: true, 
                    style: {
                      background: "grey",
                    },
                    onClick: function(){}
                  }).showToast();

                  const nuevoProdAlCarrito = {
                    id: info.id,
                    imagen: info.id,
                    tipo: info.tipo, 
                    material: info.material,
                    color: info.color, 
                    descripcion: info.descripcion, 
                    precio: info.precio
                }
                console.log(carrito)
            carrito.push(nuevoProdAlCarrito);

            sessionStorage.setItem('carrito', JSON.stringify(carrito))    
            
            let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)
        }
        })
    })


    
    let busqueda = document.getElementById("busqueda")

    busqueda.addEventListener("change", filtrar)

    function filtrar(e){
    mostrarFiltrado.innerHTML= ""
    filtradoVacio.innerHTML= ""
    let filtro = e.target.value.toLowerCase();
    
    if(filtro == ""){
        fetch('/data.json')
    .then((resp) => resp.json())
    .then((dato) => {
        dato.forEach((info) => {
            let lista = document.createElement('li')
            lista.innerHTML = `
            <img src=${info.imagen}>
            <h3>${info.tipo}</h3>
            <h4>$${info.precio}</h4>
            <h5>Color: ${info.color}</h5>
            <p>${info.descripcion}</p>
            <button>Comprar</button>
            `
            listaProductos.appendChild(lista)
            let boton = lista.getElementsByTagName('button')[0];

            boton.onclick = () => {
            
                console.log(info.tipo)
    
                    Toastify({
                        text: "Agregaste un producto al carrito!",
                        duration: 2000,
                        destination: "./carrito.html",
                        newWindow: false,
                        close: true,
                        gravity: "top", 
                        position: "right", 
                        stopOnFocus: true, 
                        style: {
                          background: "grey",
                        },
                        onClick: function(){}
                      }).showToast();
    
                      const nuevoProdAlCarrito = {
                        id: info.id,
                        imagen: info.id,
                        tipo: info.tipo, 
                        material: info.material,
                        color: info.color, 
                        descripcion: info.descripcion, 
                        precio: info.precio
                    }
                    console.log(carrito)
                carrito.push(nuevoProdAlCarrito);
    
                sessionStorage.setItem('carrito', JSON.stringify(carrito))    
                
                
                let contador = carrito.length
                carrito2.innerHTML = ""
                console.log(contador)
                let productoActualizado = document.createElement('p')
                productoActualizado.innerHTML = `${contador}`
                carrito2.appendChild(productoActualizado)
            }
        })
    })
    }
    else{
    fetch('/data.json')
    .then((resp) => resp.json())
    .then((dato) => {

        const productosFiltradosTipo = dato.filter((el) => el.tipo.toLowerCase().includes(filtro))
        const productosFiltradosColor = dato.filter((el) => el.color.toLowerCase().includes(filtro))
        const productosFiltradosMaterial = dato.filter((el) => el.material.toLowerCase().includes(filtro))
        const productosFiltrados = productosFiltradosTipo.concat(productosFiltradosColor, productosFiltradosMaterial)
        console.log(productosFiltrados)

            if(productosFiltrados.length == 0)
            {let lista1 = document.createElement('li')
            lista1.innerHTML = `
            <h4>No se encontraron coincidencias con la búsqueda solicitada.</h4>
            `
            filtradoVacio.appendChild(lista1)
            listaProductos.innerHTML= ""
            mostrarFiltrado.innerHTML= ""}
            else
            {
            productosFiltrados.forEach((info) => {
            let lista2 = document.createElement('li')
            lista2.innerHTML = `
            <img src=${info.imagen}>
            <h3>${info.tipo}</h3>
            <h4>$${info.precio}</h4>
            <h5>Color: ${info.color}</h5>
            <p>${info.descripcion}</p>
            <button>Comprar</button>
            `
            mostrarFiltrado.appendChild(lista2)
            listaProductos.innerHTML= ""
            filtradoVacio.innerHTML= ""

            let boton2 = lista2.getElementsByTagName('button')[0];

            boton2.onclick = () => {
            
                console.log(info.tipo)
    
                    Toastify({
                        text: "Agregaste un producto al carrito!",
                        duration: 2000,
                        destination: "./carrito.html",
                        newWindow: false,
                        close: true,
                        gravity: "top", 
                        position: "right", 
                        stopOnFocus: true, 
                        style: {
                          background: "grey",
                        },
                        onClick: function(){}
                      }).showToast();
    
                      const nuevoProdAlCarrito = {
                        id: info.id,
                        imagen: info.id,
                        tipo: info.tipo, 
                        material: info.material,
                        color: info.color, 
                        descripcion: info.descripcion, 
                        precio: info.precio
                    }
                    console.log(carrito)
                carrito.push(nuevoProdAlCarrito);
    
                sessionStorage.setItem('carrito', JSON.stringify(carrito))    
                
                
                let contador = carrito.length
                carrito2.innerHTML = ""
                console.log(contador)
                let productoActualizado = document.createElement('p')
                productoActualizado.innerHTML = `${contador}`
                carrito2.appendChild(productoActualizado)
            }
            
        })
    }        
        
    })
}
}


