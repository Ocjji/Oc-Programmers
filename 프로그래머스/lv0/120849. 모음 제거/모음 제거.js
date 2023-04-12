function solution(my_string) {
    return my_string.replace(/[aeiou]/ig,'');
    // 정규식을 사용하여 문자열 내 중복 요소를 제거할 수 있다.
    // /ig 는 대소문자를 구분하지 않는다는 뜻이다. 
}