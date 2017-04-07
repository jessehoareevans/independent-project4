var pizzaPrice = 0;

function Pizza(sauce, toppings, size, crust) {
  this.crust = crust;
  this.sauce = sauce;
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.price = function() {
  if (this.crust === "Hand Tossed" || "Thin Crust") {
    pizzaPrice += 5;
  } else if (this.crust === "Deep Dish") {
    pizzaPrice += 7;
  }
  if (this.sauce === "Marinara" || "Barbecue" || "White Garlic") {
    pizzaPrice += 2;
  }
  if (this.toppings === "Pepperoni" || "Chicken" || "Sausage" || "Mushrooms" || "Olives" || "Bell Peppers")
    pizzaPrice += 1;

  if (this.size === "Medium") {
      pizzaPrice = 3;
    } else if (this.size === "Large") {
      pizzaPrice = 6;
    } else if (this.size === "Gigantic") {
      pizza.Price = 20;
    }
    return pizzaPrice
}

$(document).ready(function() {
  $("#pizza-info").submit(function(event) {
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
