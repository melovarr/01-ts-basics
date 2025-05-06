function getFirstElement<T>(arr: T[]): T {
    return arr[0];
  }
  
  console.log('task-6');
  
  getFirstElement<number>([1, 2, 3]);           // 1
  getFirstElement<string>(["a", "b", "c"]);     // "a"
  getFirstElement<boolean>([true, false, true]); // true
  