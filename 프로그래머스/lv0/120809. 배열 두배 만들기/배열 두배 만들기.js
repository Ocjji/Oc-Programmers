function solution(numbers) {
    var answer = [];
    // for(let item of numbers){
    //     answer.push(item * 2);
    // } 
    // map을 배우지 않았다면, 위와 같이 풀이함
    answer = numbers.map((element) => element * 2);
    return answer;
}