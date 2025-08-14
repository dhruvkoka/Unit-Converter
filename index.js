/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
let convertBtn=document.getElementById("convertBtn")
let inputNum=document.getElementById("inputNum")
let length=document.getElementById("length")
let volume=document.getElementById("volume")
let weight=document.getElementById("weight")


convertBtn.addEventListener("click",function(){
    length.innerHTML=`${inputNum.value} meters = ${inputNum.value*3.281} feet |  ${inputNum.value} feet = ${inputNum.value/3.281} meters`

})