
var i = document.getElementById("number");


var error1 = RangeError("the number bigge than rang");


function add()
  {  var x = i.value
    if(x>100){
      error1.message="the number >100"
        throw error1
    }
    else if (x<1) {
      error1.message="the number less than 1"
     throw error1;
    }
}
onerror=function  (url,line,msg,err,col) {
    
    console.log(url)
    console.log(line)
    console.log(msg)
    console.log(err)
    
}
