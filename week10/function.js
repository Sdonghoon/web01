//alert(add(90,120)); // 함수선언은 hoisting으로 제일 위로 올라가서 잘 됨
//alert(m(80,10)); //  m은 단순한 수식선언이라서 hoistiong이 되지 않음

// function add(v1, v2)
// {
//     return v1 + v2;
// }
// //console.log("함수호출" + add(10,30));

// const m = function(x1, x2){ // 그냥 수식
//     return x1 * x2;
// }

//console.log(m(9,8));

//hoisting는 변수선언이나 함수선언은 제일 위로 올림

// function f(x)
// {
//     fact = 1;
//     for(i = 1; i <= x; i++)
//     {
//         fact *= i;
//     }
//     return fact;
// }
//alert(f(5));

let fx = function(aa){
    fact = 1;
    for(i= 1; i <= aa; i++){
        fact *= i;
    }
    return fact;
}
alert(fx(5));