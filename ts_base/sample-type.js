var found = true;
var grade = 88.6;
var firstName = 'Anup';
var lastName = 'Kumar';
console.log(found);
console.log('The grade is ' + grade);
console.log('Hi' + firstName + " " + lastName);
// let's break it down
/*
 found = 0
 grade = 'A'
 firstName = false
*/
// use template strings
console.log("Hi ".concat(firstName, " ").concat(lastName));
// for loop
for (var i = 0; i < 10; i++) {
    console.log(i);
}
var reviews = [5, 5, 4.5, 1, 3];
var total = 0;
var sportsOne = ['Golf', 'Cricket', 'Tennis', 'Swimming'];
sportsOne.push('Baseball');
sportsOne.push('Football');
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    console.log(tempSport);
}
