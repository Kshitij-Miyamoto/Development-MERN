let arr = ["kshitij" , "salu" , "9-Para" , "Gowardhan" , "India"]
arr.forEach(function(item , index){
    console.log(`The value is  ${item} at the index ${index}`)
})
//You cannot return anything, you can only do looping !


//This is basically Map(), which is used to transform an array
let nums = [1, 2, 3, 4, 5, 6, 7]
//Ok so here we can also modify things or elements here.
let newnums = nums.map(function(item){
    return item*item 
})
console.log(nums);
console.log(newnums);

//Now using filter(), which is used to basically filter out and an array, it also accepts callback function
let marks = [1 ,2, 3, 4, 5, 6, 7, 8, 9, 10]

let filterarray = marks.filter(function(item){
    if(item >= 5){
        return true ; 
    }
    return false ; 
})
console.log(marks)
console.log(filterarray)