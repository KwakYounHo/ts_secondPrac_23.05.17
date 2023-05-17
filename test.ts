//* :string[] 매개변수를 배열로 받을 예정
//* typeof arrayData === string과 같은겁니다.
function first(arrayData: string[]) :string[] {
  // 1. 첫 번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶음
  let result:string = arrayData[0];
  let arr:string[] = [];
  arr.unshift(result);
  return arr;
}

let data = ["첫 번째", "두 번째", "세 번째", "네 번째"];
first(data);