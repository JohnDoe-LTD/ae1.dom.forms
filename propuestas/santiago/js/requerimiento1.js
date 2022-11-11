function cargar() {
  //Nodo formulario
  let formulario = document.createElement("form");
  formulario.setAttribute("action", "");

  //Agregando el formulario al DOM
  document.getElementById("contenido").appendChild(formulario);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE TEXTO DNI +++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labeldni = document.createElement("label");

  //Nodo input
  let inputdni = document.createElement("input");

  //Nodo de tipo text
  let textdni = document.createTextNode("DNI:");

  //Configuración del input añadiendo atributos
  inputdni.setAttribute("type", "text");
  inputdni.setAttribute("name", "DNI");
  inputdni.setAttribute("placeholder", "Pon tu DNI...");

  //Agregando al DOM el label
  labeldni.appendChild(textdni);
  formulario.appendChild(labeldni);
  //Agregando al DOM el input
  formulario.appendChild(inputdni);

  //nodo br
  let br1 = document.createElement("br");
  let br2 = document.createElement("br");
  formulario.appendChild(br1);
  formulario.appendChild(br2);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE TEXTO NOMBRE ++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelnombre = document.createElement("label");
  //Nodo input
  let inputnombre = document.createElement("input");

  //Nodo de tipo text
  let textnombre = document.createTextNode("Nombre:");

  //Configuración del input añadiendo atributos
  inputnombre.setAttribute("type", "text");
  inputnombre.setAttribute("name", "nombre");
  inputnombre.setAttribute("placeholder", "Pon tu nombre...");

  //Agregando al DOM el label
  labelnombre.appendChild(textnombre);
  formulario.appendChild(labelnombre);

  //Agregando al DOM el input
  formulario.appendChild(inputnombre);

  //nodo br
  let br3 = document.createElement("br");
  let br4 = document.createElement("br");
  formulario.appendChild(br3);
  formulario.appendChild(br4);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE TEXTO APELLIDOS +++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelapellidos = document.createElement("label");

  //Nodo input
  let inputapellidos = document.createElement("input");

  //Nodo de tipo text
  let textapellidos = document.createTextNode("Apellidos:");

  //Configuración del input añadiendo atributos
  inputapellidos.setAttribute("type", "text");
  inputapellidos.setAttribute("name", "Apellidos");
  inputapellidos.setAttribute("placeholder", "Pon tus Apellidos...");

  //Agregando al DOM el label
  labelapellidos.appendChild(textapellidos);
  formulario.appendChild(labelapellidos);

  //Agregando al DOM el input
  formulario.appendChild(inputapellidos);

  //nodo br
  let br5 = document.createElement("br");
  let br6 = document.createElement("br");
  formulario.appendChild(br5);
  formulario.appendChild(br6);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE TEXTO DIRECCIÓN +++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labeldireccion = document.createElement("label");

  //Nodo input
  let inputdireccion = document.createElement("input");

  //Nodo de tipo text
  let textdireccion = document.createTextNode("Dirección:");

  //Configuración del input añadiendo atributos
  inputdireccion.setAttribute("type", "text");
  inputdireccion.setAttribute("name", "Dirección");
  inputdireccion.setAttribute("placeholder", "Pon tu Dirección...");

  //Agregando al DOM el label
  labeldireccion.appendChild(textdireccion);
  formulario.appendChild(labeldireccion);

  //Agregando al DOM el input
  formulario.appendChild(inputdireccion);

  //nodo br
  let br7 = document.createElement("br");
  let br8 = document.createElement("br");
  formulario.appendChild(br7);
  formulario.appendChild(br8);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE TEXTO TELEFONO ++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labeltelefono = document.createElement("label");

  //Nodo input
  let inputtelefono = document.createElement("input");

  //Nodo de tipo text
  let texttelefono = document.createTextNode("Telefono:");

  //Configuración del input añadiendo atributos
  inputtelefono.setAttribute("type", "phone");
  inputtelefono.setAttribute("name", "Telefono");
  inputtelefono.setAttribute("placeholder", "Pon tu Telefono...");

  //Agregando al DOM el label
  labeltelefono.appendChild(texttelefono);
  formulario.appendChild(labeltelefono);

  //Agregando al DOM el input
  formulario.appendChild(inputtelefono);

  //nodo br
  let br9 = document.createElement("br");
  let br10 = document.createElement("br");
  formulario.appendChild(br9);
  formulario.appendChild(br10);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE RADIO 1 +++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelradio = document.createElement("label");
  let labelcamposradio1 = document.createElement("label");
  let labelcamposradio2 = document.createElement("label");
  let labelcamposradio3 = document.createElement("label");
  let labelcamposradio4 = document.createElement("label");

  //Nodo input
  let inputradio1 = document.createElement("input");
  let inputradio2 = document.createElement("input");
  let inputradio3 = document.createElement("input");
  let inputradio4 = document.createElement("input");
  //Nodo de tipo text
  let textradio = document.createTextNode("Escoge el radio");
  let textradio1 = document.createTextNode("Radio 1");
  let textradio2 = document.createTextNode("Radio 2");
  let textradio3 = document.createTextNode("Radio 3");
  let textradio4 = document.createTextNode("Radio 4");

  //Configuración del input añadiendo atributos
  inputradio1.setAttribute("type", "radio");
  inputradio1.setAttribute("name", "Radio 1");
  inputradio1.setAttribute("value", "Radio1");

  //Configuración del input añadiendo atributos
  inputradio2.setAttribute("type", "radio");
  inputradio2.setAttribute("name", "Radio 2");
  inputradio2.setAttribute("value", "Radio2");

  //Configuración del input añadiendo atributos
  inputradio3.setAttribute("type", "radio");
  inputradio3.setAttribute("name", "Radio 3");
  inputradio3.setAttribute("value", "Radio3");

  //Configuración del input añadiendo atributos
  inputradio4.setAttribute("type", "radio");
  inputradio4.setAttribute("name", "Radio 4");
  inputradio4.setAttribute("value", "Radio4");

  //Agregando al DOM el label
  labelradio.appendChild(textradio);
  formulario.appendChild(labelradio);
  let br13 = document.createElement("br");
  formulario.appendChild(br13);

  labelcamposradio1.appendChild(textradio1);
  formulario.appendChild(labelcamposradio1);
  formulario.appendChild(inputradio1);

  labelcamposradio2.appendChild(textradio2);
  formulario.appendChild(labelcamposradio2);
  formulario.appendChild(inputradio2);

  labelcamposradio3.appendChild(textradio3);
  formulario.appendChild(labelcamposradio3);
  formulario.appendChild(inputradio3);

  labelcamposradio4.appendChild(textradio4);
  formulario.appendChild(labelcamposradio4);
  formulario.appendChild(inputradio4);
  //nodo br
  let br11 = document.createElement("br");
  let br12 = document.createElement("br");
  formulario.appendChild(br11);
  formulario.appendChild(br12);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO DE RADIO 2 +++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelradiot = document.createElement("label");
  let labelcamposradio5 = document.createElement("label");
  let labelcamposradio6 = document.createElement("label");
  let labelcamposradio7 = document.createElement("label");
  let labelcamposradio8 = document.createElement("label");

  //Nodo input
  let inputradio5 = document.createElement("input");
  let inputradio6 = document.createElement("input");
  let inputradio7 = document.createElement("input");
  let inputradio8 = document.createElement("input");
  //Nodo de tipo text
  let textradiod = document.createTextNode("Escoge el radio");
  let textradio5 = document.createTextNode("Radio 5");
  let textradio6 = document.createTextNode("Radio 6");
  let textradio7 = document.createTextNode("Radio 7");
  let textradio8 = document.createTextNode("Radio 8");

  //Configuración del input añadiendo atributos
  inputradio5.setAttribute("type", "radio");
  inputradio5.setAttribute("name", "Radio 5");
  inputradio5.setAttribute("value", "Radio5");

  //Configuración del input añadiendo atributos
  inputradio6.setAttribute("type", "radio");
  inputradio6.setAttribute("name", "Radio 6");
  inputradio6.setAttribute("value", "Radio6");

  //Configuración del input añadiendo atributos
  inputradio7.setAttribute("type", "radio");
  inputradio7.setAttribute("name", "Radio 7");
  inputradio7.setAttribute("value", "Radio7");

  //Configuración del input añadiendo atributos
  inputradio8.setAttribute("type", "radio");
  inputradio8.setAttribute("name", "Radio 8");
  inputradio8.setAttribute("value", "Radio8");

  //Agregando al DOM el label
  labelradiot.appendChild(textradiod);
  formulario.appendChild(labelradiot);
  let br57 = document.createElement("br");
  formulario.appendChild(br57);

  labelcamposradio5.appendChild(textradio5);
  formulario.appendChild(labelcamposradio5);
  formulario.appendChild(inputradio5);

  labelcamposradio6.appendChild(textradio6);
  formulario.appendChild(labelcamposradio6);
  formulario.appendChild(inputradio6);

  labelcamposradio7.appendChild(textradio7);
  formulario.appendChild(labelcamposradio7);
  formulario.appendChild(inputradio7);

  labelcamposradio8.appendChild(textradio8);
  formulario.appendChild(labelcamposradio8);
  formulario.appendChild(inputradio8);
  //nodo br
  let br55 = document.createElement("br");
  let br56 = document.createElement("br");
  formulario.appendChild(br55);
  formulario.appendChild(br56);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ DOS IMAGENES +++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelimagen = document.createElement("label");

  //Nodo a
  let img1 = document.createElement("img");
  let img2 = document.createElement("img");

  //Nodo de tipo text
  let textimagen = document.createTextNode(
    "Aquí van dos imágenes de mis comidas favorita:"
  );

  //Configuración del input añadiendo atributos
  img1.setAttribute(
    "src",
    "https://queapetito.com/wp-content/uploads/2019/02/IMG_3896-600x469.jpg"
  );
  img1.setAttribute("width", "200");

  img2.setAttribute(
    "src",
    "https://img.europapress.es/fotoweb/fotonoticia_20220808081246_1200.jpg"
  );
  img2.setAttribute("width", "200");

  //Agregando al DOM el label
  labelimagen.appendChild(textimagen);
  formulario.appendChild(labelimagen);
  let br15 = document.createElement("br");
  formulario.appendChild(br15);
  //Agregando al DOM el a
  formulario.appendChild(img1);
  formulario.appendChild(img2);
  //nodo br

  let br16 = document.createElement("br");

  formulario.appendChild(br16);
  let br99 = document.createElement("br");

  formulario.appendChild(br99);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO SELECT +++++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labelselect = document.createElement("label");

  //Nodo select y opction
  let inputselect = document.createElement("select");
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  let option3 = document.createElement("option");

  //Nodo de tipo text
  let textselect = document.createTextNode("Selecciona una opción");
  let textoption1 = document.createTextNode("Opción 1");
  let textoption2 = document.createTextNode("Opción 2");
  let textoption3 = document.createTextNode("Opción 3");

  //Configuración del option añadiendo atributos
  option1.setAttribute("value", "1");
  option2.setAttribute("value", "2");
  option3.setAttribute("value", "3");

  //Agregando al DOM el label
  labelselect.appendChild(textselect);
  formulario.appendChild(labelselect);

  option1.appendChild(textoption1);
  inputselect.appendChild(option1);
  option2.appendChild(textoption2);
  inputselect.appendChild(option2);
  option3.appendChild(textoption3);
  inputselect.appendChild(option3);

  formulario.appendChild(inputselect);

  //Agregando al DOM el input
  formulario.appendChild(inputselect);

  //nodo br
  let br17 = document.createElement("br");
  let br18 = document.createElement("br");
  formulario.appendChild(br17);
  formulario.appendChild(br18);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  //++++++++++++++++++++++++++++++++++++++++++ CAMPO TEXTAREA +++++++++++++++++++++++++++++++++++++++++++++++++
  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo label
  let labeltextarea = document.createElement("label");
  //Nodo input
  let inputtextarea = document.createElement("textarea");

  //Nodo de tipo text
  let texttextarea = document.createTextNode("TextArea:");

  //Configuración del input añadiendo atributos
  inputtextarea.setAttribute("rows", "7");
  inputtextarea.setAttribute("cols", "40");
  inputtextarea.setAttribute("name", "textarea");
  inputtextarea.setAttribute("placeholder", "Escribe un mensaje....");

  //Agregando al DOM el label
  labeltextarea.appendChild(texttextarea);
  formulario.appendChild(labeltextarea);
  let br20 = document.createElement("br");
  formulario.appendChild(br20);

  //Agregando al DOM el input
  formulario.appendChild(inputtextarea);

  //nodo br

  let br21 = document.createElement("br");
  formulario.appendChild(br21);
  let br22 = document.createElement("br");
  formulario.appendChild(br22);

  //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

  //Nodo input
  let botonenviar = document.createElement("input");

  //Configuración del input añadiendo atributos
  botonenviar.setAttribute("type", "submit");
  botonenviar.setAttribute("value", "enviar");

  //Agregando al DOM el input
  formulario.appendChild(botonenviar);

  //nodo br
}

cargar();
