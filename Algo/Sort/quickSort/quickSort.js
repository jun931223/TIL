let quickSort = (arr)=>{
   // Base case
   if(arr.length <= 1){
       return arr
   }
    let pivot = arr[0]
    let left = []
    let right =[]
   for(let i = 1; i < arr.length; i++){
     (pivot<=arr[i])? right.push(arr[i]): left.push(arr[i])
   }
    let rightSort = quickSort(right)
    let leftSort = quickSort(left)
    return [...leftSort,pivot,...rightSort]
}

console.log(quickSort([4,2,1,3]))
