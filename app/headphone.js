//////////////////////////////
// increase or decrease porudct amount

const increamentBtn = document.querySelector('#increment')
const decreamentBtn = document.querySelector('#decrement')
const quantityBtn = document.querySelector('#quantity')
let amount = 1

increamentBtn.addEventListener('click', () => {
    amount++
    quantityBtn.textContent = amount
})

decreamentBtn.addEventListener('click', () => {
    amount--
    if (amount < 1) {
        amount = 1
        return
    }
    quantityBtn.textContent = amount
})