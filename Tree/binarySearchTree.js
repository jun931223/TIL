class binarySearchTree  {
    constructor(value){
    /*
     null과 undefined의 차이
     
     null [등록,선언하는 키워드]
     null은 정의를 명시적으로 아무것도 없는 값으로 지정해둔 것이다.
     "아무것도 참조하지 않고 있다!" 라는 의미를 변수에 넣은 것이다.
     주로 객체를 담을 변수를 초기화할 때 사용된다.
     
     let Tate = null
     console.log(null) // null
     tpyeof(Tate) //object

     undefined [전역객체의 프로퍼티]
     undefined는 기본적으로 값이 할당되지 않은 변수를 말한다.
     undefined의 타입은 undefined 이며 변수에 기본적으로 아무런 할당을 하지 않을경우 undefined가 값으로 들어간다.
     
     let Tate;
     console.log(Tate); // undefined
     tpyeof(Tate); // undefined

     null == undeined // true  
      => 기본적으로 아무것도 등록하지 않았다는 의미에서 == 동등연산자는 true를 출력
      값을 초기화할 때 0, null, undefined, false
     null === undefined  // false
     */
        this.value = value
        this.left = null
        this.right = null
    }
 
 //삽입
  insert(value){
      if(value <= this.value) {
       
        /*
       left 안에 아무런 값이 없을 때
       this.left안에 binarySearchTree 인스턴스를 심어놓는다.
       */
        if(!this.left){
         this.left = new binarySearchTree(value)
       }else{
       // 만약 This.left가 null이 아닐경우 벨류값을 넣어준다.
        this.left.insert(value)
       }
        //this.right도 this.left 방식과 동일
      }else if(value > this.value){
    if(!this.right){
      this.right = new binarySearchTree(value)
     }else{
  this.right.insert(value)
    }
   }
  }
 
 //검색
   contain(value){
     if(this.value === value) {
        return true
     } 
 if (this.value >= value){
        // this.value값이 value 보다 작을 때 왼쪽탐색
    if(!this.left){
         return false
      }else if(this.left === value){
         return true
      }
        return this.left.contain(value)      
      } else {
       if(!this.right){  
        return false
        }else if(this.right === value){
         return true
       }
        return this.right.contain(value)       
        // this.value값이 value 보다 작을 때 오른쪽탐색
       }
   }
 
     inorder(callback = (ele)=>{console.log(ele)}) {
    if(this.left){  //왼쪽에 값이 존재하면
      this.left.inorder(callback)
      // 왼쪽에 인자를 callback함수의 인자로 보낸다.
    }
    callback(this.value); // 왼쪽 다 했으면 가운데 해
 
    if(this.right){  // 가운데 다 했으면 오른쪽 해
      this.right.inorder(callback)
    }
   }
 
 }
 
 