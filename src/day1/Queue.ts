/**
 * Queue Data Structure and Algorithms
 *
 * Type Definition:
 * - Node<T>: A generic type representing a node in a queue.
 *    - value: Holds the data of the node.
 *    - next: Optional, points to the next node in the queue.
 *
 * Queue Class:
 * - Implements a FIFO (First In, First Out) structure using a linked list.
 * - Contains 'head' and 'tail' pointers, and a 'length' property.
 *
 * Constructor:
 * - Initializes an empty queue with 'head' and 'tail' set to undefined and 'length' to 0.
 * - Time Complexity: O(1) - Constant time complexity as it's just initializing variables.
 *
 * enqueue(item: T):
 * - Adds an item of type T to the queue.
 * - Steps:
 *   1. Create a new node with the item.
 *   2. If the queue is empty, set both 'head' and 'tail' to the new node.
 *   3. Otherwise, add the new node to the end and update 'tail'.
 *   4. Increment 'length'.
 * - Time Complexity: O(1) - Constant time complexity as it involves a few steps of assignment.
 *
 * deque():
 * - Removes and returns the item at the front of the queue.
 * - Steps:
 *   1. If the queue is empty, return undefined.
 *   2. Save the current head and update the head to the next node.
 *   3. Decrement 'length'.
 *   4. Disconnect the removed head and return its value.
 * - Time Complexity: O(1) - Constant time complexity due to direct access to the head.
 *
 * peek():
 * - Returns the value at the front of the queue without removing it.
 * - Simply accesses the value of 'head'.
 * - Time Complexity: O(1) - Constant time complexity as it's a simple access operation.
 */

type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if (!this.tail) {
            this.tail = this.head = node;
            return;
        }
        this.tail.next = node;
        this.tail = node;
    }
    deque(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        this.length--;
        const head = this.head; // save the head
        this.head = this.head.next; // update the head value

        // In lower level languages without a garbage collector,
        // we would have to free up some memory here
        head.next = undefined;

        return head.value; // return the new updated head value
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}
