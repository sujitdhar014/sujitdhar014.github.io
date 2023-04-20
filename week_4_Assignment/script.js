var names=new Array();
names[0]="Sam";
names[1]="David";
names[2]="Jason";
names[3]="Oliver";
names[4]="James";
names[5]="Sam";
names[6]="jain";
names[7]="Ava";
names[8]="Lucas";
names[9]="Henry";

for(var i=0; i<names.length; i++){
    if(names[i].charAt(0)==='J'||names[i].charAt(0)==='j'){
        console.log("Goodbye " + names[i])
    }
    else{
        console.log("Hello "+ names[i])
    }

    // console.log(names[i]);
}   