/*
    Given a sorted array in non-decreasing order, return an array of squares of each number, also
    in non-decreasing order. 
    
    For example:
    [-4,-2,-1,0,3,5] -> [0,1,4,9,16,25]

    How can you do it in O(n) time?
*/

function sortSquares(a) {
    const res = new Array(a.length);
    let end = res.length - 1;

    let left = 0;
    let right = (end * 1);

    while (left <= right) {
        let leftSq = (a[left])**2; 
        let rightSq = (a[right])**2; 
        
        if (left === right) {
            res[end] = leftSq;
            break;
        } else {
            if (leftSq > rightSq) {
                res[end] = leftSq;
                left++;
            } else {
                res[end] = rightSq;
                right--;
            }
        }

        end--;
    }   

    return res;
}

let arr = [-4,-2,-1,0,3,5];

console.log(sortSquares(arr));

// function square(num) {

// }