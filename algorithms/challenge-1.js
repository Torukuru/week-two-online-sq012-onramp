function isAnagram(str1, str2) {
    if(str1.length !== str2.length){ //Compare the lengths and return false if their lengths are not equal
        return false;
     }
     let sortOne = str1.split('').sort().join(''); //convert the first string to an array, sort the array alphabetically and then reverse it back to a string
     let sortTwo = str2.split('').sort().join('');

     if(sortOne === sortTwo){ //return true if the two stings are the same
        return true;
     } else { 
        return false;
     }
    
}
module.exports = isAnagram