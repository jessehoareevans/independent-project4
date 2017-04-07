var pizzaPrice = 0;

function Pizza(crust, sauce, toppings, size) {
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;
  if (this.crust === "Hand Tossed") {
    pizzaPrice += 5;
    console.log(pizzaPrice + " ht")
  } else if (this.crust === "Deep Dish" || "Thin Crust") {
    pizzaPrice += 7;
    console.log(pizzaPrice + " dd")
  }
  if (this.sauce === "Marinara") {
    pizzaPrice += 1;
    console.log(pizzaPrice + " mar")
  } else if (this.sauce === "Barbecue" || "White Garlic") {
    pizzaPrice += 2;
    console.log(pizzaPrice + " bbq")
  }
  if (this.toppings === "Pepperoni" || "Chicken" || "Sausage") {
    pizzaPrice += 2;
  } else if (this.toppings === "Mushrooms" || "Olives" || "Bell Peppers") {
    pizzaPrice += 1;
  }
  if (this.size === "Medium") {
      pizzaPrice += 3;
    } else if (this.size === "Large") {
      pizzaPrice += 6;
    } else if (this.size === "Gigantic") {
      pizzaPrice += 20;
    }
    return pizzaPrice
}

$(document).ready(function() {
  $("#pizza-info").submit(function(event) {
    $("#price-output").show()
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
     $('#price-output').append(toppings + "<br>");
   });
    var inputtedCrust = $("#pizza-crust").val();
    var inputtedSauce = $("#sauce").val();
    var inputtedToppings = $("#toppings").val();
    var inputtedSize = $("#size").val();

    var newPizzaPrice= new Pizza(inputtedCrust, inputtedSauce, inputtedToppings, inputtedSize);

    $("#output").show();
    $("span#price-output").text(newPizzaPrice.price());

    event.preventDefault();
  });
});
