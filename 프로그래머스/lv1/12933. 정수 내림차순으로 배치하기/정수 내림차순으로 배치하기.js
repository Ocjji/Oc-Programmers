function solution(n) {
    var answer = 0;
    let arr = [];
    
    n = n.toString(); // 정수를 문자열로 변환
    arr = n.split(''); // 문자열을 배열로 변환
    arr.sort((a,b) => b-a); // 배열을 내림차순 정렬
    n = arr.join(''); // 배열을 문자열로 변환
    answer = Number(n); // 문자열을 정수로 변환
    
    // console.log(typeof n, n);
    // console.log(typeof arr, arr);
    
    return answer;
}