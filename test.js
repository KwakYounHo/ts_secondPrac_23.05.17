//* :string[] 매개변수를 배열로 받을 예정
//* typeof arrayData === string과 같은겁니다.
function first(arrayData) {
    // 1. 첫 번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶음
    var result = "아니이게뭐야";
    var arr = [];
    arr.unshift(result);
    return arr;
}
var data = ["첫 번째", "두 번째", "세 번째", "네 번째"];
console.log(first(data));
