// Start coding here


//ให้ Refactor โค้ดในส่วนของฟังก์ชันที่เขียนจาก Exercise #1
//ให้ฟังก์ชันอยู่ในรูปแบบของ Arrow Function

// Initial value of Number 1 and Number 2
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

