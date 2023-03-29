var numbers =[1,2,3,4,5,6];
var sum =numbers.reduce((prevalue, currentValue, curentIndex,arr)=>{
 return  prevalue + currentValue;
},0);
console.log(sum)