let countWords = (str) => {
   let makeArr = str.split(" ")
   let collector = {}
     for(let i = 0; i <str.makeArr;i++){
         if(!collector[makeArr[i]]){
             collector[makeArr[i]] = 0
         }else{
             collector[makeArr] ++
         }
     }
     return collector
}

console.log(countWords("맞춤법 검사 기능이 있어서 맞춤법이 맞는지 틀린지 쉽게 알 수 있어서 편했다."))