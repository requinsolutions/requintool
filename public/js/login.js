$(document).ready(function() {
    console.log("sdfghjk")
    $(document).on("click", "#login", function(event) {
    $('#login').hide();
    $('#loader').show();
    var myData = $('#loginform').serialize();
    event.preventDefault();
    $.ajax({
    type: "POST",
    url: '/api/user/login/',
    data: myData,
    success: function(data)
    {
    if(data.msg='success'){
        $('#loader').hide();
    window.location.replace("/../dashboard");
    }
    else {
    $('#loader').hide();
    $('#login').show();
    Swal.fire('Oops...', 'Invalid credentails', 'error');
    }
    },
    error: function(data)
    {
        Swal.fire('Oops...', 'Invalid credentails', 'error');
    $('#loader').hide();
    $('#login').show();
    }
    });
    });
    });