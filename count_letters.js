function countLetters(str) {
    const charCount = {};

    str = str.toLowerCase();

    for(let char of str){
        //consider only alphabetic characters
        if(/[a-z]/.test(char)){
            charCount[char] = (charCount[char] || 0) + 1;

            // if the character already exists in charCount, increment its count by 1;

            //if the character does not exists in charcount (undefined), initialize its count to 0 and then add 1;
        }
    }

    console.log(charCount);
}

countLetters("viiirall");