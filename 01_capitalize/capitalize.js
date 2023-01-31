const capitalize = (str) => {
	// remove any special char in  the  str first
	// loop through the str character 
	// test if the char isUpperCase
	for(const char of str.match(/[a-zA-Z]/g)){
		if(char===char.toUpperCase()){
			return char;
		}
	}
	return '';
}

export { capitalize };
