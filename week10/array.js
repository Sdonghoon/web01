const a = [10, 30, 50, 100, 70]; // 배열을 선언하고 초기화
const b = new Array(60, 80, 90, 20); // 배열을 선언하고 초기화
//console.log(a);
//console.log(b);

let sum = 0;
for(let i=0; i <a.length; i++)
{
    sum += a[i];
}
console.log('합 =' + sum);

for(let val of b) // <-- 꼭 알아둘 것
{
    console.log(val);
}
/*배열 조작하는 메소드*/
b.push(300); // 맨 뒤에 index 추가
console.log(b);
b.push(500);
console.log(b);
 
b.pop(); // 맨 뒤에 index 삭제
console.log(b);
b.unshift(77); // 맨 앞에 index 추가 <-- 실행속도가 느림
console.log(b);
//b.shift(); // 맨 앞에 index 삭제 <-- 실행속도가 느림
//console.log(b);
console.log(b.indexOf(90)); // 해당하는 값의 인덱스를 찾아줌
console.log(b.includes(80)); // 해당하는 값이 배열에 있으면 true 없으면 false
if(b.includes(70) == false)
{
    b.push(70);
}
console.log(b);