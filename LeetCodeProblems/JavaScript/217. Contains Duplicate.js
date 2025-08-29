var containsDuplicate = function(nums) {
    let numMap = new Map();

    for(let i = 0; i < nums.length; i++) {
        if(numMap.has(nums[i])) {
            return true;
        }

        numMap.set(nums[i], i);
    }

    return false;
};

var containsDuplicate = function (nums) {
    return new Set(nums).size !== nums.length;
};