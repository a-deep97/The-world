

// Function removes the extra spaces in a string
function removeExtraSpaces(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
    s = s.replace(/\n /,"\n");
    return s;
}


module.exports = {removeExtraSpaces};