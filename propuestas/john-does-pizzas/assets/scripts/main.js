((document) => {
  const errorMessage = (message) => {
    const container = document.createElement("p");
    container.append(message);
    container.classList.add("error-message");
    return container;
  };

  const validationStep = (current, nextStep) => {
    const isFunction = (candidate) => typeof candidate === "function";
    const isStep = (candidate) => typeof candidate === "object";
    const validate = () => {
      const current = validator();

      if (next !== null) {
        return next.validate() && current;
      }

      return current;
    };

    if (!isFunction(current)) {
      throw new Error("invalid current validator");
    }

    const validator = current;
    const next = isStep(nextStep) ? nextStep : null;

    return {
      validate: validate,
    };
  };

  const cleanValidations = () => {
    Array.from(document.getElementsByClassName("has-error")).forEach((x) =>
      x.classList.remove("has-error")
    );
    Array.from(document.getElementsByClassName("error-message")).forEach((x) =>
      x.remove()
    );

    return true;
  };

  const notEmptyStringValidator = ({ name, message }) => {
    const value = document.getElementById(name).value;
    if (value === "" || value === undefined) {
      const parent = document.getElementById(name).parentNode;
      parent.classList.add("has-error");
      parent.appendChild(errorMessage(message));
      return false;
    }
    return true;
  };

  const atLeastOneSelectedItemValidator = ({ name, message }) => {
    const checkedRadios = Array.from(
      document.getElementsByClassName(name)
    ).filter((x) => x.checked);

    if (checkedRadios.length === 0) {
      const parent = document.getElementById(name).parentNode;
      parent.classList.add("has-error");
      parent.appendChild(errorMessage(message));
      return false;
    }
    return true;
  };

  const validate = (ev) => {
    const isValid = pipeline.validate();
    if (!isValid) {
      ev.preventDefault();
    }
  };

  const price = () => {
    let price = 0;

    Array.from(document.getElementsByClassName("toppings"))
      .filter((x) => x.checked)
      .forEach((x) => price++);

    Array.from(document.getElementsByClassName("size"))
      .filter((x) => x.checked && !isNaN(x.dataset["price"]))
      .forEach((x) => (price += parseInt(x.dataset["price"])));

    document.getElementById("total").innerText = price;
  };

  const fields = {
    name: {
      name: "name",
      message: "El campo es obligatorio.",
    },
    phone: {
      name: "phone",
      message: "El campo es obligatorio.",
    },
    email: {
      name: "email",
      message: "El campo es obligatorio.",
    },
    address: {
      name: "address",
      message: "El campo es obligatorio.",
    },
    size: {
      name: "size",
      message: "Debe seleccionar un tamaño de pizza.",
    },
    toppings: {
      name: "toppings",
      message: "Debe seleccionar al menos un ingrediente.",
    },
  };

  const steps = [
    () => atLeastOneSelectedItemValidator(fields.toppings),
    () => atLeastOneSelectedItemValidator(fields.size),
    () => notEmptyStringValidator(fields.address),
    () => notEmptyStringValidator(fields.email),
    () => notEmptyStringValidator(fields.phone),
    () => notEmptyStringValidator(fields.name),
    () => cleanValidations(),
  ];

  let pipeline = null;

  const onPageLoad = () => {
    steps.forEach((step) => (pipeline = validationStep(step, pipeline)));

    document.getElementById("form").addEventListener("submit", validate);
    document
      .getElementById("reset-btn")
      .addEventListener("click", cleanValidations);

    Array.from(document.getElementsByClassName("size")).forEach((x) =>
      x.addEventListener("change", price)
    );

    Array.from(document.getElementsByClassName("toppings")).forEach((x) =>
      x.addEventListener("change", price)
    );
  };

  document.addEventListener("DOMContentLoaded", onPageLoad);
})(window.document);
