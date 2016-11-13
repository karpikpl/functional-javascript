/*jshint esversion: 6, node: true*/
function countWords(inputWords) {
    return inputWords.reduce((countMap, w) => {
        countMap[w] = (countMap[w] + 1) || 1;
        return countMap;
    }, {});
}

module.exports = countWords;
