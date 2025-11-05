// week4.js
// embedded within week4embed.html
// also see week4Journal.txt

// feels weird to be writing this with no containing function?
// really want to learn the execution order on this

// string variable
let cat = "Meow!";
console.log(cat);

// number variable
let numCats = 5;
console.log("I have "+numCats+" cats.");

// adding numbers.
// directions don't say output to console, but how else would you know I've done it right?
let newCats = numCats + 2;
console.log("If we had 2 more cats, there would be "+newCats+" of them.");

// subtracting nuumbers.
let subtractCats = numCats - 2;
console.log("Besides Ford and Arthur, I have "+subtractCats+" cats.");

// modulo division.
// some thought on this one.
// 25%3, maybe, since 24/3 is a whole number?
let divide = 25%3;
console.log("When modulo dividing 25 by 3, the result is "+divide+".");

// exponent
let exponent = 2**6;
console.log("2 to the 6th power is "+exponent+".");

// conditional.
if (numCats > 5) {
    console.log("I have more than 5 cats.");
} else {
    console.log("I don't have more than 5 cats.");
}

// object output. 
// editing to use Dune
// ...also adding a name property
let kitty = {
    name : "Dune",
    breed : "cat", 
    baby: "big baby", 
    fluffy: "fluffy", 
    output: function() {
        return `${this.name} is a ${this.breed} that is a ${this.fluffy} ${this.baby}.`
    }
}

// and let's be silly
console.log(kitty.name+" is a "+kitty.breed+"! "+kitty.output());

// method call? done already.
// change object to animal of choice? done already.
// change object to a value of choice?
kitty.breed = "longhair";
kitty.baby = "kitten";

// then output all the values?
console.log(kitty.name+" is a "+kitty.breed+" cat. He still acts like a "+kitty.baby+", and he is so "+kitty.fluffy+"!");

// array stuff.

// by third position, do you mean Index 3 or the 3rd item?
// let's do both, just to be sure
let meowArray = ["meow", "meep", "mew", "mow"];
console.log(kitty.name+"'s favorite word is "+meowArray[3]+"! Or was it "+meowArray[2]+"?");

// I hope the loop call works the same as I remember?
// let's try assembling a string
let meows = "";
for (i = 0; i < 4; i += 1) {
    meows = meows+meowArray[i]+"! ";
}
console.log(meows);

// variable if-statement
// copy-pasting the code and letting it output to the console is not really the point?
// so let's just write it
console.log("The variable if-statement at the end of homework.js evaluates to false.");