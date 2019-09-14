$(document).ready(function() {
  $.ajax({
    type: "GET",
    url: "/api/user/token/",
    success: function(data) {
        $("#username").text(data.token.email);
    },
    error: function(data) {
      
    }
  });
});
