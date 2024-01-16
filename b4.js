let a = parseInt(prompt("Nhập a"));
let b = parseInt(prompt("Nhập b"));
let c = [];
for(let i = 1; i <= a || i <= b; i++){
    if(i % a === 0 || i % b === 0){
        c.push(i);
    }
}
console.log("Các số chia hết cho a hoặc b từ 1 đến a hoặc b là: ");
console.log(c)