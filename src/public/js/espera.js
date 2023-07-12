socket = io()

const listRequest = document.getElementById('listRequest')

socket.on('newRequest', (data) =>{
    let html = `
        <li class="list-group-item" id="request-${data.id}">
            <h5>Oficina: ${data.oficina} </h5>
            <h5>Solicitante: ${data.solicitado}</h5> 
            <p>${data.descripcion}</p>
            <button class="btn btn-primary" onclick="atendidoChange(${data.id})">Solicionado</button>
        </li>`
    
    listRequest.innerHTML += html
})

async function atendidoChange(id) {
    event.preventDefault()
    await fetch('/solicitud', {
        method: 'PUT',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({id})
    })

    requestDelete(id)
}

function requestDelete(id){
    const request = document.getElementById('request-' + id)

    request.remove()
}