function palindrome(message){
    let strLen = Math.floor(message.length/2);
    for (let i = 0; i < strLen; i++) {
      if (message[i] !== message[message.length- i-1]) {
        console.log(message[i])
        console.log(message[message.length- i-1])
        return false;
      }
    }
  return true;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true
console.log(palindrome('hello'));
console.log(palindrome('abcba'));