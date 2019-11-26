// Function that activates the calculate function when the button is clicked
var buttonClicked = function() {
    var food = document.getElementById("food").value;
    var temp = document.getElementById("temp").value;
    calculate(food, temp)
}

var farToCel = function(temp_f) {
    var temp_C = (temp_f - 32) * (5/9)
    return temp_C
}

// Uses physics calculations to get length of time in minutes for food to start melting
var calculate = function(food, temp) {
    var temp = farToCel(temp);

    if (food.toLowerCase() == 'icecream' || food.toLowerCase() == 'ice cream') {
        var mass = 568 * 5.9147065 * (10 **-5)  // in kg
        // Q = MCdeltaT
        var heat = (mass * 1.76 * 100 * 18) + (210.14 * mass) 
        //J __ Ice cream melts at 0, most freezers at -18
        var pow = 5.6703*Math.pow(10,-8) * 0.0126677 * Math.pow(temp+275.15,4) - Math.pow(273.15,4)
        var time = Math.round(Math.pow(((heat/pow)),2))
        console.log(mass, heat, pow, time)
        $("h2").text("Your icecream will start melting in " + time + " seconds" )
    }

    else if (food.toLowerCase() == 'chocolate'){
        if (temp_f <= 86){
            $("h2").text("Your chocolate won't melt!")
        }
        else {
            // kg __ density = 1325 kg/m3
            var mass =  0.001881984 * 1325
            // Specific heat: 1.589 KJ/KgC
            var heat = (mass * 1.589 * (farToCel(85) - farToCel(60))) + (mass * 311.2)
            var pow =(5.6703*(Math.pow(10,-8))) * 0.0099 * Math.abs(Math.pow((273.15+temp),4)) - Math.pow(273.15+(farToCel(85)),4)
            var time = Math.round((((heat/pow)/60)*100) / 100)
            $("h2").text("Your chocolate will start melting in " + time + " minutes" )
        }
    }
    
    else if (food.toLowerCase() == 'ice') {
        var mass = Math.pow((2.5/100),3) * 917
        var heat = mass * 2.10 * 18 + mass * 333.55
        var pow = 5.6703*Math.pow(10,-8) * Math.pow(3.75*10,-3) * Math.pow((temp + 275.15),4) - Math.pow(273.15,4)
        var time = Math.round(heat/pow,2)
        console.log(mass, heat, pow, time)
        $("h2").text("Your ice will start melting in " + time + " seconds" )
    }

    else {
        $("h2").text("Please enter one of the specified foods")
    }
}