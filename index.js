function hasTargetSum(array, target) {
  // Write your algorithm here
  let seenNumbers = {};
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i];
    if (seenNumbers[difference]) {
      return true;
    }
    seenNumbers[array[i]] = true;
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here

  function hasTargetSum(array, target):
  // Create an empty object to keep track of the numbers we've seen so far
  seenNumbers = {}
  
  // Loop through the array
  for i from 0 to length of array:
    
    // Calculate the difference between the target and the current element
    difference = target - array[i]
    
    // If the difference is in the seenNumbers object, we have found a pair that adds up to the target
    if difference in seenNumbers:
      return true
    
    // Otherwise, add the current element to the seenNumbers object
    seenNumbers[array[i]] = true
  
  // If we have checked all elements and no such pair exists, we return false
  return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
