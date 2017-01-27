function whichSchool(age){
  if (age < 13) {
    return "Elementary School";
  }
  else if ( 13 < age && age < 18){
    return "Secondary School";
  }
  else if ( age > 18) {
    return "Lighthouse Labs";
  }
}
console.log("I am 35. Which school should I go to?");
console.log(whichSchool(35));
console.log("I am 8. Which school should I go to?");
console.log(whichSchool(8));
console.log("I am 14. Which school should I go to?");
console.log(whichSchool(14));

for (i = 19; i < 100; i++) {
  expect(whichSchool(i)).to.be.equal("Lighthouse Labs");
}
