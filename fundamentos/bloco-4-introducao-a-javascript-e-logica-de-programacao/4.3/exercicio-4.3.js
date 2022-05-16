//Programa 1
function programa1(num){
    let sum = num
    for(let i = num-1; i>0;i-=1){
        sum = sum * i
    }return sum
}console.log(programa1(5))