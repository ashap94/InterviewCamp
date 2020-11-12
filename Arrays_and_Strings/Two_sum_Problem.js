/*
    Two Sum Problem - Find 2 numbers in a sorted array that sum to X. 
    
    For example, if A = [1,2,3,4,5] and X = 9, the numbers are 4 and 5.
*/

function twoSum(a, target) {
    if (!Array.isArray(a)) return null;

    let left = 0;
    let right = a.length - 1;

    while (left < right) {
        let sum = a[left] + a[right];
        if (sum < target) {
            left++;
        } else if (sum > target) {
            right--;
        } else {
            return [left, right];
        }
    }

    return null;
}

let a = [1,2,4,5,6];
let target = 9;

console.log(twoSum(a, target));