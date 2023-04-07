function solution(arr, divisor) {
    var answer = [];
    let count = 0;
    for(let item of arr){
        if(item % divisor === 0){
            answer.push(item);
            count++;
        }
    }
    
    answer.sort(function(a,b){
        if(a>b){
            return 1;
        } else if(a<b){
            return -1;
        } else {
            return 0;
        }
    });
    if(count === 0){
        answer.push(-1);
    }
    
    return answer;
}