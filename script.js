//let id = 0

//class Producto {
 //   constructor (tipo, material, color, descripcion, precio) {
 //   this.id = id++;
 //   this.tipo = tipo;
 //   this.material = material;
 //   this.color = color;
 //   this.descripcion = descripcion;
 //   this.precio = precio;
//}
//}

//const productos = []; 
//let bandolera1 = new Producto ("Bandolera", "Poliéster reciclado", "Negro", "Bandolera de material reciclado con bolsillo en el frente. Cierre, asa larga regulable y forro interior.", 13500);
//let mochila1 = new Producto ("Mochila", "Poliéster reciclado", "Negro", "Mochila porta notebook de viaje con bolsillo frontal. Asa corta, doble asa larga regulable, cierre y forro interior.", 15900);
//let mochila2 = new Producto ("Mochila", "Poliéster reciclado", "Verde", "Mochila de viaje con bolsillo en el frente. Doble asa corta y doble asa regulable. Aplique decorativo, cierre, bolsillo interno y forro interior.", 17500);
//let mochila3 = new Producto ("Mochila", "50% algodón, 50% poliéster", "Verde", "Mochila con bolsillo en el frente con etiqueta. Doble asa corta de mano y doble asa regulable. Cierre, bolsillos laterales, bolsillos interiores y forro interior.", 19000);
//let cartera1 = new Producto ("Cartera", "60% algodón, 40% poliéster", "Estampado de flores", "Cartera estampada con doble asa corta regulable de algodón. Cierre con mosquetón y bolsillo interior", 17500);
//let bandolera2 = new Producto ("Bandolera", "Poliéster reciclado", "Rosa Claro", "Bandolera de viaje con bolsillo frontal con cierre. Asa larga regulable, cierre, bolsillo intero y forro interior", 15000);
//let bandolera3 = new Producto ("Bandolera", "Cuerina", "Rojo", "Bandolera con bolsillo frontal con cierre de imán. Asa regulable y desmontable", 12800);
//let bandolera4 = new Producto ("Bandolera", "Poliéster", "Estampado geométrico", "Bandolera doble fuelle estampada, con solapa. Asa larga regulable y desmontable, bolsillo interior, cierre a presión y forro interior", 13500);
//let riñonera1 = new Producto ("Riñonera", "Nylon", "Rosa Claro", "Riñonera de viaje con bolsillo en el frente. Bolsillo interior, asa larga regulable, cierre y forro interior", 14000);
//let riñonera2 = new Producto ("Riñonera", "Poliuretano", "Negra", "Riñonera con cierre. Asa larga regulable y forro interior", 13500);
//let billetera1 = new Producto ("Billetera", "Poliuretano", "Negro", "Billetera con cierre y solapa. Compartimento para tarjetas y billetes, bolsillo interno con cierre y forro interior", 9000);
//let billetera2 = new Producto ("Billetera", "Poliuretano", "Negro", "Billetera con rabillo con cierre a presión. Múltiples compartimento para tarjetas y billetes, compartimento para monedas con cierre y forro interior", 8500);
//let portacosmeticos1 = new Producto ("Porta cosméticos", "Algodón", "Rosa Claro", "Porta cosméticos con compartimentos en el interior, cierre y forro interior", 9000);

//productos.push(bandolera1, mochila1, mochila2, mochila3, cartera1, bandolera2, bandolera3, bandolera4, riñonera1, riñonera2, billetera1, billetera2, portacosmeticos1)



