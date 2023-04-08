function solution(s){
    var answer = true;

    let low_s = s.toLowerCase();
    let cnt_p = 0;
    let cnt_y = 0;
    
    for(let i = 0; i < low_s.length; i++){
        if(low_s[i] === 'p'){
            cnt_p++;
        } else if (low_s[i] === 'y'){
            cnt_y++;
        }  
    }
    return cnt_p === cnt_y ? true : false;
}