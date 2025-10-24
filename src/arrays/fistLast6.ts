/* 
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples

    firstLast6([1, 2, 6]) → true
    firstLast6([6, 1, 2, 3]) → true
    firstLast6([13, 6, 1, 2, 3]) → false */


// solution:

function firstLast6(nums:number[]){
  if(nums.length < 1){
    return
  }
  
  if(nums[0] === 6 || nums[nums.length-1 ] ===6){
    return true;
  }else{
    return false;
  }
}


firstLast6([1, 2, 6]) 
firstLast6([6, 1, 2, 3]) 
firstLast6([13, 6, 1, 2, 3]) 