// Quick Sort Algorithm in TypeScript
// This file exports the 'quick_sort' function which performs the Quick Sort algorithm.
// Quick Sort is an efficient, in-place, comparison-based, divide and conquer sorting algorithm.
// It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays,
// according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

// Main Quick Sort recursive function.
function qs(arr: number[], lo: number, hi: number): void {
    // Base case: If the lower index is greater than or equal to the higher index, return.
    if (lo >= hi) {
        return;
    }

    // Partition the array and get the pivot index.
    const pivotIdx = partition_array(arr, lo, hi);

    // Recursively apply the algorithm to the left of the pivot.
    qs(arr, lo, pivotIdx - 1);

    // Recursively apply the algorithm to the right of the pivot.
    qs(arr, pivotIdx + 1, hi);
}

// Function to partition the array.
function partition_array(arr: number[], lo: number, hi: number): number {
    // Choosing the pivot element, here it's chosen as the element at the high index.
    const pivot = arr[hi];

    // Index for the smaller element.
    let index = lo - 1;

    // Iterate over the array from the low index to just before the high index.
    for (let i = lo; i < hi; ++i) {
        // If the current element is less than or equal to the pivot,
        // increment the index of the smaller element and swap it with the current element.
        if (arr[i] <= pivot) {
            index++;
            const temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
        }
    }

    // Place the pivot element at its correct position in the sorted array
    // by swapping it with the element at index + 1.
    index++;
    arr[hi] = arr[index];
    arr[index] = pivot;

    // Return the index where the pivot is finally placed.
    return index;
}

// Exported function to perform Quick Sort on an array.
export default function quick_sort(arr: number[]): void {
    // Initial call to the Quick Sort function with the entire array range.
    qs(arr, 0, arr.length - 1);
}