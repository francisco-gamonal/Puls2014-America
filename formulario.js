var $form = $('#formulario'),
    $titulo = $('#titulo'),
    $url = $('#url'),
    $button = $('#mostrar-form'),
    $list = $('#contenido'),
    $post = $('.item').first();


function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val(),
	    titulo = $titulo.val(),
	    $clone = $post.clone();

	$clone.find('.titulo_item a')
		.text(titulo)
		.attr('href', url);

	$clone.hide(); //es como un display none

	$list.prepend($clone); // agregar un clone antes del elemento

	$clone.fadeIn();

	return false;
}

// Eventos
$button.click(mostrarFormulario);
$form.on('submit', agregarPost);