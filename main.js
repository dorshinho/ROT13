function encode(phrase){
    var result = "";
    // .. for each character in phrase
    for(var i = 0; i < phrase.length; i++){
        // get the charCode if letter at index i
        var cc = phrase[i].charCodeAt(0);
        // add 13 to the letter's charCode
        result += String.fromCharCode(cc+13);
    }
    return result;
}

console.log(encode("hello")); //---> "uryyb"

function decode(phrase){

}

console.log(decode("uryyb")); //---> "hello"

///

