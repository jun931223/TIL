
let solution = (arr) => {
    let wearClothes = new Set();
    
    
    for(let i=0; i< arr.length; i++){
        wearClothes.add(arr[i][0])
    
     for(let j = 0; j < arr.length; j++){
    
       if(arr[j][1]!==arr[i][1]) {
        let wearingSet = arr[i][0]+ ","+arr[j][0]
        let makeArr = wearingSet.split(",")
        let reverse = makeArr.reverse();
        let checker = reverse.join(",")
    
       if(!wearClothes.has(wearingSet) && !wearClothes.has(checker)){
        wearClothes.add(arr[i][0]+","+arr[j][0])
         }
       }
      }
    }
    return wearClothes.size
    }

    let arr = [["ab",1],["ab",1],["cd",1],["de",1]]

console.log(solution(arr));
