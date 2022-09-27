

var error1 = RangeError("the number bigge than rang");
var error2 = RangeError("the number smaller than rang");


var i= document.getElementById("number");

function add(){
  var x= i.value
  try{
    if(x>100){
      throw error1;
    }
    else if (x<1) {
     throw error2;
    }
  }
  catch (x){
    console.log(x.message)
  
  }
  finally{
    document.write("your number is  : " + x )
  }
 
}