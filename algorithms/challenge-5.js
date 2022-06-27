function isPalindrome(line) {

  line =line.toString();
  let reverse = [];
  for(let i = line.length - 1; i>=0; i--) {
      reverse.push(line[i]);

  }
  reverse = reverse.join("");
if(reverse == line) {
  return true;
} else {
  return false;
}

}
module.exports = isPalindrome