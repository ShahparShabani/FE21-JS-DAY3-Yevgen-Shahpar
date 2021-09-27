// Ex 1 - Temperature v1.0
function temprature1(temp) {
    let pTag = document.getElementById("temprature1");
    console.log(temp);
    pTag.innerText = `Temprature is ${temp} , `;

    /* Using switch
    switch (true) {
        case (-5 <= temp && temp <= 10):
            pTag.innerText = "The weather is cold";
            console.log("The weather is cold");
            break;

        case (10 < temp && temp <= 25):
            pTag.innerText = "The weather is moderate";
            console.log("The weather is moderate");
            break;

        default:
            pTag.innerText = "The temprature is not between -5c and 25c";
            console.log("The weather is not between -5c and 25c");
            break;
    }
    */


    if (-5 <= temp && temp <= 10) {
        pTag.innerText += "The weather is cold";
    } else if (10 < temp && temp <= 25) {
        pTag.innerText += "The weather is moderate";
    } else {
        pTag.innerText += "The temprature is not between -5c and 25c";
    }

};

// Between min (included) and max (included): Math.floor(Math.random() * (max - min + 1)) + min;
let temp1 = Math.floor(Math.random() * 31) - 5;
let weatherIs = temprature1(temp1);


// Ex 2 - Highest value in an array

function findMax(array) {
    let maxIs = array[0];

    for (val of array) {
        if (val > maxIs) {
            maxIs = val
        }
    }

    return maxIs

}

let myArray1 = [1, 7, -3, 9];

console.log(myArray1);
document.getElementById("max").innerHTML = `Max: ${findMax(myArray1)}`;


// Ex 3 - Temperature v2.0
function temprature2(temp) {
    let pTag = document.getElementById("temprature2");
    let imgTag = document.getElementById("imgTemp");
    console.log(temp);
    pTag.innerText = `Temprature is ${temp} , `

    /* Using if condition
    if (temp < -5) {
        pTag.innerText += "The weather is freezing";
        imgTag.src = '../img/freezing.jpeg';
    } else if (-5 <= temp && temp <= 10) {
        pTag.innerText += "The weather is cold";
        imgTag.src = '../img/cold-2.jpeg';
    } else if (10 < temp && temp <= 25) {
        pTag.innerText += "The weather is moderate";
        imgTag.src = '../img/moderate-1.jpeg';
    } else if (temp > 25) {
        pTag.innerText += "The weather is hot";
        imgTag.src = '../img/hot-2.jpeg';
    }
    */


    // Using switch
    switch (true) {

        case (temp < -5):
            pTag.innerText += "The weather is freezing";
            imgTag.src = '../img/freezing.jpeg';
            break;

        case (-5 <= temp && temp <= 10):
            pTag.innerText += "The weather is cold";
            imgTag.src = '../img/cold-2.jpeg';
            break;

        case (10 < temp && temp <= 25):
            pTag.innerText += "The weather is moderate";
            imgTag.src = '../img/moderate-1.jpeg';
            break;

        case (temp > 25):
            pTag.innerText += "The weather is hot";
            imgTag.src = '../img/hot-2.jpeg';
            break;
    }

};

// Between -10c and 40c
let temp2 = Math.floor(Math.random() * 51) - 10;
let weatherIs2 = temprature2(temp2);

