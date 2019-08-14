$(document).ready(function() {
  $("#formOne").submit(function(){
    // this section takes the user input and stores it in variables
    var person1input = $("input#person1").val();
    var person2input = $("input#person2").val();
    var animalInput = $("input#animal").val();
    var exclamationInput = $("input#exclamation").val();
    var verbInput = $("input#verb").val();
    var nounInput = $("input#noun").val();
// this is where we used the above variables, to display the text in the corresponding html spans.
    $(".person1").text(person1input);
    $(".person2").text(person2input);
    $(".animal").text(animalInput);
    $(".explanation").text(explanationInput);
    $("verb").text(verbInput);
    $("noun").text(nounInput);

  });

});
