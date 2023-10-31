let obj = {
  name:"shubham",
  age:20,
  fun:()=>{
    console.log(this);   //window obj, since lexical scope mein htis ki binding nhi ho rkhi to global scope mein jaak ,window obj uthaa lega
  }
}
obj.fun();
// arrow functio k andr this ki binfing nhi ho paati

let obj2 = {
  name:"shubham",
  age:20,
  foo: function(){
    let fun=()=>{
      console.log(this);   //window obj, since lexical scope mein htis ki binding nhi ho rkhi to global scope mein jaak ,window obj uthaa lega
    }
    fun();

  }
  
}
obj.foo();
// arrow functio mein ths ki binding nhi hoti,to vo lexical scope ki value utha leta hai thiss i nhi to global value
// in the above code yha ye function k paas jaaegi this k liye,and function mein obj2 ki value ho jaegi this ki value
// NOTE:NEVER MAKE AN ARROW FUCNTIO INSIDE AN OBJECT
// JIS BHI EVENT PE THIS LAGAAO TO ,KISI BHI EVENT PE KUCH TRIGGER HUA TO VO ELEMENT KI VALUE AA JAATA HAI
// LIKE;this.click.add(),jispe bhi click karenge uspe m add kr skte hai
