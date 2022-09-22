// Creo usuarios para comparar si el logueo es correcto o no
const USERS = [
  { user: "Martin", password: "martin" },
  { user: "valentina", password: "valentina" },
];

// // LOGICA DEL BOTON ENTRAR del login (validacion de ingreso)
const entrarAdmin = () => {
  // capturo los input y mensaje para usuario
  const inputUsuario = document.getElementById("input_usuario");
  const inputPassword = document.getElementById("input_password");
  const mensajeDeLogin = document.getElementById("estadoDeLogueo");

  mensajeDeLogin.style = "";
  // le indico al usuario que estamos validando su ingreso.
  mensajeDeLogin.innerHTML = "Validando ...";

  setTimeout(() => {
    // Creo un flag o bandera para que controle si muestro el error o redireccion en caso de validar
    let validationOk = false;

    for (let i = 0; i < USERS.length; i++) {
      // Version clasica con for
      if (
        USERS[i].user === inputUsuario.value &&
        USERS[i].password === inputPassword.value
      ) {
        validationOk = true;
        // Registrar el ingreso
        sessionStorage.setItem("usuarioOK", "true");
      }
    }
    if (validationOk) {
      cargarMenu();
      window.location = "./administracion.html";
    } else {
      mensajeDeLogin.style = "color:red ;font-weight:bold";
      mensajeDeLogin.innerHTML = "Usuario o contraseña incorrectos!";
      form.reset();
    }
  }, 2000);
};
