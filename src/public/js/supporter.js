// Variables
const form = document.getElementById('formSupporter')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    e.stopPropagation()

    form.classList.add('was-validated')

    if(!form.checkValidity()){
        return;
    }
    
    const data = serialize(form)
    await fetch('/supporter', {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    location.reload()
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



async function deleteSupporter(id){
    await fetch('/supporter',{
        method: 'DELETE',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })

    location.reload()
}