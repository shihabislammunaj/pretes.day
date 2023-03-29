const secarhInput =document.querySelector(".search");

const display =document.querySelector(".result");

const thanks =document.querySelector(".thanks");

// function show(){
//   display.innerHTML =this.value;
//   var self =this
//   setTimeout(function (){
//     thanks.innerHTML=`You Have thped : ${self.value}`;
//     },1000);
// }
 

secarhInput.addEventListener("keyup",()=>{
  display.innerHTML=this.value;
});