


var err1 =new RangeError("please add numbers")

var err2 =new RangeError("add numbers only ")

function add (){
    var sum =0 
    try{

        if(arguments.length===0){

            // err1.message = "please add numbers"
            throw err1
        }
        else{
            for (i=0; i<arguments.length; i++){

                if(isNaN(arguments[i])){
                    // err2.message="add numbers only "
                    throw err2
                }
                else{

                    sum += arguments [i]
                }
            }
        }
    }
    catch (error){

        console.log(error)
    }
}
