/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const res = {};

    arr1.forEach(obj => {
        res[obj.id] = { ...obj };
    });

    arr2.forEach(obj => {
        if (res[obj.id]) {
            res[obj.id] = { ...res[obj.id], ...obj };
        } else {
            res[obj.id] = { ...obj };
        }
    });

    return Object.values(res);
};