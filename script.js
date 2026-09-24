const formRegistro = document.getElementById("form-registro");

if (formRegistro) {
  formRegistro.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const contrasena = document.getElementById("contrasena").value;
    const confirmarContrasena = document.getElementById(
      "confirmar-contrasena"
    ).value;

    if (contrasena !== confirmarContrasena) {
      alert("Las contraseñas no coinciden. Inténtalo de nuevo.");
      return;
    }

    const nombre = document.getElementById("nombre").value;
    const usuario = document.getElementById("usuario").value;

    const cuenta = {
      nombre: nombre,
      usuario: usuario,
      contrasena: contrasena
    };

    localStorage.setItem("cuenta", JSON.stringify(cuenta));

    alert("Cuenta creada correctamente");
    window.location.href = "Login.html";
  });
}
const formLogin = document.getElementById("form-login");

if (formLogin) {
  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contrasena = document.getElementById("contrasena").value;

    const cuentaGuardada = localStorage.getItem("cuenta");

    if (!cuentaGuardada) {
      alert("No hay una cuenta registrada. Regístrate primero.");
      return;
    }

    const cuenta = JSON.parse(cuentaGuardada);

    if (
      usuario === cuenta.usuario &&
      contrasena === cuenta.contrasena
    ) {
      alert("Bienvenido, " + cuenta.usuario);
      window.location.href = "menu.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
}

