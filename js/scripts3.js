var pizzaPrice = 0;

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;

    if ((this.toppings <=3) && (this.size === "Small")) {
    pizzaPrice += 2;
    } else if ((this.toppings >=3) && (this.size === "Small")) {
    pizzaPrice += 4;

    } if ((this.toppings <=3) && (this.size === "Medium")) {
      pizzaPrice += 6;
    } else if ((this.toppings >=3) && (this.size === "Medium")) {
      pizzaPrice += 8;

    } if ((this.toppings <=3) && (this.size === "Large")) {
      pizzaPrice += 10;
    } else if ((this.toppings >=3) && (this.size === "Large")) {
      pizzaPrice += 12;

    } if ((this.toppings <=3) && (this.size === "Gigantic")) {
      pizzaPrice += 14;
    } else if ((this.toppings >=3) && (this.size === "Gigantic")) {
      pizzaPrice += 16;
    }
    return pizzaPrice
}

$(document).ready(function() {
  $("#pizza-info").submit(function(event) {
    event.preventDefault();

    var inputtedToppings = $("#toppings").val();
    var inputtedSize = $("#size").val();
    var toppingsArray = [];

    $("input:checkbox[name=toppings]:checked").each(function(){
      toppingsArray.push($(this).val());
      var newPizzaPrice= new Pizza(inputtedToppings, inputtedSize, toppingsArray)

      $("#output").text();
      $("span#price-output").text(newPizzaPrice.price());
    });
  });
});



    // $("#output").show();
    // $("span#price-output").text(newPizzaPrice.price());
