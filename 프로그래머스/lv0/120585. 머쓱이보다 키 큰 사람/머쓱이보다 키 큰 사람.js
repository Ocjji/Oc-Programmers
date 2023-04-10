function solution(array, height) {
    var answer = 0;
    
    for(let item of array){
        if(item > height){
            answer++;
        }
    }
    
    return answer;
}