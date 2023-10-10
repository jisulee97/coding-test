function solution(num_list) {
    let mult = num_list.reduce((a,b) => a+b, 0) ** 2;
    let sum = num_list.reduce((a,b) => a*b, 1);
    if (sum < mult ) return 1;
    else return 0;
}