$(document).ready(function()  {
alert($("#css-item").text());

})

$(document).ready(function() {
  $("#goal-button").click(function() {
    $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val(goal) + "</li>");
    $("#new-goal").val("");
  })
})
