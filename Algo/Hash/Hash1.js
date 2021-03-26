let solution = (par,com) => {
    let obj ={}
    let res =[]
    for(let i of par){
    (!obj[i])? obj[i]=1: obj[i]++
    }
    com.forEach(el=>{
    obj[el] ? obj[el]-- : ""
})
 for(let i in obj){
     (obj[i] !== 0) ? res.push(i) : "" 
 }
 return res[0]
}


let solution2 = (par,com) => {
  let parList = par.sort()
   let comList = com.sort()
   let res = []
   for(let i =0; i< par.length;i++){
      if(parList[i] !== comList[i]){
          res.push(parList[i])
      }
   }
return res[0]
}