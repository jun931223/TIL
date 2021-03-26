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
