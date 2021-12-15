var params = new URLSearchParams(window.location.search);


// Referncias de jQuery
var divUsuarios = $('#divUsuarios');


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