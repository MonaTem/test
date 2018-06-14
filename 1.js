/*
Sort the letters in string s in the same order the
letters exist in string t.
String s may have repeating letters, string t will have
no repeating letters
*/

function sortByStrings(s,t) {
  var outString = "";
  for (let i = 0; i < t.length; i++)
    for (let j = 0; j < s.length; j++) {
      if (t[i] === s[j]) {
         outString = outString + t[i];
      }
    }
return outString;
}
