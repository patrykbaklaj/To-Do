// Check of by clicking
$("ul").on("click", "li", function() {
  // add completed style to li that was clicked
  $(this).toggleClass('completed');
})

// click on X to delete todos
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

// input listener to add new todos
$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
      // grabbing new todoText
    var todoText = $(this).val();
    // clearing input
    $(this).val("");
    // adding todoText (new li) to ul
      $("ul").append("<li><span>X</span> " + todoText + "</li>")
  }
});
