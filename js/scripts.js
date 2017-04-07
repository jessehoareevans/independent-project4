var pizzaPrice = 0;

function Pizza(crust, sauce, specialty, size) {
  this.crust = crust;
  this.sauce = sauce;
  this.specialty = specialty;
  this.size = size;
}

Pizza.prototype.price = function() {
  var pizzaPrice = 0;
  if (this.crust === "Hand Tossed") {
    pizzaPrice += 5;
    console.log (pizzaPrice + " HT")
  } else if (this.crust === "Deep Dish" || "Thin Crust") {
    pizzaPrice += 7;
    console.log (pizzaPrice + " bbq")
  }
  if (this.sauce === "Marinara") {
    pizzaPrice += 1;
  } else if (this.sauce === "Barbecue" || "White Garlic") {
    pizzaPrice += 2;
  }
  if ((this.specialty === "Hawaiian") || (this.specialty === "BBQ Chicken")) {
    pizzaPrice += 6;
  } else if ((this.specialty === "Meat Lovers") || (this.specialty === "Supreme")) {
    pizzaPrice += 9;
  } else if ((this.specialty === "Extra Cheese") || (this.specialty === "Vegetarian")) {
    pizzaPrice += 3;
    console.log(pizzaPrice + "xc")
  }
  if (this.size === "Medium (feeds 2-4 members of an Epicodus cohort)") {
      pizzaPrice += 6;
      console.log(pizzaPrice + "Medium")
    } else if (this.size === "Large (feeds 5-10 members of an Epicodus cohort)") {
      pizzaPrice += 12;
    } else if (this.size === "Gigantic (feeds an entire Epicodus Cohort)") {
      pizzaPrice += 20;
    }
    return pizzaPrice
}

$(document).ready(function() {
  $("#pizza-info").submit(function(event) {
    $("#price-output").show()
    $("input:checkbox[name=toppings]:checked").each(function(){
      var toppings = $(this).val();
      $('span#price-output').append(toppings + "<br>");
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
