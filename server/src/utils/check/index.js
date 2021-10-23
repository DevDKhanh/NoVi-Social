const isUsernameError = str => {
	const REGEX =
		/^(?=.{1,30}$)(?![" ".])(?!.*[" ".]{2})[a-zA-Z0-9]+(?<![" ".])$/;
	return str.match(REGEX) == null;
};

module.exports = {
	isUsernameError,
};
