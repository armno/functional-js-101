function checkUsersValid(goodUsers) {
	return function allUsersValid(submittedUsers) {
		return submittedUsers.every(function(s) {
			return goodUsers.some(function(u) {
				return s.id === u.id;
			});
		});
	};
}

module.exports = checkUsersValid;
