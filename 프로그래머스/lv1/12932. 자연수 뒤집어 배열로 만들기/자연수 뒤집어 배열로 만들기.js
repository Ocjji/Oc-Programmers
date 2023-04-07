function solution(n) {
    var answer = [];
    
    for(let i = 0; 0 < n;i++){
        answer[i] = n % 10;
        n = parseInt( n / 10 );
    }
    
    return answer;
}