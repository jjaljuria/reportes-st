const socket = io()
const form = document.getElementById('formRequest')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    // const data = serialize(form)
    // await fetch('/solicitud', {
    //     method: 'post',
    //     headers:{
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // })


    // Toastify({
    //     text: "Solicitud Enviada",
    //     className: 'bg-success fs-3',
    //     style: {
    //         background: "none",
    //       }
    //   }).showToast();
    // form.reset()
})

function serialize(formData) {
    const data = {}
    for (const file of formData) {
        if (file instanceof HTMLInputElement || file instanceof HTMLTextAreaElement) {
            data[file.name] = file.value
        }
    }
    return data
}

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()