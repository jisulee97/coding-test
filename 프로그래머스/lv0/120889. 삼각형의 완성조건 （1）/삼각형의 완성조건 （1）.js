function solution(sides) {
    let triangle = sides.sort();
    if(triangle[2] < triangle[0]+triangle[1]){
        return 1;
    }
    return 2;
}