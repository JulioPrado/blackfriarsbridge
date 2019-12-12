$(function(){
    $(window).on('hashchange',hashchanged);
    hashchanged();
})

function hashchanged(){
    var hash = location.hash.replace('#','') || './pages/home';
    $.get({
        url: hash + '.html',
        cache: false
    }).done(function(data){
        $('#conteudo').html(data)
    })
    .fail(function(){
        $('#conteudo').html('<h1>Página não encontrada</h1>')
    })
}