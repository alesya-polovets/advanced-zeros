module.exports = function getZerosCount(number, base) {
    // your implementation
    let multiplier = base;
    let arr = [];
    let arrCount = [];
    function compareNumber(a, b) {
        return a - b;
    }
    for (let i = 2, j = 0; i <= multiplier; i++) {
        if (multiplier % i === 0) {
            arr.push(i);
            while (multiplier % i === 0) {
                multiplier = multiplier / i;
                j++;
            }
            arr.push(j);
        }
        j = 0;
    }
    for (let i = 0, result = 0, length = arr.length; i < length; i += 2) {
        for (let j = 1; Math.pow(arr[i], j) <= number; j++) {
            result += Math.floor(number / Math.pow(arr[i], j));
        }
        arrCount.push(Math.floor(result / arr [i + 1]));
        result = 0;
    }
    return arrCount.sort(compareNumber)[0];
};