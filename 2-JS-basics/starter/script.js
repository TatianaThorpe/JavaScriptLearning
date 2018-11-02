/*******************************
This lecture was about variables and data types
and then you can type whatever you want
on however many lines you want
 */

/*
var firstName = 'John';
console.log(firstName);

var lastName = 'Smith';
var age = 28;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

// Variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;


var firstName = 'John';
var age = 28;

// type coercion
console.log(firstName + ' ' + age);

var job, isMarried;
job = 'Teacher';
isMarried = false;

console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation
age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/




/*********************
 * Basic operators
 */

/*

var now, yearJohn, yearMark;
now = 2018;
ageJohn = 28;
ageMark = 33;

// Math operators
yearJohn = now - ageJohn;
yearMark = now - ageMark;

console.log(yearJohn);

console.log(now + 2);
console.log(now * 2);
console.log(now / 10);


// Logical operators
var johnOlder = ageJohn < ageMark;
console.log(johnOlder);


// typeof operator
console.log(typeof johnOlder);
console.log(typeof  ageJohn);
console.log(typeof 'Mark is older than John');
var x;
console.log(typeof x);


*/

/***************************
 * Operator precedence
 */

/*
var now =  2018;
var yearJohn = 1989;
var fullAge = 18;

// Multiple operators
var isFullAge = now - yearJohn >= fullAge; // true
console.log(isFullAge);

// Grouping
var ageJohn = now - yearJohn;
var ageMark = 35;
var average = (ageJohn + ageMark) / 2;
console.log(average);

//Multiple assignments
var x, y;
x = y =  (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);


// More operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);
x--;
console.log(x);

*/

/***************************
 * challenge 1
 */

/*
var heightMark = prompt('What is Mark\'s height in meters?');
var massMark = prompt('What is Mark\'s weight in kgs?');

var heightJohn = prompt('What is John\'s height in meters?');
var massJohn = prompt('What is Mark\'s weight in kgs?');

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

var markHigherBMI = BMIMark > BMIJohn;

console.log('Is Mark\'s BMI higher than John\'s? ' + markHigherBMI);
*/

/*********************
 * if / else statements
 */

/*
var firstName = 'John';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName +' is married!');
} else {
    console.log(firstName + ' is ' + civilStatus + '!');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName +' is married!');
} else {
    console.log(firstName + ' is ' + civilStatus + '!');
}




var heightMark = prompt('What is Mark\'s height in meters?');
var massMark = prompt('What is Mark\'s weight in kgs?');

var heightJohn = prompt('What is John\'s height in meters?');
var massJohn = prompt('What is Mark\'s weight in kgs?');

var BMIMark = massMark / (heightMark * heightMark);
var BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
    console.log('Mark\'s BMI is higher than John\'s!');
} else {
    console.log('John\'s BMI is higher than Mark\'s!');
}
*/

/***********
 * Boolean logic
 */

/*
var firstName = 'John';
var age = 20;

if (age < 13) {
    console.log(firstName + ' is a boy.');
} else if (age >= 13 && age < 20) { // betweeen 13 and 20
    console.log(firstName + ' is a teenager.');
} else if (age >= 20 && age < 30) {
    console.log(firstName + ' is a young man.');
} else {
    console.log(firstName + ' is a man.');
};
*/

/*******
 * The ternary Operator and Switch Statements
 */

/*
var firstName = 'John';
var age = 18;

// ternary operator
age >= 18 ? console.log(firstName + ' drinks beer.')
: console.log(firstName + ' drinks juice.');

var drink = age >= 18 ? 'beer' : 'juice';
console.log(firstName + ' drinks ' + drink);

// switch statement
var job = 'instructor';
switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code');
        break;
    case 'driver':
        console.log(firstName + ' drives an Uber in Lisbon');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites');
        break;
    default:
        console.log(firstName + ' does something else');
}



var firstName = 'John';
var age = 30;

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');
        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.');
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.');
        break;
    default:
        console.log(firstName + ' is a man.');
}

*/

/*********************
 * Truthy and Falsy values and equality operators
 */

/*
// falsy values: undefined, null, 0, '', NaN
// truthy values: NOT falsy values

var height;

height = '';

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable has NOT been defined');
};
*/

/********************
 * Coding challenge 2
 */

