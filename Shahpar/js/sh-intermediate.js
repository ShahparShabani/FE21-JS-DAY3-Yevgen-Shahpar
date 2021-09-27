// < 60 F

// < 70 D

// < 80 C

// < 90 B

// < 100 A

// Ex 1 - Compare two numbers
function compareNumbers(num) {
    let gradeIs;
    switch (true) {
        case (num <= 60):
            gradeIs = "F";
            break;
        case (num <= 70 && num > 60):
            gradeIs = "D";
            break;
        case (num <= 80 && num > 70):
            gradeIs = "C";
            break;
        case (num <= 90 && num > 80):
            gradeIs = "B";
            break;
        case (num <= 100 && num > 90):
            gradeIs = "A";
            break;
        default:
            gradeIs = "not a valid grade";
            break;
    }

    return gradeIs;
}

let array = [['Martin', 76], ['Thomas', 85], ['Klaus', 65], ['Maria', 93], ['David', 81]];

for (val of array) {
    console.log(typeof val[1]);
    document.getElementById(val[0]).innerHTML += ` -> ${compareNumbers(Number(val[1]))}`
}

function calAverage(array) {
    let sum = 0;
    for (val of array) {
        sum += val[1];
    }

    let avg = Math.floor(sum / array.length);

    return avg;
}

let avgIs = calAverage(array);

document.getElementById('class-average').innerHTML += `${avgIs} ->  ${compareNumbers(Number(avgIs))}`