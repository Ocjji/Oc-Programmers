function solution(s) {
    var answer = false;
    for(let item of s){
        if(isNaN(item)){
            return false;
        }
    }
    
    if(s.length === 4 || s.length === 6) {
        answer = true;
    }
    
    return answer;
}