let listaProductos = document.getElementById("listaProductos")
listaProductos.setAttribute('class','listaProductos')
let carrito2 = document.getElementById("carrito2")
let contador = 1


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
            let productoActualizado = dato.find(p => p.id === info.id);
            productoActualizado.stock -= 1;
            carrito2.innerHTML = ""
            lista.remove()
            
            productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador++}`
            carrito2.appendChild(productoActualizado)
            
            compra = document.createElement('p')
            compra.innerHTML = `
            ${info.tipo}
            `
            console.log(info.tipo)


            //let nuevoJSON = JSON.stringify(info);
           // fetch('/data.json',{
               // method: 'PUT',
               // body: nuevoJSON
            //})
            //.then(() => {
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
            //})
            //.catch((error) => {
             //   console.error(error)
             //   alert("Ocurrió un error al actualizar el stock del producto.")
           // })
           let dato1 = JSON.stringify(info);
           fetch('data.json',{
               method: 'PUT',
               body: dato1
            })
            .then(() => {
                console.log(info)
           })
            .catch((error) => {
            console.error(error)
            alert("Ocurrió un error al actualizar el stock del producto.")
           })
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
            let productoActualizado = dato.find(p => p.id === info.id);
            productoActualizado.stock -= 1;
            carrito2.innerHTML = ""
            lista.remove()
            
            productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador++}`
            carrito2.appendChild(productoActualizado)
            
            compra = document.createElement('p')
            compra.innerHTML = `
            ${info.tipo}
            `
            console.log(info.tipo)


            //let nuevoJSON = JSON.stringify(info);
           // fetch('/data.json',{
               // method: 'PUT',
               // body: nuevoJSON
            //})
            //.then(() => {
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
            //})
            //.catch((error) => {
             //   console.error(error)
             //   alert("Ocurrió un error al actualizar el stock del producto.")
           // })
           let nuevoJSON = JSON.stringify(info);
           fetch('/data.json',{
               method: 'PUT',
               body: nuevoJSON
            })
            .then(() => {
                console.log(info)
           })
            .catch((error) => {
            console.error(error)
            alert("Ocurrió un error al actualizar el stock del producto.")
           })
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
            let productoActualizado = dato.find(p => p.id === info.id);
            productoActualizado.stock -= 1;
            carrito2.innerHTML = ""
            lista2.remove()
            
            productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador++}`
            carrito2.appendChild(productoActualizado)
            
            compra = document.createElement('p')
            compra.innerHTML = `
            ${info.tipo}
            `
            console.log(info.tipo)


            //let nuevoJSON = JSON.stringify(info);
           // fetch('/data.json',{
               // method: 'PUT',
               // body: nuevoJSON
            //})
            //.then(() => {
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
            //})
            //.catch((error) => {
             //   console.error(error)
             //   alert("Ocurrió un error al actualizar el stock del producto.")
           // })
           let nuevoJSON = JSON.stringify(info);
           fetch('/data.json',{
               method: 'PUT',
               body: nuevoJSON
            })
            .then(() => {
                console.log(info)
           })
            .catch((error) => {
            console.error(error)
            alert("Ocurrió un error al actualizar el stock del producto.")
           })
           }
            
        })
    }        
        
    })
}
}



//let busqueda = document.getElementById("busqueda")

//busqueda.addEventListener("change", filtrar)

//function filtrar(e){
    //let filtro = e.target.value.toLowerCase();
    
    //let productoFiltrado;
    
        //const resultado1 = dato.filter((el) => el.tipo.toLowerCase().includes(filtro))
        //const resultado2 = productos.filter((el) => el.material.toLowerCase().includes(filtro))
        //const resultado3 = productos.filter((el) => el.color.toLowerCase().includes(filtro))

        //productoFiltrado = resultado1.concat(resultado2, resultado3)
    
    //let mostrarFiltrado = document.getElementById("mostrarFiltrado")
    //mostrarFiltrado.setAttribute('class','mostrarFiltrado')
    //productoFiltrado.forEach(info =>{
        //let li = document.createElement("li")
        //let btn = document.createElement("btn")
        //li.innerHTML = `<b>${info.tipo}</b>, Material: ${info.material}, Color: ${info.color}, Descripción: ${info.descripcion}, Precio: $${info.precio}`
        //btn.innerHTML = `<input type="button" value="Comprar!">`
        //mostrarFiltrado.appendChild(li)
        //mostrarFiltrado.appendChild(btn)
        //btn.onclick = () => (
            //productos.splice(productos.indexOf(info),1), 
            //alert("Agregaste un producto a tu compra!"), 
            //li.remove(), 
            //btn.remove(),
            //stockStorage("listaDeProductos", JSON.stringify(productos))
            //)
    //})

    //stockProductos.innerHTML = ""

//}

//let volver = document.getElementById("volverBtn")
//volver.onclick = () => (
    //listarProductos(),
    //mostrarFiltrado.innerHTML = ""
    //)