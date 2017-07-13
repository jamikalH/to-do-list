//Gets keypress from the input
$("input[type='text']").on("keypress", function (event) {
  //if keypress is "enter", then it adds the to-do to the list of </li>"s
  if(event.which === 13){
    //takes the value of the input tag
    var userTodo = $(this).val();
    //adds user input to an li tag
    $("ul").append("<li><span>X </span>" + userTodo + "</li>");
    //returns an empty string, thus clearing the input field
    $("input").val("");
  };
});
//click listener that toggles on or off to mark completion
$("ul").on("click", "li", function(){
  //specifically adds completed class to the li that was clicked
  $(this).toggleClass("completed");
})


//Deletes to-do if clicked
$("ul").on("click","span", function (event) {
  $(this).parent().remove();
  //stops the li click listener from firing
    event.stopPropagation();
});
