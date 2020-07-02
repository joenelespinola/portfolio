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
});