var params = new URLSearchParams(window.location.search);
var nombre = params.get('nombre');
var sala = params.get('sala');

// Referncias de jQuery
var divUsuarios = $('#divUsuarios');
var formEnviar = $('#formEnviar');
var txtMensaje = $('#txtMensaje');
var divChatbox = $('#divChatbox');


// Funciones para renderizar usuarios

function renderizarUsuarios( personas ){ // [ {}, {},...,{} ]
    console.log(personas);

    var html = '';
    html += '<li>';
    html += '<a href="javascript:void(0)" className="active"> Chat de <span> '+ params.get('sala') +' </span></a>';
    html += '</li>';


    for (var i = 0; i < personas.length ; i++) {
      html +=  '<li>';
      html +=   '<a data-id="'+ personas[i].id +'" href="javascript:void(0)"><img src="assets/images/users/1.jpg" alt="user-img" className="img-circle"> <span>'+ personas[i].nombre +'<small className="text-success">online</small></span></a>';
      html +=   '</li>';
    }

    divUsuarios.html(html);


}

function renderizarMensajes( mensaje ){

    var html = '';

   html += ' <li class="animated fadeIn">';
   html += '    <div className="chat-img"><img src="assets/images/users/1.jpg" alt="user"/></div>';
   html += '    <div className="chat-content">';
   html += '       <h5>'+ mensaje.nombre +'</h5>';
   html += '         <div className="box bg-light-info">'+ mensaje.mensaje +'</div>';
   html += '    </div>';
   html +=   ' <div className="chat-time">10:56 am</div>';
   html += '  </li>';


    divChatbox.append(html);
}






//Listeners
divUsuarios.on('click', 'a', function (){
   var id = $(this).data('id');
   if (id){
       console.log(id);
   }

});


formEnviar.on('submit', function (e){
   e.preventDefault();
    //console.log(txtMensaje.val());
    if ( txtMensaje.val().trim().length === 0 ){
        return;
    }
    // Enviar información
    socket.emit('crearMensaje', {
        nombre: nombre,
        mensaje: txtMensaje.val()
    }, function(mensaje) {
        console.log('respuesta server: ', mensaje);
        txtMensaje.valueOf('').focus();
        renderizarMensajes(mensaje);
    });
});