let insertionSort = (arr, callMe=(ele)=>ele) =>{ 
  let sortedArr = [arr[0]]
   for(let i =1 ; i< arr.length; i++){
    if(callMe(arr[i]) >= callMe(sortedArr[i-1])){
    sortedArr.push(arr[i])
    // 선택된 요소가 비교대상보다 큰수일 경우
   }else {
    // 선택된 요소가 비교대상보다 작은수일 경우
    for(let j=0; j <i; j++){
   if(callMe(arr[i]) <= callMe(sortedArr[j])){
   let smaller = sortedArr.slice(0,j)
   let bigger = sortedArr.slice(j)
   sortedArr = smaller.concat(arr[i],bigger)
    break
      }
    }
  }
  
 } 
return sortedArr
}
