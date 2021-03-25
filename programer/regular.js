var isMatch = function (s, p) {
  let compared = p.split("");
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== compared[i]) {
      if (p.includes("*") || p.includes(".")) {
        if (compared[i] === "*") {
          compared[i] = s[i];
        } else if (compared[i] === ".") {
          compared[i] = s[i];
        } else if (compared[i] !== str[i]) {
          compared[i] = "";
          //     compared[i+1] = ""
        }
      }
    }
  }

  if (compared.join("") !== s) {
    return false;
  } else {
    return true;
  }
};

/*
.는 스트링 중 같은 자리에 있는 요소를 지울 수 있다.
*는 스트링 중 같은 자리에 있는 요소를 카피하거나 소거할 수 있다.

0. 먼저 s와 p가 같은지 확인 
0.1 s와 p가 맞다면 트루
  0.1.1 만약 맞지 않다면 1번으로
1. p를 배열로 만들자!
1.1 배열로 만든 후 스트링과 배열을 순회하며 어느 부분이 다른지 확인!
 1.1.1. 해당 인덱스 안에 *가 있다면 그 부분의 인덱스를 s의 요소로 넣는다.
 1.1.2. 배열 안에 .역시 s의 인덱스 값으로 바꾼다.
 
aa = a
aa = a* 
*가 있다면 스트링의 같은 자리에 있는 요소를 *로 만든다.
.가 있다면 
*/
