function solution(emergency) {
    var answer = [];
       
    
    let emer = [...emergency].map(element => element + 100).sort((a,b) => a-b);
    // console.log(emer);
    
    let res = [...emergency].map(element => element + 100);
    // console.log(res);
    
    let cnt = res.length;
    
    for(let i in emer){
        for(let j in res){
            if(emer[i] === res[j]){
                res[j] = cnt;
                cnt--;
            }
        }
    }
    
    return res;
}