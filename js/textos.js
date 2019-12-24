$(function(){
    $('#textos a').on('click',function(evt){
        evt.preventDefault();
        let url = './pages/' + $(this).attr('href');
        jQuery.get(url).done(function(data){
            $('#historia').html(data)
        })
    });
});