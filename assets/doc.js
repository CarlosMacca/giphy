src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"
type="text/javascript"

var animals = ["hamster", "dog", "cat", "bird"];

function renderButtons() {

    $("#animals-view").empty();

    for (var i = 0; i < animals.length; i++) {
      var a = $("<button>");
      a.addClass("animals");
      a.attr("data-name", animals[i]);
      a.text(animals[i]);
      $("#animals-view").append(a);
    }
  }


    $("#addAnimal").on("click", function(event) {
    event.preventDefault();
    var animal = $("#animalButtons").val();
    animals.push(animal);
    renderButtons();
});

renderButtons();