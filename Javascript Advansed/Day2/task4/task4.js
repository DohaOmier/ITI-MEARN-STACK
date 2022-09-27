function rectangle(wd, hg){
    this.width = wd ;
    this.height = hg ;
 
    this.area = function(){
        return(wd*hg)
    };
    this.perimeter = function(){
        return ((wd+hg)*2)
    };


        this.displayinfo =function(){
            return{
                wd : width ,
                hg : height,
                perimeter : this. perimeter(width,height),
                 area :this.area(width,height)

            }
        };   };

        
        var x = new rectangle(4,5)
        

