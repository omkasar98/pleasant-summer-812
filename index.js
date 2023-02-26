let navlist = document.querySelector('.navList');
let dropDown =document.querySelector(".dropDown");
let closeDropdown =document.querySelector('.close');
let signInModel = document.querySelector('.signIn_model');
let signInBtn = document.querySelector('.signbtn');
let signInClose = document.querySelector(".signInClose");

navlist.addEventListener('click', function(e){
    dropDown.style.height="700px"
    let listName = e.target.textContent;
    console.log(listName)
} )

closeDropdown.addEventListener("click", function(e){
    dropDown.style.height="0px"
})

signInBtn.addEventListener("click", function(){
    signInModel.style.display="block"
})
signInClose.addEventListener("click", function(){
    signInModel.style.display="none"
})