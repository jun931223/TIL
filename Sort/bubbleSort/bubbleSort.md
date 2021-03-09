Bubble sort?

불규칙적으로 나열된 배열의 요소들을 정렬시키는 알고리즘이다.
전체 배열의 요소들을 순회하면서 현재 값과 다음 값 두 개의
인자를 비교하면서 정렬을 시킨다.

시간복잡도를 보게 되면 best 일때가 linear이고 worst는 exponetial을 보이고 있다.

버블 정렬의 기능을 수도코드로 작성한다면?

1. 배열의 모든 요소를 순회한다.
2. cur과 pre를 비교한다.
   2.1 만약 cur > pre 라면 cur과 pre의 위치를 바꿔준다.
   2.2 cur<pre 라면 다음 요소로 넘어간 후 1번을 실행한다.
3. 배열의 모든 요소를 순회했을 때 모든 값이 cur<pre라면 종료한다.

arr = [5,2,1,3,4] 을 버블 정렬 개념으로 오름차순 정렬을 시켜 본다면?

round 1 [5,2,1,3,4]
5 > 2 => [2,5,1,3,4] swap
5 > 1 => [2,1,5,3,4] swap
5 > 3 => [2,1,3,5,4] swap
5 > 4 => [2,1,3,4,5] swap

round 2 [2,1,3,4,5]
2 > 1 => [1,2,3,4,5] swap
2 < 3 => [1,2,3,4,5] stick
3 < 4 => [1,2,3,4,5] stick
4 < 5 => [1,2,3,4,5] stick
round 3 [1,2,3,4,5] =>
마지막으로 순회를 해서 모든 배열이 오름차순으로 되어 있는지 확인한다.
최종 [1,2,3,4,5]가 리턴된다.