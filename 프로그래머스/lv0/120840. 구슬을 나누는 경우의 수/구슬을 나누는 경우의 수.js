function solution(balls, share) {
    var answer = 1;
    let res_ja = 0;
    let res_mo = 0;
    
    res_ja = ja(balls, share);
    res_mo = ja(share, share);
    
    answer = parseInt(res_ja / res_mo);
    
    return answer;
}

let ja = (bl, sh) => {
    if(sh === 0){
        return 1;
    } else {
        return bl * ja(bl-1, sh-1);
    }
}