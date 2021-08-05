let numbers = [1, 2, 3, 4, 5];
let exist = includes(numbers, 3);
function includes(array, elementToFind) {
  for (let element of array) if (element === elementToFind) return true;
  return false;
}
console.log(exist);
