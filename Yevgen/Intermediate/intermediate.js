// ex 1 | Compare two numbers
/*
Create a JavaScript program that will show the average grade for each student. Here are the points for each student:

Martin = 76
Thomas = 85
Klaus = 65
Maria = 93
David = 81

Based on their points, output the grade, according to the following table:

< 60 F
< 70 D
< 80 C
< 90 B
< 100 A

Finally, calculate the class average and output it (e.g. if the class average is 74 points, their average grade will be C).
*/

/* const studentPoints = new Map([
    ["Martin", 76], 
    ["Thomas", 85], 
    ["Klaus", 65], 
    ["Maria", 93], 
    ["David", 81]
]);

let studentInput = prompt("Please enter the student name", "");

if (studentInput === studentPoints.has(studentInput) || studentInput !== null ) {

    // get the value of a key in a Map
    let studentPoint = studentPoints.get(studentInput); 

    // get sum of student points
    let sumOfStudentPoints = 0;
    studentPoints.forEach(function(value){
        sumOfStudentPoints += value;
    })
    
    // get average of student points
    let averageOfStudentPoints = sumOfStudentPoints / studentPoints.size;
    
    // compare the points with grades
    if (studentPoint < 60 || averageOfStudentPoints < 60) {
        studentGrade = "F";
        averageGrade = "F";
    } else if (studentPoint < 70 || averageOfStudentPoints < 70) {
        studentGrade = "D";
        averageGrade = "D";
    } else if (studentPoint < 80 || averageOfStudentPoints < 80) {
        studentGrade = "C";
        averageGrade = "C";
    } else if (studentPoint < 90 || averageOfStudentPoints < 90) {
        studentGrade = "B";
        averageGrade = "B";
    } else if (studentPoint < 100 || averageOfStudentPoints < 100) {
        studentGrade = "A";
        averageGrade = "A";
    } else {
        studentGrade = "very bad";
    }

    // output of the grade for the student
    document.getElementById("studentInputField").innerHTML = `${studentInput} with ${studentPoint}  points has grade => ${studentGrade}`;
    
    // output of the average grade for the student
    document.getElementById("studentAverage").innerHTML = `Average of student points = ${averageOfStudentPoints} and grade is => ${averageGrade}`;

} else {
    studentInput = prompt("Please enter the student name right!", "Name");
}
 */

const studentPoints = new Map([["Martin", 76], ["Thomas", 85], ["Klaus", 65], ["Maria", 93],  ["David", 81]]);
let studentInput = prompt("Please enter the student name", "");

function getGrade(studentInput) {
    if (studentInput === studentPoints.has(studentInput) || studentInput !== null ) {
       // get sum of student points
       let sumOfStudentPoints = 0;
       studentPoints.forEach(function(value){
           sumOfStudentPoints += value;
       })
        // compare the points
        if (studentPoints.get(studentInput) < 60 || (sumOfStudentPoints / studentPoints.size) < 60) averageGrade = "F";
        else if (studentPoints.get(studentInput) < 70 || (sumOfStudentPoints / studentPoints.size) < 70) averageGrade = "D";
        else if (studentPoints.get(studentInput) < 80 || (sumOfStudentPoints / studentPoints.size) < 80) averageGrade = "C";
        else if (studentPoints.get(studentInput) < 90 || (sumOfStudentPoints / studentPoints.size) < 90) averageGrade = "B";
        else if (studentPoints.get(studentInput) < 100 || (sumOfStudentPoints / studentPoints.size) < 100) averageGrade = "A";
        
        document.getElementById("studentInputField").innerHTML = `${studentInput} grade is ${averageGrade}`;
        
        // output of the average grade for the student
        document.getElementById("studentAverage").innerHTML = `Students grade is ${averageGrade}`;
    
    } 
    else {
        alert("Your input was incorrect! Refresh and try again!");
    }
}

getGrade(studentInput);



