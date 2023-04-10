function solution(numbers) {
    var answer = 0;
    for(let item of numbers ){
        answer += item;
    }
    return answer / numbers.length;
}