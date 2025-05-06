function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  console.log('task-6');
  
  getFirstElement([1, 2, 3]);           // 1
  getFirstElement(["a", "b", "c"]);     // "a"
  getFirstElement([true, false, true]); // true
  