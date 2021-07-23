console.log("Page successfully loaded script.js");
console.warn("This is your first and only warning");
console.error("ERROR: Reality breached. This world will implode in...10...");

const name = "James Isaac";
let profession = "Story Writer and Game Developer";

//JS DATA TYPES

/*
const str = "A string";
const num = 3; //No quotes for number
const flt = 3.14; 
const bool = true; //true or false
const list = ["Item 1", 2, "Three", 3.14 []]; //Array
const thing = null; //Nothing in it
const notDefined = undefined; //Currently holds no value
const getAge = function() { return 41; } //A function
const obj = {

    'key': 'value',
    'name': 'James' 
} //Can be accessed with obj ['name']

*/

const twitter = "@UnNumberedEntity";

if(twitter == "@NumberedEntity") {

    //Execute this code
    console.log("Twitter handle is @NumberedEntity");

} else {

    console.log(twitter, "is the Twitter handle");

}

if(twitter != "@NumberedEntity") {

    console.warn("YOU ARE UNAUTHORISED. THEY ARE NOW COMING FOR YOU");
}


const age = 17;
if(age >= 18) {

    console.log("You have entered...ADULTHOOD");

}
if(age >= 21) {

    console.log("Adulthood sucks. It's all downhill from here");

} else {

    console.log("The world is your oyster");
}
if(age < 18)   {


    console.warn("Get out of here, you cheeky young scamp!");
}

const identification = "Jaimz";
if(identification == "Rowine") {

    console.log("Welcome, Rowine!");
} else if(identification == "Jaimz") {

    console.log("Enter, Chosen One");

} else {

    console.log("Hello, Guest. I hope you don't get lost.");


}