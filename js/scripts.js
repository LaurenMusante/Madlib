$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var inputs = ["person1", "person2", "animal", "exclamation", "verb", "noun"]

    inputs.forEach(function(input) {
      var userInput = $("input#" + input).val();
      $("." + input).text(userInput);

    });
    // this section takes the user input and stores it in variables
    // var person1input = $("input#person1").val();
    // var person2input = $("input#person2").val();
    // var animalInput = $("input#animal").val();
    // var exclamationInput = $("input#exclamation").val();
    // var verbInput = $("input#verb").val();
    // var nounInput = $("input#noun").val();
// this is where we used the above variables, to display the text in the corresponding html spans.
    // $(".person1").text(person1input);
    // $(".person2").text(person2input);
    // $(".animal").text(animalInput);
    // $(".exclamation").text(exclamationInput);
    // $(".verb").text(verbInput);
    // $(".noun").text(nounInput);
// will display story
  $("#story").show();
  event.preventDefault();
  });
});
