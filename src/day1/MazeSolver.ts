/*
Maze Solver

This problem would solve a maze in this scenario
we have to solve this via recursion.
[
    ["#","#","#","#","#","#","E","#",],
    ["#", "", "", "","","","","","","",],
    ["#","S","#","#","#","#","#","#",],
]
This is a 2D Array of strings

in an area of the maze, we can either go up, down, left, or right

Remember, find and think about our base cases
    - off the map
        - if somehow we are in a spot that is off the map, we have to return
    - it would be a wall
        - We cant go through a wall, so this is a base case
    - the end of the maze
        - if we make it to the end, we are done recursing, this is our goal
    - have we seen the same area before?
        - if we have, then we dont want to be there
    
The recursive step is checking all four directions


Usually, we want to make another function to be the recursive funtion, if that makes sense
SEE `walk` Function
*/ 


// Define the directions we can move in the maze: up, down, left, right
const directions = [
    [-1, 0], // Up
    [1, 0],  // Down
    [0, -1], // Left
    [0, 1]   // Right
];

// The recursive function to walk through the maze
const walk = (maze: string[], wall: string, curr: Point, end: Point, seen: boolean[][], path: Point[]): boolean => {
    // Check if we are off the map (base case 1)
    if (curr.x < 0 || curr.x >= maze[0].length || 
        curr.y < 0 || curr.y >= maze.length) {
            return false;
    }

    // Check if we've hit a wall (base case 2)
    if (maze[curr.y][curr.x] === wall) {
        return false;
    }

    // Check if we've reached the end point (base case 3)
    if (curr.x === end.x && curr.y === end.y) {
        path.push(end)
        return true;
    }

    // Check if we've already seen this point (base case 4)
    if (seen[curr.y][curr.x]) {
        return false
    }

    // Pre-condition step: Mark the current point as seen and add it to the path
    seen[curr.y][curr.x] = true
    path.push(curr)

    // Recursive step: Explore all four directions
    for (let i = 0; i < directions.length; i++) {
        const [x ,y] = directions[i]
        // Recursively call 'walk' to explore in the direction [x, y]
        const complete = walk(maze, wall, {x: curr.x + x, y: curr.y + y}, end, seen, path)
        // If a complete path to the end is found, return true
        if (complete) {
            return true;
        }
    }

    // Post-condition step: Remove the last path point and backtrack if no path is found
    path.pop();

    return false;
};

// Function to solve the maze
export default function solve(maze: string[], wall: string, start: Point, end: Point): Point[] {
    // Initialize the 'seen' array to keep track of visited points
    const seen: boolean[][] = []
    const path: Point[] = []

    // Fill the 'seen' array with 'false' values, indicating unvisited spots
    for (let i = 0; i < maze.length; i++) {
        seen.push(new Array(maze[0].length).fill(false))
    }

    // Call the walk function to begin solving the maze
    walk(maze, wall, start, end, seen, path);

    // Return the path found by 'walk', or an empty array if no path exists
    return path
}
