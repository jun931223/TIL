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

