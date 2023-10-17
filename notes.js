// An array is a data structure stores multiple values in a single variable.//
const vegetables=['carrots','cabbage','lettuce'];
console.log(vegetables)
// vegetables[0] gets the first element of the array. Vegetables[1] gets the second element of the array

let array_number = [10,20,30,40]
array_number.push(50)
console.log(array_number)
// 'arrayname''.push' adds an element to an array
array_number.pop()
//'Array name'' .pop.' removes the element at the end of the array.
 
// .Unshift adds to the front of the array, shift removes from the front of the array.

// .Splice can add or remove anywhere in the array.

vegetables.splice(1,1) //  removes 1st place{2nd elemnt}, 1 item
console.log('\nAfter Slice:\n',vegetables)

vegetables.splice(1,1,'brocoli')
console.log('\nAfter Slice:\n',vegetables)

//.Slice 

let nums =[0,1,2,3,4,5,6,7]
console.log(nums.slice(4,7))
console.log(nums)

