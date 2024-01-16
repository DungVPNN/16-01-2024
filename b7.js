let a = [1, 5 ,4 ,3 ,8 ,5 ,1 ,3];
const num = parseInt(prompt("Enter a number:"));
let start = 0, sum = 0;
for(let i = 0; i < a.length; i++) {
    sum += a[i];
    while (sum > num && start < i) {
        sum -= arr[start];
        start++;
    }
    if (sum === num) {
        console.log(`Array slice: ${a.slice(start, i + 1)}`);
        break;
    }
}
if (start === a.length) {
    console.log("Không có mảng con thỏa mãn");
}