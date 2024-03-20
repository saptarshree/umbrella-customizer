function minimumPlanesRequired(fuelArray) {
    let n = fuelArray.length;
    let planesNeeded = 1;
    let currentFuel = fuelArray[0];
    let maxReach = fuelArray[0];
  
    if (currentFuel === 0) return -1; // If there's no fuel at the starting airport, it's impossible to reach the last airport
  
    for (let i = 1; i < n; i++) {
        if (i === n - 1) return planesNeeded; // If we reach the last airport, return the number of planes needed
  
        maxReach = Math.max(maxReach, i + fuelArray[i]);
  
        currentFuel--;
  
        if (currentFuel === 0) {
            planesNeeded++;
            currentFuel = maxReach - i;
  
            if (currentFuel <= 0) return -1; // If there's no fuel to continue, it's impossible to reach the last airport
        }
    }
  
    return -1; // If we haven't reached the last airport by the end, it's impossible to reach
  }
  
 
  console.log(minimumPlanesRequired([2, 1, 2, 3, 1])); 
  console.log(minimumPlanesRequired([1, 6, 3, 4, 5, 0, 0, 0, 6])); 


///explanation;


/*  Initializations:

n = 5
planesNeeded = 1
currentFuel = 2 (first element of the array)
maxReach = 2 (first element of the array)
Iteration 1 (i = 1):

maxReach becomes Math.max(2, 1 + 1) which is 2.
currentFuel decreases to 1.
Since currentFuel is not zero, no plane is needed.
Iteration 2 (i = 2):

maxReach becomes Math.max(2, 2 + 2) which is 4.
currentFuel decreases to 0.
Since currentFuel is zero, a plane is needed. planesNeeded becomes 2, and currentFuel is updated to 2.
Iteration 3 (i = 3):

maxReach becomes Math.max(4, 3 + 3) which is 6.
currentFuel decreases to 1.
Since currentFuel is not zero, no plane is needed.
Iteration 4 (i = 4):

maxReach becomes Math.max(6, 4 + 1) which is 6.
currentFuel decreases to 0.
Since currentFuel is zero, a plane is needed. planesNeeded becomes 3, and currentFuel is updated to 3.
The loop exits because i = n - 1 (i.e., we've reached the last airport). So, the function returns planesNeeded, which is 3.

Dry Run for [1, 6, 3, 4, 5, 0, 0, 0, 6]:
Initializations:

n = 9
planesNeeded = 1
currentFuel = 1 (first element of the array)
maxReach = 1 (first element of the array)
Iteration 1 (i = 1):

maxReach becomes Math.max(1, 1 + 6) which is 7.
currentFuel decreases to 0.
Since currentFuel is zero, a plane is needed. planesNeeded becomes 2, and currentFuel is updated to 6.
Iteration 2 (i = 2):

maxReach becomes Math.max(7, 2 + 3) which is 7.
currentFuel decreases to 5.
Since currentFuel is not zero, no plane is needed.
Iteration 3 (i = 3):

maxReach becomes Math.max(7, 3 + 4) which is 7.
currentFuel decreases to 4.
Since currentFuel is not zero, no plane is needed.
Iteration 4 (i = 4):

maxReach becomes Math.max(7, 4 + 5) which is 9.
currentFuel decreases to 3.
Since currentFuel is not zero, no plane is needed.
Iteration 5 (i = 5):

maxReach becomes Math.max(9, 5 + 0) which is 9.
currentFuel decreases to 2.
Since currentFuel is not zero, no plane is needed.
Iteration 6 (i = 6):

maxReach becomes Math.max(9, 6 + 0) which is 9.
currentFuel decreases to 1.
Since currentFuel is not zero, no plane is needed.
Iteration 7 (i = 7):

maxReach becomes Math.max(9, 7 + 0) which is 9.
currentFuel decreases to 0.
Since currentFuel is zero, a plane is needed. planesNeeded becomes 3, and currentFuel is updated to 2.
Iteration 8 (i = 8):

maxReach becomes Math.max(9, 8 + 6) which is 14.
currentFuel decreases to 1.
Since currentFuel is not zero, no plane is needed.
The loop exits because i = n - 1 (i.e., we've reached the last airport). So, the function returns planesNeeded, which is 3.

This is the step-by-step execution of the function with the provided input arrays.*/
  