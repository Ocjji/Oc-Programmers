function solution(n) {
    var answer = 0;
    
    if(Math.sqrt(n) % 1 !== 0){
        return -1;
    } else {
        return Math.pow(Math.sqrt(n)+1,2);
    }
}