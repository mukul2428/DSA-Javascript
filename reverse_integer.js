function reverseInteger(num) {
    //convert the integer to string
    let numStr = num.toString();

    //reverse the characters in string
    let reversedStr = numStr.split('').reverse().join('');

    //convert reversed string back to integer

    let revNum= parseInt(reversedStr, 10);

    console.log(revNum);
}

reverseInteger(45);