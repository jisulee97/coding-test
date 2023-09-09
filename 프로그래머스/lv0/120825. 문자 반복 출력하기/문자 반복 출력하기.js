function solution(my_string, n) {
    let answer = '';
    for(let i = 0; my_string.length > i; i++){
        for(let j = 0; n>j;j++){
            answer += my_string.charAt(i)
        }
    }

    return answer;
}