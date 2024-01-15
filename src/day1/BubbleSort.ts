// This checks if the index value next to the current index is greater. 
// If the current index is greater than the index next to it, 
// the current index swaps places with the index next to it.


// a singular iteration will always put the largest item at the end of the array
// this means the bext time we do bubble sort, we go up to, but not including the last position
// This is because it is already sorted and it would be dumb to check again 

// Runtime works like this: N - N + 1; O(n^2 + n) OR just O(n^2)
// 

export default function bubble_sort(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}
