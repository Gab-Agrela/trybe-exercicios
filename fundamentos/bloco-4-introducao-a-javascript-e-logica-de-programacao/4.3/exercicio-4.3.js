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

//-----------------------------------

//Programa Bonus 1
function bonus1(n){
    let asterisco = '';
    for(let index = 0; index<n; index+=1){
        asterisco = asterisco + '*'
    }for(let index = 0; index<n;index+=1){
        console.log(asterisco)
    }
}//bonus1(3)

//------------------------------

//Programa Bonus 2
function bonus2(n){
    asterisco = ''
    for(let index = 0; index<n;index+=1){
        asterisco = asterisco + '*'
        console.log(asterisco)
    }
}//bonus2(5)

//------------------------------

//Programa Bonus 3
function bonus3(n){
    let contador = n-1
    let contador2 = 1
        for(let i=0; i<n;i++){
            console.log(' '.repeat(contador) + '*'.repeat(contador2))
            contador--
            contador2++
        }
}//bonus3(5)

//-------------------------------------------------------------------------

//Programa Bonus 4
function bonus4(n){
    let c1 = parseInt(n/2)
    let c2 = parseInt(n-2*c1)
        for(let i=2; i<=(n-parseInt(n/2)+1);i++){
            console.log(' '.repeat(c1) + '*'.repeat(c2) + ' '.repeat(c1))
            c1-=1
            c2+=2
        }
}//bonus4(7)

//-------------------------

//Programa Bonus 5
function bonus5(n){
    let c1 = parseInt(n/2)
    let c2 = parseInt(n-2*c1)
    let c3 = 1
    console.log(' '.repeat(c1) + '*'.repeat(c2) + ' '.repeat(c1))    
    for(let i=2; i<(n-parseInt(n/2));i++){
        c1= c1-1
        console.log((' '.repeat(c1) + '*'.repeat(c2) + ' '.repeat(c3) + '*'.repeat(c2) + ' '.repeat(c1) ))  
        
        c3 = c3+2
        
    }
    console.log('*'.repeat(n))   
}bonus5(9)