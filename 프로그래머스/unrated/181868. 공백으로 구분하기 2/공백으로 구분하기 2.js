function solution(my_string) {
    let answers = my_string.split(" ");
    return answers.filter(answer => answer !== "")
}