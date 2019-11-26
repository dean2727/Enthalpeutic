// Function that activates the calculate function when the button is clicked
var buttonClicked = function() {
    var volume = document.getElementById("volume").value;  // Gets the value in the text field
    var ice = document.getElementById("ice").value;
    var insulation = document.getElementById("insulation").value;
    calculate(volume, ice, insulation)
}

var farToCel = function(temp_f) {
    var temp_C = (temp_f - 32) * (5 / 9)
    return temp_C
}

// Uses physics calculations to get length of time in minutes for water to reach room temperature
var calculate = function(volume, ice, insulation) {
    var mass_ice = 28  // A typical ice cube is 28 grams
    var height_in = (volume / 100)
    var mass_water = volume * (1 - ice) * volume
    var heat_water = (mass_water) * 4.184 * (68.4)
    var heat_ice = ((mass_ice * 2.05) * 18) + (mass_ice * 333.55) 
    var mass_melted_ice = (volume * ice)
    var heat_melted_ice = mass_melted_ice * 4.184 * (70) 
    var surface_area = (3.14159 * 2) * (2 * 3.14159 * height_in * 0.0254)
    var tot_heat = (heat_ice + heat_melted_ice + heat_water) * (1 / (1 - insulation))
    var tot_heat_kj = tot_heat / 1000
    var power = ((5.6703 * (10 ** -8)) * .1 * (surface_area) * Math.abs((Math.pow((273.15 + farToCel(70))) , 4) 
    - Math.pow((273.15), 4) / 5))
    var time = Math.round(((tot_heat_kj/power)/60),3)

    // The text for the h2 element will say the follwing once the calculations are done
    $("h2").text("Your water will be room temperature in " + time + " minutes")
}