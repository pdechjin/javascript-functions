// Start coding here

//ให้เขียนโปรแกรมตามโจทย์ที่กำหนดดังนี้

//ทำต่อจาก Exercise #3
//ให้ Declare ตัว Object ที่ชื่อ calculator เพื่อรวบรวมฟังก์ชันที่เขียนจาก Exercise #3 ให้อยู่ใน Object โดยที่

//Object calculator จะมี Key เป็น add และมีค่าเป็นฟังก์ชัน add
//Object calculator จะมี Key เป็น subtract และมีค่าเป็นฟังก์ชัน subtract
//Object calculator จะมี Key เป็น multiply และมีค่าเป็นฟังก์ชัน multiply
//Object calculator จะมี Key เป็น divide และมีค่าเป็นฟังก์ชัน divide
//ให้ Declare ตัว Variable ที่มีชื่อว่า addResult

//ให้ Assign ค่าของ addResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน add ที่อยู่ใน Object calculator
//ต่อไปให้กำหนด Parameter a เป็น 10 และ b เป็น 20
//ให้แสดงค่าของ addResult ออกมาดูทางหน้าจอด้วย console.log
//ให้ Declare ตัว Variable ที่มีชื่อว่า divideResult

//ให้ Assign ค่าของ divideResult โดยที่มี Value เป็นผลลัพธ์จากการ Execute ของฟังก์ชัน divide ที่อยู่ใน Object calculator
//ต่อไป ให้กำหนด Parameter a เป็น 3000 และ b เป็น 10
//ให้แสดงค่าของ divideResult ออกมาดูทางหน้าจอด้วย console.log


let add = function add (Number1,Number2){return Number1 + Number2};
let subtract = function subtract (Number1,Number2){return Number1- Number2}
let multiply = function multiply (Number1,Number2) {return Number1 * Number2}
let divide = function divide (Number1,Number2) {return Number1 / Number2}

let addResult = add(10,20)
console.log ("Result add Function for addResult ", "=" , addResult)
let divideResult = divide (3000,10)
console.log (`Result divide Function for divideResult = ${divideResult} `)


let Number1 = 10
let Number2 = 5
// Add Function 
{
let add =  (Number1,Number2) => {
    return Number1+Number2
}
console.log("Add Function ",Number1,"and",Number2,"=",add(Number1,Number2))
}
;// Subtrack Function
{
let subtract = (Number1,Number2) => {
    return Number1-Number2
}
console.log("Subtrack Funtion ",Number1, "and", Number2,"=",subtract(Number1,Number2))
}
;// Multiply Function
{
let multiply = (Number1,Number2)=>{
    return Number1*Number2
}
console.log("Multiply Function ",Number1,"and",Number2,"=",multiply(Number1,Number2))
}
;// Divide Function
{
let divide = (Number1,Number2)=>{
    return Number1/Number2
}
console.log("Devide Function ",Number1,"and",Number2,"=",divide(Number1,Number2))
};
