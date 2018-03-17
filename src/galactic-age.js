export function Age(inputtedAge) {
  this.inputtedAge = inputtedAge;
}

const days = 365;

Age.protoype.intoDays = function() {
  let age = this.inputtedAge;
  let result = age * days;
  if(isNaN(result)) {
    return "cant calculate";
  }
  return result;
};
