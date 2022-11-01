((document) => {
 
  const controlFactory = () => {
    const form = (options) => {
      const { to, method, controls } = options;

      const formContainer = document.createElement("form");
      formContainer.action = to;
      formContainer.method = method;

      Array.from(controls).forEach((control) =>
        formContainer.appendChild(control)
      );

      return formContainer;
    };

    const button = (options) => {
      const { text, subtype } = options;

      const button = document.createElement("button");
      button.type = subtype;
      button.classList.add('button')
      button.append(text);

      let className = "secundary";

      switch (subtype) {
        case "submit":
          className = "primary";
          break;

        case "reset":
          className = "danger";
          break;

        default:
          className = "secundary";
          break;
      }

      button.classList.add(className);

      const container = document.createElement("div");
      container.classList.add("form-group");
      container.classList.add("form-button-group");
      container.appendChild(button);

      return container;
    };

    const textarea = (options) => {
      const { name, value, placeholder, title, required, rows, cols } = options;

      const input = document.createElement("textarea");
      input.className = "form-textarea-control";
      input.name = name;
      input.id = name;

      if (required != undefined && required !== "") {
        input.required = required && required === true;
      }

      if (value !== undefined && value !== "") {
        input.append(value);
      }

      if (placeholder !== undefined && placeholder !== "") {
        input.placeholder = placeholder;
      }

      if (title !== undefined && title !== "") {
        input.title = title;
      }

      if (rows !== undefined && rows !== "") {
        input.rows = rows;
      }

      if (cols !== undefined && cols !== "") {
        input.cols = cols;
      }

      return input;
    };

    const select = (options) => {
      const { name, value, title, required, values } = options;
      const input = document.createElement("select");
      input.className = "form-select-control";
      input.name = name;
      input.id = name;

      if (required != undefined && required !== "") {
        input.required = required && required === true;
      }

      if (value !== undefined && value !== "") {
        input.value = value;
      }

      if (title !== undefined && title !== "") {
        input.title = title;
      }

      Array.from(values).forEach((item) => {
        const option = document.createElement("option");
        option.value = item.value;
        option.append(item.text);
        if (item.default && item.default === true) {
          option.selected = true;
        }
        input.appendChild(option);
      });

      return input;
    };

    const input = (options) => {
      const { type, name, value, placeholder, title, pattern, required } =
        options;
      const input = document.createElement("input");
      input.className = "form-control";
      input.type = type;
      input.name = name;
      input.id = name;

      if (required != undefined && required !== "") {
        input.required = required && required === true;
      }

      if (value !== undefined && value !== "") {
        input.value = value;
      }

      if (placeholder !== undefined && placeholder !== "") {
        input.placeholder = placeholder;
      }

      if (title !== undefined && title !== "") {
        input.title = title;
      }

      if (pattern !== undefined && pattern !== "") {
        input.pattern = pattern;
      }

      return input;
    };

    const checkbox = ({ text, value, required }) => {
      const input = document.createElement("input");
      input.type = "checkbox";
      input.name = value;
      input.id = value;
      input.required = required;

      const label = document.createElement("label");
      label.htmlFor = value;
      label.append(text);

      const container = document.createElement("div");
      container.className = "checkbox-group-item";
      container.appendChild(input);
      container.appendChild(label);
      return container;
    };

    const checkboxList = ({ values, required }) => {
      const container = document.createElement("div");
      container.className = "checkbox-list";

      Array.from(values).forEach((option) =>
        container.appendChild(checkbox({ required: required, ...option }))
      );

      return container;
    };

    const radio = ({ name, text, value, required }) => {
      const input = document.createElement("input");
      input.type = "radio";
      input.name = name;
      input.id = `${name}_${value}`;
      input.value = value;
      input.required = required;

      const label = document.createElement("label");
      label.htmlFor = `${name}_${value}`;
      label.append(text);

      const container = document.createElement("div");
      container.className = "radio-group-item";
      container.appendChild(input);
      container.appendChild(label);
      return container;
    };

    const radioGroup = ({ name, values, required }) => {
      const container = document.createElement("div");
      container.className = "radio-group";

      Array.from(values).forEach((option) =>
        container.appendChild(
          radio({ name: name, required: required, ...option })
        )
      );

      return container;
    };

    const build = (options) => {
      const { type } = options;
      switch (type) {
        case "textarea":
          return textarea(options);
        case "select":
          return select(options);
        case "checkboxlist":
          return checkboxList(options);
        case "radiogroup":
          return radioGroup(options);
        case "button":
          return button(options);
        default:
          return input(options);
      }
    };

    const control = (options) => {
      const { name, text, helpText } = options;
      const container = document.createElement("div");
      container.className = "form-group";

      const input = build(options);

      const label = document.createElement("label");
      label.htmlFor = name;
      label.className = "form-label";
      label.append(text);

      const help = document.createElement("p");
      help.className = "help-text";
      help.append(helpText);

      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(help);

      return container;
    };

    return {
      control: control,
      button: button,
      form: form,
    };
  };

  const levelOfstudies = {
    type: "radiogroup",
    text: "Nivel de estudios",
    title: "Debe indicar cual es su nivel de estudios.",
    name: "levelOfstudies",
    helpText: "",
    required: true,
    values: [
      {
        text: "Sin estudios",
        value: "LOS01",
      },
      {
        text: "Básica obligatoria",
        value: "LOS02",
      },
      {
        text: "Bachillerato",
        value: "LOS03",
      },
      {
        text: "Universitaria",
        value: "LOS04",
      },
    ],
  };

  const maritalStatus = {
    type: "radiogroup",
    text: "Estado civil",
    name: "marital_status",
    helpText: "",
    required: true,
    values: [
      {
        text: "Soltero",
        value: "MS01",
      },
      {
        text: "Casado",
        value: "MS02",
      },
      {
        text: "Separado",
        value: "MS03",
      },
      {
        text: "Divorciado",
        value: "MS04",
      },
      {
        text: "Viudo",
        value: "MS05",
      },
    ],
  };

  const dependencies = {
    type: "checkboxlist",
    text: "Datos familiares",
    name: "dependences",
    helpText: "",
    values: [
      {
        text: "Hijos menores de edad",
        value: "DF01",
      },
      {
        text: "Ascendientes mayores de 75",
        value: "DF02",
      },
      {
        text: "Ascendientes dependientes",
        value: "DF03",
      },
      {
        text: "Menores de 65 años a cargo con discapacidad",
        value: "DF04",
      },
      {
        text: "Hijos menores de 3 años",
        value: "DF05",
      },
    ],
  };

  const name = {
    type: "text",
    name: "nombre",
    placeholder: "Pedro González Pacheco",
    value: "",
    text: "Nombre y apellido",
    title: "Debe introducir su nombre y apellido",
    helpText: "Indique su nombre y apellido.",
    required: true,
  };

  const cardID = {
    type: "text",
    name: "cardid",
    placeholder: "65984585F",
    value: "",
    text: "D.N.I./N.I.F/N.I.E.",
    title: "Debe introducir su número de identificación personal",
    helpText: "Indique número de identificación.",
    required: true,
  };

  const address = {
    type: "textarea",
    name: "address",
    placeholder: "C/ La Rioja 15 3D IZQ, 28065, Madrid",
    value: "",
    text: "Dirección",
    title: "Debe introducir su dirección de contacto",
    helpText: "Indique su dirección física a efecto de notificación.",
    required: true,
    rows: 4,
  };

  const phone = {
    type: "tel",
    name: "telefono",
    placeholder: "+34 555-555-5555",
    value: "",
    text: "Teléfono",
    title: "Introduzca su número de teléfono",
    helpText: "Indíquenos un número de teléfono de contacto",
    required: true,
  };

  const services = {
    type: "select",
    text: "Tipo de consulta",
    title: "Debe indicar que tipo de consulta necesita realizar",
    name: "query_type",
    helpText: "Seleccione la consulta que necesita realizar.",
    required: true,
    values: [
      {
        text: "Declaración de la renta",
        value: "QT01",
      },
      {
        text: "Prestaciones de la comunidad autónoma",
        value: "QT02",
      },
      {
        text: "Prestaciones del estado",
        value: "QT03",
      },
      {
        text: "Prestaciones de su localidad",
        value: "QT04",
      },
    ],
  };

  const factory = controlFactory();

  const row = document.createElement("div");
  row.className = "row";
  row.appendChild(factory.control(maritalStatus));
  row.appendChild(factory.control(levelOfstudies));
  row.appendChild(factory.control(dependencies));

  const form = {
    to: "/",
    method: "get",
    controls: [
      factory.control(name),
      factory.control(cardID),
      factory.control(phone),
      factory.control(address),
      row,
      factory.control(services),
      factory.button({
        type: "button",
        subtype: "submit",
        text: "Enviar",
      }),
    ],
  };

  // header
  const header = document.createElement("header");
  const title = document.createElement("h1");
  const subtitle = document.createElement("h2");
  title.append("Prestaciones Sociales");
  subtitle.append("Buscador de ayudas y subvenciones públicas y privadas");
  header.appendChild(title);
  header.appendChild(subtitle);

  // footer
  const footer = document.createElement("footer");
  const logo1 = document.createElement("img");
  logo1.src = "/assets/images/logo1.png";
  logo1.className = "logo-socio";
  logo1.title = "Ministerio de hacienda";
  const logo2 = document.createElement("img");
  logo2.src = "/assets/images/logo2.png";
  logo2.className = "logo-socio";
  logo2.title = "Ministerio de trabajo";

  footer.appendChild(logo1);
  footer.appendChild(logo2);

  document.getElementById("main").appendChild(header);
  document.getElementById("main").appendChild(factory.form(form));
  document.getElementById("main").appendChild(footer);

})(window.document);
