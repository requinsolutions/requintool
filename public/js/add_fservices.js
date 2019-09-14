
$("form#fservice").submit(function(e) {
  e.preventDefault();
  var formData = new FormData(this);
  $('#imgloader').show();
  $('#loader').hide();
  $.ajax({
    url: "/../api/vardhaman/fservices/",
    type: "POST",
    data: formData,
    success: function(data) {
        $('#loader').hide();
        $('#imgloader').hide();
        window.location.replace("/../vardhaman/fservices_view");
    },
    error: function(data) {
        
      alert("not done");
    },
    cache: false,
    contentType: false,
    processData: false
  });
});
