let formEl = document.querySelector('form');

formEl.addEventListener('Submit' , function(e){
    e.preventDefault() //reload
    console.log(e.target.elements[0].value);
    console.log(e.target.elements[1].value);
    console.log('form submitted');
    
})