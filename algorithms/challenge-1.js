function isAnagram(str1, str2) {
 
    let check = 0;
            if( str1.length !== str2.length) {
               return false; 
               
            }
            for (let i = 0; i < str1.length; i++) {
                for(let j = 0; j < str2.length; j++) {
                    if(str1[i] == str2[j]) {
                        check ++;
        
                    } else {
                    
                    }
                }
        
            }
            for(let i = 0; i<str2.length; i++) {
                for(let j = i+1; j <str2.length; j++) {
                    if(str1[i] === str1[j]) {
                        check =check-2;
        
                    } 
                
                }
        
            }
            if (check == str1.length) {
                return true;
            }
            else {
                return false;
            }
}
module.exports = isAnagram