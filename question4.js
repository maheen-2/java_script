//the second largest number in that array
let num = [20, 300, 99, 16, 28, 700, 43, 85];

//first value of array assumed as 1st & 2nd largest value
const secondLargestValueOfArray = (Array) => {
  let largestNumber = Array[0];
  let secondLargestNumber = Array[0];
  //comparisons with other array values
  for (let i = 0; i < Array.length; i++) {
    if (Array[i] > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = Array[i];
    } else if (Array[i] > secondLargestNumber) {
      secondLargestNumber = Array[i];
    }
  }
  return secondLargestNumber;
};
const secondLargestNumber = secondLargestValueOfArray(num);
console.log(secondLargestNumber);
