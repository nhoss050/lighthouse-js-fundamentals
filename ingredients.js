var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var counterW=0
//while(counterW < ingredients.length){
 // console.log(ingredients[counterW]);
 // counterW+=1;
//}

// Write a for loop that prints out the contents of ingredients:
for (var counterF = 0; counterF < ingredients.length ; counterF++) {
 console.log(ingredients[counterF]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var counterF = ingredients.length; counterF >= 0 ; counterF--) {
 console.log(ingredients[counterF]);
}