function solution(n)
{
    var answer = 0;

    let temp = n;
    
    while(temp > 0){
        answer = answer + (temp % 10);
        temp = parseInt(temp / 10);
    }
    
    // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
    console.log('Hello Javascript')

    return answer;
}