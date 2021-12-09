//Toggle
$("#menu-toggle").click(function (e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$("#gestionar-usuario").click(function () {
  $("#menu-usuario").toggle();
});
$("#gestionar-material").click(function () {
  $("#menu-material").toggle();
 
});

// $("#gestionar").focus(function () {
//   $("#area").append("Gestionar usuario");
// });
// $("#gestionar").blur(function () {
//   $("#area").text("");
// });



//validaciones de autenticar usuario
document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("formulario").addEventListener('submit', validarFormulario); 
});

function validarFormulario(evento) {
  evento.preventDefault();
  var user= document.getElementById('user').value;
  if(user.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  var password = document.getElementById('password').value;
  if (password.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}

