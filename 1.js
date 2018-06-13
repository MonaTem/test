function sortByStrings(s,t) {
  var outString = "";
  for (i = 0; i < t.length; i++)
    for (j = 0; j < s.length; j++) {
      if (t[i] === s[j]) {
         outString = outString + t[i];
      }
    }
return outString;
}
