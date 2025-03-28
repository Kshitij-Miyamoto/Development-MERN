let arr = ["kshitij" , "salu" , "9-Para" , "Gowardhan" , "India"]
arr.forEach(function(item , index){
    console.log(`The value is  ${item} at the index ${index}`)
})
//You cannot return anything, you can only do looping !


//This is basically Map(), which is used to transform an array
let nums = [1, 2, 3, 4, 5, 6, 7]
let newnums = nums.map(function(item){
    return item*item 
})
console.log(nums);
console.log(newnums);
