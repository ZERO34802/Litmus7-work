//Map , filter and reduce are higher order functions in js

//map
//map function is used to transform an array
const arr = [5, 1, 3, 2, 6];

function double(x) {
  return 2 * x;
}
function triple(x) {
  return 3 * x;
}
const output1 = arr.map(double);
console.log(output1);
const out2 = arr.map(triple);
console.log(out2);

//map function basically maps each and every element of the array into the desired value through a function
// and stores it another array

//filter function
// it is used to filter the values according to certain conditions
// filter odd values in the above same array

const oddarr = arr.filter(function isodd(x) {
  if (x % 2 != 0) return x;
});
console.log(oddarr);

//Reduce function
//used when we have to take all the elements in an array and come up with a single value out of them
// sum or max element in array above

function findSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
console.log(findSum(arr));
//writing this using reduce function

const out3 = arr.reduce(function (acc, curr) {
  acc = acc + curr;
  return acc;
}, 0);
//here initial value of acc is given as second parameter in reduce function, acc --> accumulate, curr- > current
