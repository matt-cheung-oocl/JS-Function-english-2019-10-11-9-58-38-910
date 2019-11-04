function reverseString(message){
  return message.split("").reverse().join("");
}
reverseString('hello'); // should return 'olleh'
console.log(reverseString('hello'));