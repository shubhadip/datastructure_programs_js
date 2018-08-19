
let isLetter = (letter) =>{
    return letter.toLowerCase() != letter.toUpperCase()
}

let reverseStringWithoutSpecial = (str) => {
     str = str.split('')
    let left = 0;
    let right = str.length-1
    let temp;
    while(left < right){
        if(!isLetter(str[left])){
            left++
        }else if(!isLetter(str[right])){
            right--
        }else{
            temp = str[left];
            str[left] = str[right]
            str[right] = temp
            left++;
            right--
        }
    }
    str = str.join('')
    console.log(str)
}

reverseStringWithoutSpecial('bv,tg$')