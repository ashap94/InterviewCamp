/*
    Reverse the order of elements in an array. 
    
    For example, A = [1,2,3,4,5,6], Output = [6,5,4,3,2,1]
*/

function reverseElements(a) {
    let left = 0;
    let right = a.length - 1;

    while (left < right) {
        swap(a, left, right);
        left++;
        right--;
    }

    return a;
}

function swap(array, left, right) {
    let leftElement = array[left];
    array[left] = array[right];
    array[right] = leftElement;
}

let array = [1,2,3,4,5,6];

console.log(reverseElements(array))

/*
    Time Complexity: O(n) aka linear time

    Space Complexity: O(1) aka constant space
*/