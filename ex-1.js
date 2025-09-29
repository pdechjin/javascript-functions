//ให้เขียนโปรแกรมตามโจทย์ที่กำหนดดังนี้
//ให้ Declare ฟังก์ชัน add ลงในโค้ดโดยที่
//Declare ฟังก์ชัน add ในรูปแบบของ Declaration
//ฟังก์ชัน add รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
//ฟังก์ชัน add จะ Return ผลลัพธ์ออกมาเป็น ผลรวมของ a และ b
//เช่น ถ้า Execute add(10, 5) จะได้ผลลัพธ์ออกมาเป็น 15
//ให้ Declare ฟังก์ชัน subtract ลงในโค้ดโดยที่
//Declare ฟังก์ชัน subtract ในรูปแบบของ Declaration
//ฟังก์ชัน subtract รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
//ฟังก์ชัน subtract จะ Return ผลลัพธ์ออกมาเป็น ผลลบระหว่าง a และ b
//เช่น ถ้า Execute subtract(10, 5) จะได้ผลลัพธ์ออกมาเป็น 5
//ให้ Declare ฟังก์ชัน multiply ลงในโค้ดโดยที่
//Declare ฟังก์ชัน multiply ในรูปแบบของ Declaration
//ฟังก์ชัน multiply รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
//ฟังก์ชัน multiply จะ Return ผลลัพธ์ออกมาเป็น ผลคูณระหว่าง a และ b
//เช่น ถ้า Execute multiply(10, 5) จะได้ผลลัพธ์ออกมาเป็น 50
//ให้ Declare ฟังก์ชัน divide ลงในโค้ดโดยที่
//Declare ฟังก์ชัน divide ในรูปแบบของ Declaration
//ฟังก์ชัน divide รับ Parameter 2 ตัวคือ a มีชนิดข้อมูลเป็น Number และ b มีชนิดข้อมูลเป็น Number
//ฟังก์ชัน divide จะ Return ผลลัพธ์ออกมาเป็น ผลหารระหว่าง a และ b
//เช่น ถ้า Execute divide(10, 5) จะได้ผลลัพธ์ออกมาเป็น 2

// Start coding here

// Initial value of Number 1 and Number 2
let Number1 = 10
let Number2 = 5
// Add Function 
{
function add (Number1,Number2){
    return Number1+Number2
}
console.log("Add Function ",Number1,"and",Number2,"=",add(Number1,Number2))
}
;// Subtrack Function
{
function  subtract(Number1,Number2){
    return Number1-Number2
}
console.log("Subtrack Funtion ",Number1, "and", Number2,"=",subtract(Number1,Number2))
}
;// Multiply Function
{
function  multiply(Number1,Number2){
    return Number1*Number2
}
console.log("Multiply Function ",Number1,"and",Number2,"=",multiply(Number1,Number2))
}
;// Divide Function
{
function  divide (Number1,Number2){
    return Number1/Number2
}
console.log("Devide Function ",Number1,"and",Number2,"=",divide(Number1,Number2))
};






//const calculator = {
  //add: (Number1, Number2) => Number1 + Number2,
  //subtract: (Number1, Number2) => Number1 - Number2,
  //multiply: (Number1, Number2) => Number1 * Number2,
  //divide: (Number1, Number2) => Number1 / Number2
//};



//function add(a, b) { return a + b; }
//function subtract(a, b) { return a - b; }
//function multiply(a, b) { return a * b; }
//function divide(a, b) { return a / b; }

//const add = (a, b) => a + b;
//const subtract = (a, b) => a - b;
//const multiply = (a, b) => a * b;
//const divide = (a, b) => a / b;
