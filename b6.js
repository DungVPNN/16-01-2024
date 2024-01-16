let a = [1,5,-3,-6,5,11,6,5];
let b = [];
for(let i = 0; i < a.length; i++){
    if(a[i] < 0){
        b.unshift(a[i])
    }
    if(a[i] > 0){
        b.push(a[i]);
    }
}
console.log(b);
