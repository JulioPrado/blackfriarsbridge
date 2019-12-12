$(function(){
    $('#textos a').on('click',function(evt){
        evt.preventDefault();
        let url = './pages/' + $(this).attr('href');
        $.get(url).done(function(data){
            $('#historia').html(data)
        })
    });
});