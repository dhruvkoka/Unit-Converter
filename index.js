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
    if (isNaN(inputNum.value)){
        length.innerHTML="Please enter a valid number"
        volume.innerHTML="Please enter a valid number"
        weight.innerHTML="Please enter a valid number"
    }
    else{
        length.innerHTML=`${inputNum.value} meters = ${(inputNum.value*3.281).toFixed(3)} feet |  ${inputNum.value} feet = ${(inputNum.value/3.281).toFixed(3)} meters`
        volume.innerHTML=`${inputNum.value} liter = ${(inputNum.value*0.264).toFixed(3)} gallons |  ${inputNum.value} gallons = ${(inputNum.value/0.264).toFixed(3)} liters`
        weight.innerHTML=`${inputNum.value} kilograms = ${(inputNum.value*2.204).toFixed(3)} pounds |  ${inputNum.value} pounds = ${(inputNum.value/2.204).toFixed(3)} kilograms`
    }
})