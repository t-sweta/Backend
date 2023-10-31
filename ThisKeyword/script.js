//non.strrict mode
console.log(this); //not defined in any method or anywhere hence u will get a global object
function foo(){
  // return this;  a
  console.log(this);         //b
  console.log(this.firstName+" "+this.lastName);
}
// console.log(foo());//this will also point to window object     a
let obj = {
  firstName : "John",
  lastName : "xyz",
  fun:foo
}
let obj1 = {
  firstName: "shreya",
  lastName: "thakur",
  fun: foo

}
// obj.fun();   //objecct k through call karenge function ko,this ki value obj ho gyi,jis bhi obj k thrugh calll kr rkha hoga uski value store ho jaegi in js        b
//oopr this jo hai obj objecct mei store ho gaya 
// obj1.fun(); 
//IMPILCIT bijnding mein obj k andr bar baar fun daalna parta hai but no tin the case of exolicit binding                                                 b
//increases the usability of any function ***


//EXPLICIT BINDING
function getAge(name){
  console.log(name);
  console.log(this.name);
  console.log(this.age);
}
let obj2 = {
  name: "xyz",
  age: 22
}
let obj3 = {
  name: "xbz",
  age: 22
}
let obj4 = {
  name: "ssz",
  age: 29
}
// 1.call();
// getAge funciton ko kis obj k through pass karana hai vo likhna hai parantheis mein         c
// getAge.call(obj2);
// getAge.call(obj3);
// getAge.call(obj4);
// getAge.call(obj2);
// getAge.call(obj3,"chameli");
// getAge.call(obj4,"jhonny walker");


// 2.Apply   one can pass array here unike call
let arr =["cricket","football","hockey"];
getAge.apply(obj2,arr);
function getAge(a,b,c){
  console.log(a,b,c);
  console.log(this.name);
  console.log(this.age);

}


// when u dont know how many arguments will be there inthe fucntion then use erst/spread oprator
// 4.spead/rest
getAge.apply(obj2,arr);
function getAge(...args){  
  // console.log(args[0],args[1],args[2]);                        4
  // console.log(this.name);                   4
  console.log(this.age);

}

// 5.bind   same as call but it returns a funciton and this ki value obj2 k sath bind kr dee hai
// same as call
// function foo2(cb){
//   cb();
// }
// foo2(getAge);global window ho jaaega agr sirrf intan kiya to
 let xyz = getAge.bind(obj2);          
 console.log(xyz());
//  the fucntio returned can be used later
// hw2 callback se return karwaana hai
//ans hw window obj
//5.new
function fun(name,age){
  this.name=name;
  this.age=age;
}
// this will point to the new object
let object = new fun("shibham",20);
console.log(object);