/*
var scoreJohn = (1233 + 123 + 123) / 3;
var scoreMike = (123 + 123 + 123) / 3;
var scoreMary = (1 + 134 + 105) / 3;
console.log(scoreJohn, scoreMike, scoreMary);


console.log('John\'s team\'s average score: ' + scoreJohn);
console.log('Mike\'s team\'s average score: ' + scoreMike);
console.log('Mary\'s team\'s average score: ' + scoreMary);

switch(true) {
    case scoreJohn > scoreMike && scoreJohn > scoreMary:
        console.log('John\'s team has the highest average score with ' + scoreJohn + ' points!');
        break;
    case scoreMike > scoreJohn && scoreMike > scoreMary:
        console.log('Mike\'s team has the highest average score with ' + scoreMike + ' points!');
        break;
    case scoreMary > scoreJohn && scoreMary > scoreMike:
        console.log('Mary\'s team has the highest average score with ' + scoreMary + ' points!');
        break;
    default:
        console.log('At least 2 teams have the same highest average score!');

}
*/

/********************
 * functions
 */

/*
function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);

console.log(ageJohn, ageMike, ageJane);

function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;

    if (retirement > 0) {
        console.log(firstName + ' retires in ' + retirement + ' years.');
    } else {
        console.log(firstName + ' is already retired.');
    }

}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');
*/

/********************
 * Function statements and expressions
 */

/*
//function declaration
//     function whatDoYouDo(job, firstName)

//function expression
var whatDoYouDO = function(job, firstName) {
    switch(job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives an Uber in Lisbon';
        case 'designer':
            return firstName + ' designs beautiful websites';
        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDO('teacher', 'John'));
console.log(whatDoYouDO('designer', 'Jane'));
console.log(whatDoYouDO('retired', 'Mark'));
*/

/*********************
 * Arrays
 */

/*
// Inialise new array
var names = ['John','Mark','Jane'];
var years = new Array(1990, 1969, 1948);

console.log(names[4]);
console.log(names.length);

// Mutate array data
names[1] = 'Ben';
names[5] = 'Mary';
names[names.length] = 'Mike';
console.log(names);

var john = ['John', 'Smith', 1996, 'designer', false];

// Different data types
john.push('blue');
john.unshift('Mr');
john.pop();
john.shift();
console.log(john.indexOf(1996));

console.log(john);

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);
*/


/*******************
 * Challenge 3 my way
 */

/*
var tipsArray = [];
var totalArray = [];

function tipCalculator(bill) {

    if (bill > 200) {
        var tip = bill * 0.1
    } else if (bill >= 50 && bill <= 200) {
        tip = bill *  0.15
    }  else {
        tip = bill * 0.2
    };

    tipsArray.push(tip);
    totalArray.push(bill + tip);
};

tipCalculator(124);
tipCalculator(48);
tipCalculator(268);

console.log(tipsArray);
console.log(totalArray);


*/

/*******************
 * Challenge 3 the instructor's way
 */

/*
function tipCalculator(bill) {
    var percentage;
    if (bill < 50) {
        percentage = .2
    }
    else if (bill >= 50 && bill <= 200) {
        percentage = .15
    }
    else {percentage = .1
    };

    return bill * percentage;
};

var bills = [124, 48, 268];

var tips = [tipCalculator(bills[0]),
            tipCalculator(bills[1]),
            tipCalculator(bills[2])];

var total = [bills[0] + tips[0],
             bills[1] + tips[1],
             bills[2] + tips[2]];

console.log(tips);
console.log(total);

*/

/***********************
 * Objects and properties
 */

/*
// Object literal
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john.firstName);
console.log(john['lastName']);

var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;

console.log(john);

// New Object Syntax
var jane = new Object();
jane.name = 'Jane';
jane.birthYear = 1990;
jane['lastName'] = 'Smith';

console.log(jane);

*/

/******************
 * Objects and methods
 */

/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();


console.log(john);

*/

/*********************
 * coding challenge 4
 */

var mark = {
    fullName: 'Mark Smith',
    mass: 124,
    height: 2,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var john = {
    fullName: 'John Jones',
    mass: 100,
    height: 2.0,
    calcBMI: function() {
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

console.log(mark, john);

if (john.calcBMI() > mark.calcBMI()) {
    console.log(john.fullName + ' has a higher BMI of ' + john.bmi)
} else if (mark.calcBMI() > john.calcBMI()) {
    console.log(mark.fullName + ' has a higher BMI of ' + mark.bmi)
} else {
    console.log(john.fullName + ' and ' + mark.fullName + ' have the same BMI of ' + mark.bmi)
};

