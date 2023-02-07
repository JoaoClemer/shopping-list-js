const inpProd = document.getElementById('inpItens')
const inpPrice = document.getElementById('inpPrice')
const inpQuant = document.getElementById('inpQuant')
const ul = document.querySelector('ul')

let listProd = []

function addItem() {
    if (inpProd.value && (Number(inpPrice.value) >= 0.1) && (Number(inpQuant.value) >= 1)) {
        setInList()
        createCard()

    } else {
        alert('Insira informações validas!')
    }

}

function setInList() {
    listProd.push({ product: inpProd.value, price: Number(inpPrice.value), amount: Number(inpQuant.value) })
}

function clearAll() {
    listProd = []
}

function createCard() {
    let li = document.createElement('li')
    li.setAttribute("class", "divLi")

    const button = document.createElement('button')
    button.setAttribute("class", "delete")
    button.textContent = "x"

    li.innerHTML = `${inpProd.value} | ${inpPrice.value} | ${inpQuant.value}`

    li.appendChild(button)
    ul.appendChild(li)
}