document.addEventListener('DOMContentLoaded', function () {
    // Dynamically add student information
    var studentInfo = document.getElementById('student-info');
    studentInfo.textContent = 'Student ID: 200530599 | Name: Parampreet singh';
});

function submitOrder() {
    // Capture form values
    var pizzaSize = document.getElementById('pizza-size').value;
    var toppings = getSelectedOptions('toppings');
    var coldDrinks = getSelectedOptions('cold-drinks');
    var cheeseBurst = document.getElementById('cheese-burst').value;
    var pizzaType = document.getElementById('pizza-type').value;

    // Create Pizza object
    var pizza = new Pizza(pizzaSize, toppings, coldDrinks, cheeseBurst, pizzaType);

    // Display Pizza Description
    var pizzaDescription = document.getElementById('pizza-description');
    pizzaDescription.innerHTML = '<h2>Your Pizza:</h2>' + pizza.getDescription();
}

function getSelectedOptions(id) {
    var selectedOptions = [];
    var selectElement = document.getElementById(id);
    for (var i = 0; i < selectElement.options.length; i++) {
        if (selectElement.options[i].selected) {
            selectedOptions.push(selectElement.options[i].value);
        }
    }
    return selectedOptions;
}

// Pizza Class
class Pizza {
    constructor(size, toppings, coldDrinks, cheeseBurst, pizzaType) {
        this.size = size;
        this.toppings = toppings;
        this.coldDrinks = coldDrinks;
        this.cheeseBurst = cheeseBurst;
        this.pizzaType = pizzaType;
    }

    getDescription() {
        // Build and return pizza description
        var description = `Size: ${this.size}<br>`;
        description += `Toppings: ${this.toppings.join(', ')}<br>`;

        if (this.coldDrinks.length > 0) {
            description += `Cold Drinks: ${this.coldDrinks.join(', ')}<br>`;
        }

        description += `Cheese Burst: ${this.cheeseBurst}<br>`;
        description += `Pizza Type: ${this.pizzaType}<br>`;
       
        return description;
    }
}