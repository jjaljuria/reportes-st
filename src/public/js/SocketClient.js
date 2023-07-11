const socket = io()
const form = document.getElementById('formRequest')

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const data = serialize(form)
    await fetch('/solicitud', {
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    form.reset()
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
