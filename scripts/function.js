//Practice: ChickenMonkey
//Write a program that prints the numbers from 1 to 100. But for multiples of five (5, 10, 15, etc.) print "Chicken" instead of the number and for the multiples of seven (7, 14, 21, etc.) print "Monkey". For numbers which are multiples of both five and seven print "ChickenMonkey".
//To determine if a number can be evenly divided by 5 or 7, use the JavaScript remainder operator.


for (let currentNumber = 1; currentNumber <=100; currentNumber++) {
    if (currentNumber % 5 === 0 && currentNumber % 7 === 0) {
        console.log("chickenMonkey")
    }
    else if (currentNumber % 5 === 0) {
        console.log("chicken")
    }
    else if (currentNumber % 7 === 0) {
        console.log("monkey")
    }
    else {
        console.log(currentNumber)
    }
 }

//Practice: Take a Number - Battle of the Bands
//A local nightclub is having a Battle of the Bands night in a few months. They expect many bands to sign up because the grand prize is $20,000. To make things easier on the nightclub management, they want each band to be assigned a number so that they can easily keep track of the order in which the bands will perform.
//Your job is to write a function that accepts any band name as an argument. The function will increment a global variable by one each time it is invoked, and return that number, and the band name concatenated together.


let bandNumber = 0

const takeNumber = function (bandName) {
    bandNumber++;

    return bandNumber + bandName;
}

const deeprock = takeNumber("patel deeprock")
console.log(deeprock)

const scum = takeNumber("Galactic Scum")
console.log(scum)

const under = takeNumber("Underdogs")
console.log(under) 


//Practice: Cookout

const hamburger = {
	name: 'Hamburger',
	type: 'beef',
	cooked: false,
}
const zucchini = {
	name: 'Zucchini',
	type: 'vegetable',
	cooked: false,
}
const chickenBreast = {
	name: 'Chicken Breast',
	type: 'chicken',
	cooked: false,
}
const corn = {
	name: 'Corn',
	type: 'vegetable',
	cooked: false,
}
const steak = {
	name: 'Steak',
	type: 'beef',
	cooked: false,
}

const foods = [hamburger, zucchini, chickenBreast, corn, steak];

const cookedFood = [];

function grill (currentObject) {
    currentObject.cooked = true;

    cookedFood.push(currentObject);
};

foods.forEach(food =>{
    grill(food);
})

console.log("cookedfood",cookedFood)



