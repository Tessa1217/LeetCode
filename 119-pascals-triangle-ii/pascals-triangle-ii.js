/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function(rowIndex) {
    
    const output = Array.from({length : rowIndex + 1}, () => 0);
    output[0] = 1;

    for (let i = 1; i <= rowIndex; i++) {
        for (let j = i; j > 0; j--) {
            output[j] += output[j - 1]
        }
    }

    return output;
};