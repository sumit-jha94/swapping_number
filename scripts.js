//JavaScript program to swap two variables

//take input from the users
let a = parseInt(prompt('Enter the first variable: '));
let b = parseInt(prompt('Enter the second variable: '));

// addition and subtraction operator
c = a + b;
a = c - a;
b = c - b;


alert(`The value of a after swapping: ${a}`);
alert(`The value of b after swapping: ${b}`);