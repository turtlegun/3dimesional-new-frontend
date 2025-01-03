
function generatePattern(n) {
    let result = [0];  // Starting with 0
    let current = 0;
    let addThree = true;  // Flag to alternate between adding 3 and 1
  
    for (let i = 1; i < n; i++) {
      if (addThree) {
        current += 3;
      } else {
        current += 1;
      }
  
      result.push(current);
      addThree = !addThree;  // Alternate between adding 3 and 1
    }
    
    return result;
  }
  export { generatePattern };