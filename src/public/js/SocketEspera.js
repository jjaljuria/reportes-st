socket = io()

const listRequest = document.getElementById('listRequest')

socket.on('newRequest', (data) =>{
    let html = `
        <li class="list-group-item">
            <h5>Oficina: ${data.oficina} </h5>
            <h5>Solicitante: ${data.solicitado}</h5> 
            <p>${data.descripcion}</p>
            <button class="btn btn-primary">Solicionado</button>
        </li>`
    
    listRequest.innerHTML += html
})