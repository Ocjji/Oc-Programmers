function solution(array, n) {
    var answer = 0;
    
    for(let item of array){
        if(item === n)
            answer++;
    }
    
    return answer;
}