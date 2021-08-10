let numbers = [1, 2, 3, 4, 5];
let maxNumber = getMaxNumber(numbers);
console.log(maxNumber);

function getMaxNumber(array) {
  if (array.length === 0) return undefined;

  maxNumber = array[0];
  for (let i = 1; i < array.length; i++)
    if (array[i] > maxNumber) maxNumber = array[i];

  return maxNumber;
}
