function solution(array) {
    var answer = 0;
       
    let cnt = 0;
    let repeat = [];
    
    array.sort((a, b) => a - b);
    
    console.log(array);
    
    for(let i = 0; i < array.length; i++){
        if(array[i] === array[i+1]){
            cnt++;
            repeat[i] = cnt;
        } else {
            cnt++;
            repeat[i] = cnt;
            cnt = 0;
        }
    }
    console.log(repeat);
    
    let max = 0;
    
    for(let i = 0; i < repeat.length; i++){
        max = repeat[i] > repeat[max] ? i : max;
        console.log(i);
    }
    console.log(max);
    
    repeat.sort((a, b) => b - a);
    console.log(repeat);
    
    if(repeat[0] === repeat [1]){
        return -1;
    } else if (array.length === 1){
        return array[0];
    } else {
        return array[max];
    }
}
    
//     for(let i = 0; i < repeat.length-1; i++){
//         max = repeat[i] >= repeat[i+1] ? repeat[i] : repeat[i+1];
//     }
    
//     let max_cnt = 0;
    
//     for(let i = 0; i < repeat.length; i++){
//         if (repeat[i] % max === 0){
//             max_cnt++;
//         }
//     }
    
//     if(max_cnt > 1){
//         return -1;
//     }
    
    // answer = max;
    // return answer;
    