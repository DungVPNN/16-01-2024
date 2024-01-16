let a = [];
let find = parseInt(prompt("Nhập số nguyên dương bất kì"));
let count = 0;
for(let i = 0; i < 20;i++){
    a[i] = Math.floor(Math.random() * 10) + 1;
}
for(let index in a){
    if(find === a[index]){
        count += 1;
    }
}
if(count === 0){
    console.log(`Trong mảng không tồn tại giá trị ${find}`);
}else{
    console.log(count);
}