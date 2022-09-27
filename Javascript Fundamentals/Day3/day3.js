

     var arr=[];
    for (i=0; i<5 ;i++){
        arr[i]= +prompt("enter your number");
    };
         document.write("u've entered the values of  : " +arr + "<br>");
        document.write("ur values after being sorted descending  : "+arr.sort(function(a,b){
            return a-b;
        })+"<br>");
        document.write( "ur values after being sorted ascending  : " +arr.sort(function(a,b){
            return b-a
        }));


         


   
    



