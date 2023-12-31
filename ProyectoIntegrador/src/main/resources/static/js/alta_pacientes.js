const btnEnviar = document.getElementById('btnEnviar');

// Añadir un evento submit al formulario
formulario.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevenir el envío por defecto del formulario

  // Crear un objeto con los datos a enviar
    const domicilio = {
      calle: calle.value,
      localidad: localidad.value,
      numero: numero.value,
      provincia: provincia.value
    };

  const paciente = {
    nombre: nombre.value,
    apellido: apellido.value,
    dni: dni.value,
    domicilio: domicilio,
  };

const settings = {method: 'POST',
                     headers: {
                       'Content-Type': 'application/json'
                     },
                     body: JSON.stringify(paciente)}


  // Realizar la solicitud POST al servidor
  fetch('/pacientes', settings  )
  .then(response => {
    if (!response.ok) {
      throw new Error('Error al enviar los datos');
    }
    // Si la respuesta es correcta, mostrar un mensaje de éxito
    alert('Los datos se han guardado correctamente');
window.location.href = "/pacientes.html";
  })
  .catch(error => {
    console.error(error);
    alert('Ha ocurrido un error al guardar los datos');
    location.reload();
  });
});
