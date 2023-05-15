let carrito = JSON.parse(sessionStorage.getItem('carrito')) || []
let compra = document.getElementById("compra")

let contador = carrito.length
            carrito2.innerHTML = ""
            console.log(contador)
            let productoActualizado = document.createElement('p')
            productoActualizado.innerHTML = `${contador}`
            carrito2.appendChild(productoActualizado)

let id = 0

class Registro {
    constructor (email, password,) {
    this.id = ++id;
    this.email = email;
    this.password = password;
}
}

let registrados = JSON.parse(localStorage.getItem('registrados')) || []

    function register() {   
        event.preventDefault(); // evitar el comportamiento por defecto del formulario
        
    
            let email = document.getElementById("email").value;
            console.log(email)
            let password = document.getElementById("password").value;
            console.log(password)
            let confirmpassword = document.getElementById("confirmpassword").value;
            console.log(confirmpassword)
    
            let emailRegistrado = registrados.find(registrado => registrado.email === email)

            if (emailRegistrado != undefined) {
                console.log(emailRegistrado)
                let msjUsuario = swal("El email ya está registrado", "Inicie sesión con su mail");
                return;
                }
            if (password !== confirmpassword) {
                let msjContraseña = swal("Las contraseñas no coinciden");
                return;  
            }

        const nuevoUsuario = new Registro(email, password);
        registrados.push(nuevoUsuario);
        console.log(registrados);

        localStorage.setItem('registrados', JSON.stringify(registrados));
        window.location.href = "./coleccion.html";
    }
                
    

