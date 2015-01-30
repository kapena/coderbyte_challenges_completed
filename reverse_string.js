/*Coderbyte challenge 1*/
// Reverse a string..the coderbyte solution

function firstReverse (str) {
  /*Split
  Split takes a string and turns it into an array of sub strings
  ex: `"hello brent"` string is changed to ex: `["hello","brent"]`*/

  /*Reverse
  Reverse takes the sub string and flips the letters front to back
  ex: `[olleh]`*/

  /*Join
  Join takes the reverse and converts it back into a string like so
  ex: `"olleh"`
  */
  return str.split(" ").reverse().join("");
}

FirstReverse(readline()); // function call as it stands on Coderbyte

/*A few more solutions soon to come*/
