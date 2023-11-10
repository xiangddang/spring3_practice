let found: boolean = true;
let grade: number = 88.6;
let firstName: string = 'Anup';
let lastName: string = 'Kumar';

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
console.log(`Hi ${firstName} ${lastName}`);

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let reviews: number[] = [5, 5, 4.5, 1, 3];
let total: number = 0;

let sportsOne: string[] = ['Golf', 'Cricket', 'Tennis', 'Swimming'];
sportsOne.push('Baseball');
sportsOne.push('Football');

for (let tempSport of sportsOne) {
    console.log(tempSport);
}