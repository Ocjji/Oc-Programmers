function solution(num, total) {
    // var answer = new Array(num);
    // let temp = Array.from(answer, x => 0);
    var answer = []
    
    let middle = parseInt(total / num);
    console.log(middle); // 4
    for(let i = middle - parseInt(num / 2.005); i < middle - parseInt(num / 2.005) + num; i++){
        answer.push(i);
    }
    
    return answer;
}