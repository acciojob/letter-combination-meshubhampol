function letterCombinations(input_digit) {
  //Complete the function
  input_digit=(String)(input_digit);
  let output = [];
  if (input_digit.length == 0) {
    return output;
  }
  let map = ['0', '1', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

  solve(0,'',map,input_digit,output);

  return output;
}

function solve(ind,s,map,input,ans) {
  if(ind==input.length) {
    ans.push(s);
    return;
  }
  let digit=input[ind];

  for(let i=0;i<map[digit].length;i++) {
    s=s+map[digit][i];
    solve(ind+1,s,map,input,ans);
    s=s.substring(0,s.length-1);
  }
}


module.exports = letterCombinations;
