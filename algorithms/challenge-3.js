function missingNumber(numArr) {
    let check = 0;
let missingArray =[]; 
for(let i =0; i<9; i++) { 
    if((i+1) == numArr[check]) {
        check++

    } else {
        missingArray.push(i+1);
    }
}

if (missingArray.length == 0) {
    return false;
    }
 else if ( missingArray.length == 1) {
    return missingArray[0];

}
    
    else {
        return missingArray;
    }

}

module.exports = missingNumber