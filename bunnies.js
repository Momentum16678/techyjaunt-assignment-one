// six bunnies to start with
const bunnies = ["Lucy", "Bella", "Coco", "Daisy", "Rosie", "Lola"];

// add Mario to the end
bunnies.push("Mario");

// remove Lucy from the array
const lucyIndex = bunnies.indexOf("Lucy");
bunnies.splice(lucyIndex, 1);

// add Luigi to the beginning
bunnies.unshift("Luigi");

console.log(bunnies);