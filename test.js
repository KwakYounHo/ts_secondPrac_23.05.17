//* :string[] 매개변수를 배열로 받을 예정
//* typeof arrayData === string과 같은겁니다.
function first(arrayData) {
    // 1. 첫 번째 배열 인덱스의 값을 변환하는 함수를 만들고 싶음
    var result = "다섯 번째";
    var arr = [];
    //* 기존 배열에 0번째를 최종적으로 바꿔주는 형태
    //* 방법
    //* ...전개연산자
    //* reduce()
    //* map()
    //* push()
    //* splice()
    //* 입력받은 배열 복제본 만들기
    arr.push.apply(arr, arrayData);
    //* shift, unshift 사용해서 구현하기
    // arr.shift();
    // arr.unshift(result);
    //* splice() 방식
    arr.splice(0, 1, result);
    //? 0번째 index로부터 1개의 요소를 삭제하고, 0번째에 result를 추가
    return arr;
}
var data = ["첫 번째", "두 번째", "세 번째", "네 번째"];
console.log(first(data));
