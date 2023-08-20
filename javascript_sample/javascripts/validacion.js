function emailValidation() {
  const form = document.getElementById('form');
  const emailConfir = document.getElementById('email_confirm')
  const element = document.createElement('p');
  const message = document.createTextNode("Correo electrónico no coincidente.");
  element.appendChild(message);
  element.classList.add("alert");
  element.setAttribute('id', 'alert');
  form.addEventListener('submit', e => {
    e.preventDefault();
    if (form.email.value !== form.email_confirm.value) {
      const tableRows = document.getElementsByTagName("tr");
      const secondRow = tableRows[3];
      secondRow.parentNode.insertBefore(element, secondRow);
      emailConfir.classList.add('alert_c');
    } else {
      emailConfir.classList.remove('alert_c');
      element.parentNode.removeChild(element);
       form.submit();
    }
  });
};

window.onload = emailValidation;