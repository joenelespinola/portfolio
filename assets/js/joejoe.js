$( document ).ready(function() {
    $('.send-mail').click(function(){
        $("#contact-form").validate({
          rules: {
            email: {
              required: true,
              email: true
            },
            subject: "required",
            message: "required"
          },
          submitHandler: function(form) {
            window.open("mailto:joenelespinola04@gmail.com?subject=" + $("#subject").val() + "&body="+$("#message").val(), "_self");
          }
        });
    });

    $('.iziModal.achievements-popup').iziModal({
        zindex: 10000999,
    });

    $('body').on('click', '.achievements', function(e){
        e.preventDefault();
        $('.achievements-popup').iziModal('startLoading');
        $('.achievements-popup').iziModal('setTitle', $(this).attr("alt"));
        $('.achievements-popup').iziModal('open');
        $(".achievement-holder").attr("src", $(this).attr("src"));
        setTimeout(function(){
            $('.achievements-popup').iziModal('stopLoading');   
        },1000)

    });
});
