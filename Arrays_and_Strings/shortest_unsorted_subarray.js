/*
    Given an array of integers, find the shortest sub array, that if sorted, results in the
    entire array being sorted.

    For example:
    
    [1,2,4,5,3,5,6,7] --> [4,5,3] - If you sort from indices 2 to 4, the entire array is sorted.
    [1,3,5,2,6,4,7,8,9] --> [3,5,2,6,4] - If you sort from indices 1 to 5, the entire array is sorted.
*/

function shortestUnsortedSubarray(a) {
    if (a === null || a.length == 0) return null;

    let start, end;
    
    for (start = 0; start < a.length - 1; start++) {
        if (a[start] > a[start + 1]) break;
    }
    
    if (start === a.length - 1) return null;

    for (end = a.length - 1; end > 0; end--) {
        if (a[end - 1] > a[end]) break;
    }
    
    // define min and max values within current range
    let min = Infinity;
    let max = -Infinity;
    for (let k = start; k <= end; k++) {
        if (a[k] < min) {
            min = a[k];
        }

        if (a[k] > max) {
            max = a[k];
        }
    }
    
    while (start > 0 && a[start - 1] > min) {
        start--;
    }
    
    while (end < a.length - 1 && a[end + 1] < max) {
        end++;
    }
    
    return [start, end];
    
};

let arr1 = [1,2,4,5,3,5,6,7]; // --> [4,5,3] - If you sort from indices 2 to 4, the entire array is sorted.
let arr2 = [1,3,5,2,6,4,7,8,9]; // --> [3,5,2,6,4] - If you sort from indices 1 to 5, the entire array is sorted.

console.log(`Result for ${arr1}:`);
console.log(shortestUnsortedSubarray(arr1));

console.log("");

console.log(`Result for ${arr2}:`);
console.log(shortestUnsortedSubarray(arr2));
