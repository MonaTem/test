/*
The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times. Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"
*/
function decodeString(s) {
   var arr = Array.from(s);
   var newArr = [];
   var outString = "";
   var smallString = "";
   var kk = 0;

for (i = 0; i < arr.length; i ++)    {
    switch(arr[i]) {
    case '[':
    case ']':
      break;
    default:
      newArr.push(arr[i]);
    }
}

const k = parseInt(newArr[0]);

  for (i = 1; i < newArr.length; i++) {
      if (Number.isNaN(parseInt(newArr[i]))) {
        smallString = smallString + newArr[i];
      } else kk = parseInt(newArr[i]);
  }

  for (i = 1; i <= k; i ++) {

    outString = outString + smallString;

    for (j = 1; j < kk; j++) {
       outString = outString + newArr[kk];

  }
  }

return outString;
}
