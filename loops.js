// For loops and While Loops are 2 types of loops.

//For Loop: initialization,condition,afterthought


for (let countDown=10;countDown>0; countDown=countDown-1){
	console.log ('T -',countDown)
}
console.log ('Time is up')

//While Loop: Loop through a block of code as long as a specified condition is met.

let num=5 ;
while(num<10){
	console.log (' Our current number is ' + num);
	num++
}
console.log('end of loop')

// Create an array of Random Numbers

//let random= math.random() * 100  a random number between 0 and 100

let numbers=[]

let randomN= Math.random()*1000
for( let start = 0; start<100; start++) {
	numbers.push(Math.random() * 100)
}
console.log(numbers)

function howManyNums(numArray){
    //can see how many elements via a loop
    for(let index=0;numArray[index]!= undefined; index++){
        length+=1
    }
   return length
    return numArray.length
}

function largestNum(numArray){
    let largest= numArray[0]    // assume this is the current largest
for(let index=0;index<)
}