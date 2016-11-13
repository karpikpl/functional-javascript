/*jshint esversion: 6, node: true*/
function countWords(inputWords) {
    const result = {};
    inputWords.forEach(w => {
        result[w] = result[w] + 1 || 1;
    });

    return result;
}

module.exports = countWords;
