var NameInput =document.getElementsByTagName("input")[0];
var AgeInput =document.getElementsByTagName("input")[1];

function login (){
var myDate = new Date();
myDate.setMonth(myDate.getMonth()+1);

    document.cookie ="userName =" + NameInput.value + ";expires=" + myDate;
    document.cookie ="Age=" +  AgeInput.value + ";expires=" + myDate;

    document.write(
            "Hallo : " +
             document.cookie.split(";")[0].split("=")[1] +
             " <br> <br> The Age is " +
             document.cookie.split(";")[1].split("=")[1]
        
        ); 
};
    function getAllcookies(){
        var allofcookies =[]
        var keyValCookies =document.cookie.split(";");

        for (i = 0; i<keyValCookies.length; i++){
            allofcookies[keyValCookies[i].split("=")[0].trim()]=
            keyValCookies[i].split("=")[1];
        }
        return allofcookies;
    }


            function getCookie(cookieName) {
                var all = getAllcookies();

                for(i in all){

                    if(i == cookieName)  return all[i]
                }
                
            }
    
            
            function deleteCookies(cookieName) 
            {
        
                var all = getAllcookies();
                for (i in all){

                    if(i == cookieName){

                        document.cookie = i + "=;expires =10/11/2019"
                    }
                }
            }

