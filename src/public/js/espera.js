socket = io()

const listRequest = document.getElementById('listRequest')
const supporter = document.getElementById('supporter')

socket.on('newRequest', (data) =>{
    let html = `
        <li class="list-group-item" id="request-${data.id}">
        <b>Solicitante:</b> ${data.solicitado} <br>
        <b>Usuario:</b> ${data.usuario} <br>
        <b>Oficina:</b> ${data.oficina} <br>
        <p>${data.descripcion}</p>
        <button class="btn btn-primary" onclick="atendidoChange(${data.id})">Solicionado</button>
        </li>`
    
    listRequest.innerHTML = html + listRequest.innerHTML
})

async function atendidoChange(id) {
    event.preventDefault()
    const idSupporter = parseInt(supporter.value, 10)
    if(isNaN(idSupporter)){
        alert('seleccione a un soportista')
        return
    }

    await fetch('/solicitud', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id, idSupporter})
    })

    requestDelete(id)
}

function requestDelete(id){
    const request = document.getElementById('request-' + id)

    request.remove()
}