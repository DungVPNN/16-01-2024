let a = [1, 2, 3, 4];
let b = parseInt(prompt("Nhap"));
let  found = false;
for (let i of a) {
    if ( a[i] === b){
        console.log(`Vi tri:${i}`);
        found = true;
    }
}
 if ( !found){
    console.log("Khong ton tai");
}