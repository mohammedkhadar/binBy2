function solution(s){
  let sIndex = 0;

  while(s[sIndex] !== "1") {
    sIndex++;
  }

  let r = 0;

  for(var i = sIndex; i < s.length; i++) {
    r += s[i] === "1" ? 2 : 1;
  }
  
  return r-1;
}

console.log(solution(s));
