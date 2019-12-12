$(function() {
    $('#menu a').on('click',function(evt){
        evt.preventDefault();
        let url = './pages/' + $(this).attr('href');
        $.get(url).done(function(data){
            $('#conteudo').html(data);
            console.log(data);
        }).fail(function(){
            $('#conteudo').html('<h1>Página Não Encontrada</h1>')
            console.log('erro');
        });
    });

    $('#conteudo').load('pages/home.html');
    
    /*$('#menu').removeClass('oculto');*/
})