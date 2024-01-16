let a = [1,2,3];
let found = false;
let s= 1;
for(let i = 0; i < a.length; i++){
    if(a[i] > 0 && a[i] < s){
        s = a[i];
    }
    if(a[i] === s){
        found = true;
    }
}
if(!found){
    console.log(s);
}
else{
    s++;
    console.log(s);
}