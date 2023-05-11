let main = document.getElementsByClassName("contenidoIndex")

let msj = swal({
    text: "Quieres recibir nuestras novedades?",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  })
  .then((willDelete) => {
    if (willDelete) {
      swal("Inicia sesión y recibirás nuestras novedades a tu e-mail!", {
        icon: "success",
      });
    } else {
      swal("Te esperamos en otro momento!");
    }
  });
