
// declaration 

let likes = document.getElementsByClassName('like')
let minus = document.querySelectorAll('.minus-btn')
let plus = document.querySelectorAll('.plus-btn')
let parent = document.querySelector(".items");
let child = document.querySelectorAll('.Item');
let number = document.querySelectorAll('.Quant')
let finalPrice = document.getElementById('finalPrice')
let prix = document.getElementsByClassName('price')

updateTotal()

// changing heart color

for (let i = 0; i < likes.length; i++) {
    likes[i].addEventListener('click', function () {
        if (likes[i].style.color == 'red') {
            likes[i].style.color = 'black'
        } else likes[i].style.color = 'red'
    })
}

// decrementation

for (let i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', () => min(i))
}

function min(i) {
    if (number[i].value > 1) {
        number[i].value--
        updateTotal()
    }
}

// incrementation

for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', () => add(i))
}

function add(i) {
    number[i].value++
    updateTotal()
}

// remove product

let remove = document.getElementsByClassName('delete')
for (let i = 0; i < remove.length; i++) {
    remove[i].addEventListener('click', function () {
        parent.removeChild(child[i]);
        updateTotal()
    })
}

// update somme de prix

function updateTotal() {
    let number = document.getElementsByClassName('Quant')
    let prix = document.getElementsByClassName('price')
    let totalPrice = 0
    for (let i = 0; i < number.length; i++) {
        totalPrice += parseInt(number[i].value) * parseFloat(prix[i].innerText)
    }
    finalPrice.value = totalPrice
}