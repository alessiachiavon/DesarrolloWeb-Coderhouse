
let carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let compra = document.getElementById("compra")

let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)


function login() {

 event.preventDefault(); // evitar el comportamiento por defecto del formulario

    let registrados = JSON.parse(localStorage.getItem('registrados')) || []
   
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let emailRegistrado = registrados.find(registrado => registrado.email === email)
    //let passwordRegistrado = registrados.find(registrado => registrado.password === password)

    console.log(emailRegistrado)
   
    if (emailRegistrado === undefined) {
      let msjUsuarioInexistente = swal("El email no se encuentra registrado", "Usted debe registrarse");
      //const emailRegistrado = new Registro("email", "password");
      return;
      
    }
    if (email === emailRegistrado.email && password !== emailRegistrado.password) {
      let msjContraIncorrecta = swal("Contraseña incorrecta", "Vuelva a intentarlo!");
      return;
    }
    if (email === emailRegistrado.email && password === emailRegistrado.password) {
      console.log(emailRegistrado)
      //console.log(passwordRegistrado)
      window.location.href = "./coleccion.html";
    } 
  }




