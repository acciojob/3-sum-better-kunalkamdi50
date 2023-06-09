function threeSum(arr, target) {
// write your code herefunction threeSum(arr, target) {
arr.sort((a, b) => a - b); // sort the array in ascending order
let closestSum = Infinity; // initialize the closest sum to a large value
for (let i = 0; i < arr.length - 2; i++) {
let left = i + 1;
let right = arr.length - 1;
while (left < right) {
let sum = arr[i] + arr[left] + arr[right];
if (Math.abs(target - sum) < Math.abs(target - closestSum)) {
closestSum = sum; // update the closest sum
}
if (sum < target) {
left++;
} else if (sum > target) {
right--;
} else {
return closestSum; // return the closest sum if we find an exact match
}
}
}
return closestSum; // return the closest sum at the end of the loop
}
module.exports = threeSum;
  

