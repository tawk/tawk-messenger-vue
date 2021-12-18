export function isValidString(type, value) {
	if (!value || value.length === 0) {
		return false;
	}

	return value !== null && value !== undefined && value.constructor === type;
}