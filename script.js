let gridContainer = document.getElementById('grid__container')
let givenRC = 16

let createGrid = (gridNum) => {
  let col = gridNum
  while (col > 0) {
    let newColDiv = document.createElement('div')
    newColDiv.className = 'col__div'
    gridContainer.appendChild(newColDiv)
    let row = gridNum
    while (row > 0) {
      let newRowDiv = document.createElement('div')
      newRowDiv.className = 'row__div'
      newRowDiv.style.height = `${400 / gridNum}px`
      newRowDiv.style.width = `${400 / gridNum}px`
      newColDiv.appendChild(newRowDiv)
      row--
    }
    col--
  }
}

createGrid(givenRC)

let gridInput = () => {
  givenRC = document.getElementById('grid__value').value
  gridContainer.innerHTML = ''
  createGrid(givenRC)
}

let colorInput = () => {
  console.log(document.getElementById('color__value').value)
}

let allRowElements = document.getElementsByClassName('row__div')

let mouseClick = false
window.onmousedown = function (e) {
  if (e.button === 0) {
    mouseClick = true
  }
}
window.onmouseup = function () {
  mouseClick = false
}

for (var i = 0; i < allRowElements.length; i++) {
  allRowElements[i].onmouseover = () => {
    if (mouseClick) console.log('hallo')
  }
}
