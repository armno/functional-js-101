function countWords(inputWords) {
	return inputWords.reduce(function(sum, curr) {
		sum[curr] = ++sum[curr] || 1;
		return sum;
	}, {});
}

module.exports = countWords;
