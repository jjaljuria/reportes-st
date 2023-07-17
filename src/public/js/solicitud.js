// Variables
const form = document.getElementById('formRequest')
const usuario = document.getElementById('usuario')
const solicitado = document.getElementById('solicitado')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    form.classList.add('was-validated')

    if(!form.checkValidity()){
        return;
    }
    
    const data = serialize(form)
    await fetch('/solicitud', {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })


    Toastify({
        text: "Solicitud Enviada",
        className: 'bg-success fs-3',
        style: {
            background: "none",
        }
    }).showToast();

    reset()
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


function usuarioIgualQueSolicitado(){
    
    const inputHandler = (e) =>{
        solicitado.value = e.target.value
    }

    const focusHandler = (e) =>{
        usuario.removeEventListener('input', inputHandler)
    }
    
    usuario.addEventListener('input', inputHandler)
    solicitado.addEventListener('focus',  focusHandler)
}
usuarioIgualQueSolicitado()

function reset(){
    form.reset()
    form.classList.remove('was-validated')
    usuarioIgualQueSolicitado()
}