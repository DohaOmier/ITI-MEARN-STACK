function box(hg,wd,le,mt,con){
    this.height = hg
    this.width = wd
    this.length =le
    this.material = mt
    this.content = con

this .countBooks =function(){
    console.log(this.cont.length)

    this.deletBooks=function(del){
        for(i=0; i<this.cont.length; i++){

            if (this.content[i].titel==del){

                con.splice(i,1)
            }
        }

    }
}
var b1 =new box(5,10,3,"paper",[b1,b2,b3,]);

};
function books(tit,ch, au ,pg,pup,cop){
    this.titel = tit
    this.numofchapters = ch
    this.author = au
    this.numofpages = pg
    this.publisher = pup
    this.numofcopies =cop
};
var b1 =new books("dssg",2,"doha",50,"hassan",100)
var b2 =new books("kjhg",5,"ali",45,"mohsen",324)
var b3 =new books("aswe",7,"ahmed",88,"esmaiel",500)

    console.log(books.count);
