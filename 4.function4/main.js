	function countWords(message){
  	s = message.replace(/(^\s*)|(\s*$)/gi,"");
	  s = message.replace(/[ ]{2,}/gi," ");
	  s = message.replace(/\n /,"\n");
    return s.split(' ').length;
}
countWords('Good morning, I love JavaScript.'); // should return 5
console.log(countWords('Good morning, I love JavaScript.'));