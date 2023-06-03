let edadIngresada = Number(prompt("por favor ingresar edad"));

if (edadIngresada >= 18) {
  alert("Puedes ingresar .Bienvenido");
} else {
  alert("El ingreso es  bajo su propia responsabilidad");
}

window.onbeforeunload = function () {
  return "Estás saliendo del curso";
};
