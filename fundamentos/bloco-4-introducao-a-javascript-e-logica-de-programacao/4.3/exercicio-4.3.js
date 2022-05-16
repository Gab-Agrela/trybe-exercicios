//Programa 1
function programa1(num){
    let sum = num
    for(let i = num-1; i>0;i-=1){
        sum = sum * i
    }return sum
}//console.log(programa1(5))

//----------------------------------

//Programa 2
function programa2(word){
    let newStr = ""
    for(let i =word.length-1; i>=0;i-=1){
        newStr = newStr + word[i]
    }return newStr
}//console.log(programa2('tryber'))

//----------------------------------

//Programa 3
function programa3(array){
    
    return array.reduce((r,d)=> d.length > r.length ? r=d : r=r , r=array[0])
}//console.log(programa3(['java', 'javascript', 'python', 'html', 'css']))

//----------------------------------------------------------------------------------

//Programa 4
function programa4(array){
    
    return array.reduce((r,d)=> d.length < r.length ? r=d : r=r , r=array[0])
}//console.log(programa4(['java', 'javascript', 'python', 'html', 'css']))

//---------------------------------------------------------------------------------

//Programa 5
function programa5(n){
    let bol = false
    let primo = 0   
    for(let index = 2; index <=n ; index+=1){
        for(let i = 2; i<index; i+=1){
            if(index%i===0){
               bol = false
               break
            }bol =  true
        }if(bol === true){
            primo = index
        }
            
    }
        
return primo
}//console.log(programa5(50))