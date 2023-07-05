const socket = io()
const form = document.getElementById('formRequest')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const data = serialize(form)
    socket.emit('solicitud', data)
})

function serialize(formData) {
    const data = []
    for (const file of formData) {
        if (file instanceof HTMLInputElement || file instanceof HTMLTextAreaElement) {
            data.push({ name:file.name, value: file.value })
        }
    }
    return data
}
