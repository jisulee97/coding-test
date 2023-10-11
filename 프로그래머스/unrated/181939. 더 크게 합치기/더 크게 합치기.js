function solution(a, b) {
    let sum1 = String(a) + String(b);
    let sum2 = String(b) + String(a);
    if(sum1 > sum2) {
        return Number(sum1);
    } else if( sum1 < sum2){
        return Number(sum2);
    } else if(sum1 === sum2){
        return Number(sum1);
    }
}