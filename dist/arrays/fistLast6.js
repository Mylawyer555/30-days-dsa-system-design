"use strict";
/*
Given an array of ints, return true if 6 appears as either the first or last element in the array. The array will be length 1 or more.

Examples

    firstLast6([1, 2, 6]) → true
    firstLast6([6, 1, 2, 3]) → true
    firstLast6([13, 6, 1, 2, 3]) → false */
Object.defineProperty(exports, "__esModule", { value: true });
// solution:
function firstLast6(nums) {
    if (nums.length < 1) {
        return;
    }
    if (nums[0] === 6 || nums[nums.length - 1] === 6) {
        return true;
    }
    else {
        return false;
    }
}
firstLast6([1, 2, 6]);
firstLast6([6, 1, 2, 3]);
firstLast6([13, 6, 1, 2, 3]);
//# sourceMappingURL=fistLast6.js.map