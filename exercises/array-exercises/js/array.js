const { size } = require("cypress/types/lodash");

class ArrayFunctions {
  /**
   * Gets the index of a specific item in an array
   * @param {array} arr - the array input to be processed
   * @param {*} item - the item to get the index of in the array
   * @returns {number} - the index of the item in the array
   * @example
   * indexOf([1,2,3,5,6], 3); // 2
   */
  indexOf(arr, item) {

    const arr = Array.from(document.getElementById("problem1")).indexOf(item)
    const el  = document.getElementById("problem2")

    arr = indexof

    return arr ;
  }

  /**
   * Sum: You should be able to sum the items of an array
   * @param {number[]} arr - an array of numbers to be added summed
   * @returns {number} - the sum of the numbers in the array
   * @example
   * sum([1,2,3]); // 6
   */
  sum(arr) {
var arr = document.getElementById("problem2").value;
    sums = 0;
    for (let i = 0; i < arr.length; i += 1){
      sums += arr[i]
    }
    // Hint: use the reduce method
    return sums ;
  }

  /**
   * Filter: Should filter out all instances of a value from an array
   * Example: filtering 2 out of [1,2,3,5,6,2,4,2] should return [1,3,5,6,4]
   * @param {array} arr - the array to be filtered
   * @param {*} item  - the item to be filtered out
   * @returns {array} - the filtered array
   * @example
   * filter([1,2,3,5,6,2,4,2], 2); // [1,3,5,6,4]
   */
  filterOut(arr, item) {
var arr = document.getElementById("problem1");
var i = arr.length;
var item = document.getElementById("problem2");
while(i--)
{
if (arr[i] === item){
arr.splice(arr.indexOf(item),1);

  }

}
return arr;
}


  /**
   * Append: you should be able to add an item to the end of an array
   * @param {array} arr - the array to be appended to
   * @param {*} item - the item to be appended to the array
   * @returns {array} - the array with the appended item
   * @example
   * append([1,2,3], 4); // [1,2,3,4]
   */
  append(arr, item) {
    var item = document.getElementById("problem2");
    var arr = document.getElementById("problem1");
    arr.splice(arr.length - 1);
    // hint: push, slice, splice would all work. Pay attention to the return value in the docs
    return arr;
  }

  /**
   * Concat: you should be able to join together two arrays
   * @param {array} arr1 - the first array to be joined
   * @param {array} arr2 - the second array to be joined
   * @returns {array} - the joined array
   * @example
   * concat([1,2,3], [4,5,6]); // [1,2,3,4,5,6]
   */
  concat(arr1, arr2) {
    var arr1 = document.getElementById("problem1");
    var arr2 = document.getElementById("problem2");

    const result = arr1.concat(arr2);
    return result;
  }

  /**
   * Square: takes an array of numbers and squares each number  
   * @param {number[]} arr - the array to be squared
   * @returns {number[]} - the squared array
   * @example
   * square([1,2,4,5]); // [1,4,16,25]
   */
  square(arr) {
    var arr = document.getElementById("problem1");
const result = arr.map(x => x ** 2);
    // hint: use .map
    return result;
  }
}
