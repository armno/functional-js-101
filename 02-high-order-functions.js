function repeat(operation, num) {
	while (num > 0) {
		num -= 1;
		operation();
	}

	// official solution which uses recursion
	//
	// if ( num <= 0 ) {
	// 	return;
	// }

	// operation();
	// return repeat(operation, --num);
}

module.exports = repeat;
