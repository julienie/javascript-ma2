//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance

function Dog(breed, size) {
    this.breed = breed;
    this.size = size;
}

Dog.prototype.dogInfo = function() {
    console.log('A ' + this.breed +' is a ' + this.size +' dog.');
}

var jrt = new Dog('Jack Russel Terrier', 'small');
var spinone = new Dog('Spinone Italiano', 'huge');
jrt.dogInfo();
spinone.dogInfo();

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array

var myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var slicedNumber = myNumbers.slice(4, 5); 
console.log(slicedNumber); //confirming that the correct number was sliced

//3. Delete the last number in the array that you created above.

myNumbers.pop(); 
console.log(myNumbers); //confirming the correct number was removed

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas: 

var text = 'Strawberries are a popular part of spring and summer diets throughout America. Mouths water from coast to coast each spring, when small white blossoms start to appear on strawberry bushes. They announce the impending arrival of the ruby red berries that so many people crave. Ripe strawberries taste sweet and have only a slight hint of tartness. They are also one of the healthiest fruits around. There are countless recipes for the luscious red berry, but many people prefer to eat them fresh and unaccompanied.';

function fruitSwitch(a) {
    a = a.replace(/Strawberries/g, 'Bananas'); //Replace uppercase plural
    a = a.replace(/strawberries/g, 'bananas'); //Replace lowercase plural
    a = a.replace(/Strawberry/g, 'banana'); //Replace uppercase single
    a = a.replace(/strawberry/g, 'banana'); //replace lowercase single
    return a; //return the new string
}

text = fruitSwitch(text); //run function 
console.log(text); //log to console to confirm 


//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.

var button = document.querySelector('button');
var buttonArray = ['Real Madrid', 'FC Barcelona', 'Manchester United', 'Bayern Munich'];

button.addEventListener('click', function() {
    buttonArray = [];
    buttonArray.push('Opel', 'Audi', 'Nissan', 'Ford');
    console.log(buttonArray);
});

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.

var team =[
    {
        'name' : 'Julie',
        'age' : 32,
        'status' : 'awesome'
    },
    {
        'name' : 'Dag',
        'age' : 38,
        'status' : 'sarcastic'
    },
    {
        'name' : 'Allan',
        'age' : 1000,
        'status' : 'old'
    }];

var teamName = team.filter(function(team) {
    return team.name === 'Julie';
});

console.log(teamName);

//7. Create a simple function that logs the date.

(function() {
    var today = new Date();
    console.log(today);
})();