
// Enunciado 2
// En esta actividad debes desarrollar un formulario completo, sin envío al servidor, que sirva 
// para dar de alta un pedido de una pizza dentro de una web de una pizzería.

// Los campos del formulario son los siguientes:

//     Nombre
//     Dirección
//     Teléfono
//     Email
//     Un radio button con el tamaño de la pizza, pudiendo ser pequeña, mediana o grande
//     4 Checkbox con los diferentes ingredientes de la pizza
//     Un botón de procesar el pedido

// Todos los campos tienen que estar rellenos de tipo texto deben de estar rellenos para que sean válidos,
// además debe de elegir obligatoriamente un tamaño de la pizza y al menos un ingrediente para ella.

// Al pulsar el botón de procesar el pedido, se mostrará el precio total del pedido calculándolo en base a los
// siguientes parámetros:

//     5€ para la pizza pequeña
//     10€ para la pizza mediana
//     15€ para la pizza grande
//     Cada ingrediente elegido tendrá un valor de 1€


let formulario = document.getElementById("formulario");
let nombre = document.getElementById("nombre");
let direccion = document.getElementById("direccion");
let telefono = document.getElementById("telefono");
let mail = document.getElementById("mail");
let radio1 = document.getElementById("pequeña");
let radio2 = document.getElementById("mediana");
let radio3 = document.getElementById("grande");
let checkbox1 = document.getElementById("checkbox1");
let checkbox2 = document.getElementById("checkbox2");
let checkbox3 = document.getElementById("checkbox3");
let checkbox4 = document.getElementById("checkbox4");
let precio = 0;

function validar() {

  //Comprobamos que hay texto escrito
  if (nombre.value.trim() == '') {
    alert("El nombre es obligatorio")
  }
  if (direccion.value.trim() == '') {
    alert("La dirección es obligatoria")
  }
  if (telefono.value.trim() == '') {
    alert("El telefono es obligatorio")
  }
  if (mail.value.trim() == '') {
    alert("El email es obligatorio")
  }

  //Comprobamos que hay un tamaño escogido
  if (radio1.checked || radio2.checked || radio3.checked) {

  } else {
    alert("Escoge el tamño de la pizza");
  }

  //Comprobamos que hay al menos un ingrediente
  if (checkbox1.checked || checkbox2.checked || checkbox3.checked || checkbox4.unchecked) {

  } else {
    alert("Escoge al menos un ingrediente");
  }

};

function procesarPedido() {

  precio = 0;
  if (radio1.checked) {
    precio = 5;
  }
  if (radio2.checked) {
    precio = 10;
  }

  if (radio3.checked) {
    precio = 15;
  }

  if (checkbox1.checked) {
    precio = precio + 10;
  }
  if (checkbox2.checked) {
    precio = precio + 10;
  }
  if (checkbox3.checked) {
    precio = precio + 10;
  }
  if (checkbox4.checked) {
    precio = precio + 10;
  }
  return alert("El precio es: " + precio + "€");
}

function todos() {
  validar();
  
  procesarPedido();
}


