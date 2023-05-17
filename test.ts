function first(arrayData) {
  // 1. 첫 번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶음
  let result = arrayData[0];
  result = "다섯 번째";
  let arr = arrayData.shift(result);
  return arr;
}

let data = ["첫 번째", "두 번째", "세 번째", "네 번째"];
first(data);