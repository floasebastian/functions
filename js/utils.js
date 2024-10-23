

// Function to convert integer to characters set. Example is hexadecimal with the chars set of '0' to 'F' 
function intToCharsSet(number, charsSet){
    number = parseInt(number);
    if(number < 0){
        number = Math.abs(number);
        return "-" + intToCharsSet(number, charsSet);
    }
    
    if(number === 0){
        return charsSet[0];
    }
    
    let charsSetCount = charsSet.length;
    
    let mod = number % charsSetCount;
    let div = Math.floor(number/charsSetCount)
    
    return intToCharsSet(div, charsSet) + charsSet[mod];
}

let base = [
        '0','1','2','3','4','5','6','7','8','9',
        'a','b','c','d','e','f','g','h','i','j','k','l','m','m','o','p','q','r','s','t','u','v','w','x','y','z',
        'A','B','C','D','E','F','G','H','I','J','K','L','M','M','O','P','Q','R','S','T','U','V','W','X','Y','Z'
    ];
console.log(intToCharsSet(99991231235959, base));