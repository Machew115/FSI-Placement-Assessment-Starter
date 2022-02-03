let yourName = document.querySelector('#credit').innerHTML = 'Matthew Herrera' // HINT: Replace this with your own name!
// function for quanity display
function gingerBreadQuantity(displayQuantity) {
    let gingerQuantity = document.querySelector('#qty-gb')
    gingerQuantity.innerHTML = displayQuantity 
}
function chocochipQuantity(displayQuantity) {
    let chocoQuanity = document.querySelector('#qty-cc')
    chocoQuanity.innerHTML = displayQuantity
}
function sugarcQuantity(displayQuantity) {
    let sugarQuantity = document.querySelector('#qty-sugar')
    sugarQuantity.innerHTML = displayQuantity
}
function totalQuantity(displayQuantity) {
    let totalTableQuantity = document.querySelector('#qty-total')
    totalTableQuantity.innerHTML = displayQuantity
}
// We'll use these variables to track the counts of each cookie type
let gingerQuantity = 0 // Gingerbread
let chocoQuanity= 0 // Chocolate Chip
let sugarQuantity = 0 // Sugar Sprinkle
let totalTableQuantity = 0
// gingerbread button
const gbMinusBtn = document.querySelector('#minus-gb')
const gbPlusBtn = document.querySelector('#add-gb')
// chocolate cookie button
const ccMinusBtn = document.querySelector('#minus-cc')
const ccPlusBtn = document.querySelector('#add-cc')
// Sugar Sprinkle
const ssMinusBtn = document.querySelector('#minus-sugar')
const ssPlusBtn = document.querySelector('#add-sugar')

// Code to update name display
credit.textContent = `Created by ${yourName}`
// gingerbread event listeners
gbMinusBtn.addEventListener('click', function() {
    if(gingerQuantity > 0) {
    gingerQuantity--
    totalTableQuantity--

    }
    gingerBreadQuantity(gingerQuantity)
    totalQuantity(totalTableQuantity)
})
gbPlusBtn.addEventListener('click', function(){
    gingerQuantity++
    totalTableQuantity++
    gingerBreadQuantity(gingerQuantity)
    totalQuantity(totalTableQuantity)
})
// chocolate chip event listeners
ccMinusBtn.addEventListener('click', function() {
    if(chocoQuanity > 0) {
        chocoQuanity--
        totalTableQuantity--
    }
    chocochipQuantity(chocoQuanity)
    totalQuantity(totalTableQuantity)
})
ccPlusBtn.addEventListener('click', function() {
    chocoQuanity++
    totalTableQuantity++
    chocochipQuantity(chocoQuanity)
    totalQuantity(totalTableQuantity)
})
//sugar sprinkle event listener
ssMinusBtn.addEventListener('click', function(){
    if(sugarQuantity > 0){
        sugarQuantity--
        totalTableQuantity--
    }
    sugarcQuantity(sugarQuantity)
    totalQuantity(totalTableQuantity)
})
ssPlusBtn.addEventListener('click', function() {
    sugarQuantity++
    totalTableQuantity++
    sugarcQuantity(sugarQuantity)
    totalQuantity(totalTableQuantity)
})
