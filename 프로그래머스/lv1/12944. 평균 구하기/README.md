# [level 1] 평균 구하기 - 12944 

[문제 링크](https://school.programmers.co.kr/learn/courses/30/lessons/12944) 

### 성능 요약

메모리: 33.4 MB, 시간: 0.04 ms

### 구분

코딩테스트 연습 > 연습문제

### 채점결과

Empty

### 문제 설명

<p>정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.</p>

### 풀이법
1. sum 이라는 변수를 지정하여 0으로 초기화(배열의 합을 구하기 위해)
2. for문을 사용하여 i 라는 변수를 지정 후 배열의 길이를 이용하여 배열이 길이만큼의 합을 구하도록 설정
3. sum 이라는 변수에 배열 하나하나의 값을 가져와서 더함
4. 더한 값을 배열의 길이(개수) 만큼으로 나누어 결과 도출

<h4>제한사항</h4>

<ul>
<li>arr은 길이 1 이상, 100 이하인 배열입니다.</li>
<li>arr의 원소는  -10,000 이상 10,000 이하인 정수입니다.</li>
</ul>

<h4>입출력 예</h4>
<table class="table">
        <thead><tr>
<th>arr</th>
<th style="text-align: center">return</th>
</tr>
</thead>
        <tbody><tr>
<td>[1,2,3,4]</td>
<td style="text-align: center">2.5</td>
</tr>
<tr>
<td>[5,5]</td>
<td style="text-align: center">5</td>
</tr>
</tbody>
      </table>

> 출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges
