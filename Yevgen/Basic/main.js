// EX 1 | Temperature v1.0
/*
Create a program that according to the temperature will provide you with the information, whether the weather is cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c. If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

Hint: Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random number between 0 and 10 :) . 
*/

function getTemperatureInfo() {
    let minTemperature = -5;
    let maxTemperature = 25;

    // Get random integer from maximum & minimum including both
    let temperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1) + minTemperature);

    if (temperature >= minTemperature && temperature <= 10) {
        return console.log(`The weather is cold by ${temperature} C°`);
    } else {
        return console.log(`The weather is moderate by ${temperature} C°`);
    }
}

console.log(getTemperatureInfo());
// END

// EX 2 | Highest value in an array
/* 
Create a program to find the highest value in an array. 
E.g. If we have the following values 1, 7, -3, 9 we should only get the highest value, 
number 9. 
*/

var intArray = [1, 7, -3, 9, 20, 50];

function getHighestValueOfArray(array) {

    var highestValue = array[0];

    // sort array, starting with highest
    // intArray.sort(function(a,b){return b - a;})

    /*for (let arrayElement of array) {
        if (arrayElement > highestValue) {
            highestValue = arrayElement;
            console.log(`Highest = ${highestValue}`);
            return highestValue;
        }
        return console.log(`The highest value v1.0 in array -> ${highestValue}`);
    }*/   
    
    for (let index = 0; index < intArray.length; index++) {
        if (array[index] > highestValue) {
            highestValue = array[index];
        }
    }
    return console.log(`The highest value v1.0 in array -> ${highestValue}`);
}
console.log(getHighestValueOfArray(intArray));

// another way to find highest value in array
function getMaxValue(array) {
    return "The highest value v2.0 of array -> " + Math.max.apply(null, array);
}

console.log(getMaxValue(intArray));
// END

// EX 2 | Temperature v2.0
/*
Now when you have program Temperature v1.0 done it time to upgrade it to the version 2.0. Now you should create a nice looking responsive front-end for your program (mobile friendly) and create more messages (e.g. if the temperature is above 32c output "The weather is hot" etc.) and you should display a proper image for the current weather condition.
*/

function getTemperatureInfoAdvanced(minTemperature,maxTemperature) {
    // Get random integer from maximum & minimum including both
    let temperature = Math.floor(Math.random() * (maxTemperature - minTemperature + 1) + minTemperature);

    if (temperature >= minTemperature && temperature <= 10) {
        document.getElementsByClassName("card-img-top").innerHTML = "<i class='bi bi-brightness-high-fill'></i><i class='bi bi-thermometer-high'></i>";
        return console.log(`The weather is cold by ${temperature} C°`);
    } else if (temperature >= 32) {
        return console.log(`The weather is hot by ${temperature} C°`);
    } else {
        return console.log(`The weather is moderate by ${temperature} C°`);
    }
}

console.log(getTemperatureInfoAdvanced(-5, 40));