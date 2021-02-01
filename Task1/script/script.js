// Create a function which accepts an array of numbers as parameter and inserts dashes (-) between EACH two EVEN numbers.
// Example: When called with 0,2,5,4,6,8 the output should be 0-254-6-8.

let array = [0, 2, 5, 4, 6, 8];

let string2 = "";

function myFunc(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 == 0 && array[i + 1] % 2 == 0) {
      string2 += `${array[i]}-`;
    } else {
      string2 += `${array[i]}`;
    }
  }
}

myFunc(array);

console.log(string2);
