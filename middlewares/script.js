const express = require("express");
const app = express();
app.use(m1);
app.use(m3); 
app.use(m2);
// if m3 is called so m3 will run firsst

// middleware is a function,jis path pe request aati hai ,us path pe kuch funcitons chlte hai pehle joki middleare hote hai controller action se pehle
// controller action : (req,res) se leke end of the function tk
app.get('/',(req,res)=>{
  // this too is a middleware but we dont need to call next here
  console.log("running/");
  res.send("home");

})
app.get("/about",(req,res)=>{
  console.log("runnig about");
  res.send("about");
})
// function m1(){
//   console.log("running middleware 1");
// }
function m1(req,res,next){
  console.log("running middleware 1");
  next();
  // the next function calls the next middleware hence the flow is maintained,if nexxt() is not called then the function will stop at middle ware 1 only and the rs of the functions will not get exectuted;

}
function m2(req,res,next){
  console.log("middleware 2 is running");
  next();
}
function m3(req,res,next){
  console.log("running middleware 3");
  next();
}

app.listen(3333,()=>{
  console.log("server started");
  
})