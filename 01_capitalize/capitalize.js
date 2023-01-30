const capitalize = (str) => {
	// loop through the str character 
	// test if the char isUpperCase
	for(const char of str){
		if(char===char.toUpperCase()){
			return char;
		}
	}
}

export { capitalize };
