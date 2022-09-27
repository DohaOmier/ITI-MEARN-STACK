var x = document.getElementById("input");

var err1 = newError ("the number is bigger than");

var err2 = newError ("the number is smaller than");

function add (){

    var y = x,value
    try {

        if (y>100){

            throw err1
        }
        else if (y<1){

            throw err2
        }
    }
    catch (error){
        console.log(error.message)
    }
    finally{
        document.getElementById("num")
    }
}