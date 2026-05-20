/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res = init;
    nums.forEach(function(item) {
        res = fn(res, item);
    });
    return res;
};