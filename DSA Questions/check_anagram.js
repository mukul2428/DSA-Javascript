function areAnagrams(str1, str2) {
    if(str1.length !== str2.length){
        return false;
    }

    //create object to store characters counts of str1
    const charCount = {};

    //count the occurence of characters in str1
    for(let char of str1){
        charCount[char] = (charCount[char] || 0) + 1;
    }

    //chcek if characters in str2 match the character counts in charCount

    for(let char of str2){
        if(!charCount[char]){
            //if char not found, not an anagram
            return false;
        }
        charCount[char]--; //decrement the character count;
    }
    return true;
}
console.log(areAnagrams("Viral", "liVar"));