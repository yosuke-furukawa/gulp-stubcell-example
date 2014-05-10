
window.onload = function() {
  var message = $("#message").text();
  console.log(message);
  $.ajax({
    type: "GET",
    url: "/test/greetings",
    dataType: 'json',
    success: function(data) {
      console.log(data);
      var congrats = _.template(message, data);
      $("#message").text(congrats);
    },
  });
};
