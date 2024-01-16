let a = [ 1, 2, 3, "vi"];
for ( let i of a){
    if ( isNaN(i)){
        console.log("Khong ton tai so nguyen");
    }else{
        console.log(i);
    }
}