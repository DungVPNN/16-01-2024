let student1 = "Gia Thieu";
let student2 = "Duong ngu";
let student3 = "Vy buu";




let studentList = new Array(student1, student2, student3);
let numberList = [ 10, 20, 30,40];
console.log(studentList);
console.log(numberList);
let numbers = [10, 20, 30, 40];
numbers.length;
console.log("Do dai", numbers.length);
console.log("numbers[2]=", numbers[2]);
console.log("numbers[0]=", numbers[0]);

for ( let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}]=`, numbers[i]);
}
for (let number of numbers) {
    console.log("Tung phan tu", number);
}
for (let index in numbers) {
    console.log(`numbers[${index}]=`, numbers[index]);
}


let students = [
    "khanh huyen",
    "gia thieu",
    "duong ngu",
    "vy buu",
    "Assasin",
];
console.log("Danh sach sinh vien:", students);
students.unshift("Nam son");
console.log("New danh sach", students);
students.push("Asura")
console.log("New danh sach", students);
students.splice(2, 0, "Police");
console.log("Danh sach sv sau khi chen vi tri 2", students);   
students[2] = "Thieu cook";
console.log("Danh sach sau khi dc cap nhat", students);
students.splice(1, 1);
console.log("Danh sach sau khi dc xoa", students);


