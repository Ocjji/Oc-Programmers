function solution(quiz) {
    var answer = [];
    let temp = [];
    temp = quiz.map((element) => element.split(' '));
    // console.log(temp);    
    answer = temp.map((element) => {
        if(element[1] == '+'){
            if(element[0]*1 + element[2]*1 == element[4]*1){
                return 'O';
            } else {
                return 'X';
            }
        } else if (element[1] == '-') {
            if(element[0]*1 - element[2]*1 == element[4]*1){
                return 'O';
            } else {
                return 'X';
            }
        }
    });
    return answer;
}