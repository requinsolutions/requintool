console.log("asdfg");
$("#imgloader").show();
$.ajax({
  url: "/../api/vardhaman/fservices/",
  type: "GET",
  success: function(data) {
    var $tr = $('<tr/>');
    $tr.append($('<td/>').html(data.title));
    $('#list-order tr:last').before($tr);

  },
  error: function(data) {
    alert("not done");
  },
  cache: false,
  contentType: false,
  processData: false
});
$(document).ready(function() {
  console.log("before button");
  $("#activebtn").on("click", function(event) {
    console.log("button clicked");
    var val = $("#activebtn").val();
    setTimeout(function(){ $("#imgloader").show(); }, 5000);
    console.log(val);
    event.preventDefault();
    $.ajax({
      type: "PUT",
      url: "/api/vardhaman/fservices/active/" + val,
      success: function(data) {
        $("#imgloader").hide();
        window.location.replace("/../vardhaman/fservices_view");
      },
      error: function(data) {
        alert("not done");
      }
    });
  });

  $("#inactivebtn").on("click", function(event) {
    console.log("button clicked inactive");
    var val = $("#inactivebtn").val();
    setTimeout(function(){ $("#imgloader").show(); }, 5000);
    console.log(val);
    event.preventDefault();
    $.ajax({
      type: "PUT",
      url: "/api/vardhaman/fservices/inactive/" + val,
      success: function(data) {
        $("#imgloader").hide();
        window.location.replace("/../vardhaman/fservices_view");
      },
      error: function(data) {
        alert("not done");
      }
    });
  });
});
