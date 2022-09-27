var x= + prompt("enter number");
var y= + prompt("enter number");
var z= + prompt("enter number");
var arr=[];
arr.push(x,y,z)
var oper =prompt("enter the  operator");
switch(oper){
    case "+":
        document.write("sum of the 3 values : " +arr[0]+arr[1]+arr[2]);
        break;
    case "*":
        document.write("multiplication of the 3 values : " +arr[0]*arr[1]*arr[2]);
    case "/":
        document.write( "division of the 3 values : " +arr[0]/arr[1]/arr[2]);
        default:
                document.write("No Number");
}