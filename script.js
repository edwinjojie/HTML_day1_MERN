a=8;
var b=8;
let g=23;
{
  a=23;
  let g=3;
  //let g=55;
 // console.log(g);
}
//console.log(g);
//objects
// let person={
//   name:'edwin',
//   age:20,
//   loctn:'trvm'
// }
// console.log(person.name);
// let arr=[1,2,3];
// console.log(arr[1]);
// ar_obj=[{name:'edwin',age:22,location:'trvm'},{name:'ej',age:11,location:'trvm'}];
// console.log(arr_obj[1]);
// function add(a,b){
//   var sum=a+b;
//   return sum;
// }
// let c=console.log(add(5,3));
// if(c>0){
//   console.log("positive number");
// }
// else if(c==0){
//   console.log(is zero);
// }
// else{
//   console.log("kooi");
// }
arr2=[1,2,3];
for(let i=0;i<arr2.length;i++)
{
  console.log(arr2[i]);

}
for(const i in arr2)
{
  console.log(arr2[i]);
}
for(const i of arr2)
{
  console.log(i);
}
