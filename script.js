let gridContainer = document.getElementById('grid__container')
let givenRC = 16
let givenColor = document.getElementById('color__value').value

let createGrid = (gridNum) => {
  let col = gridNum
  let colIdentifier = 1
  while (col > 0) {
    let newColDiv = document.createElement('div')
    newColDiv.className = 'col__div'
    gridContainer.appendChild(newColDiv)
    let row = gridNum
    while (row > 0) {
      let newRowDiv = document.createElement('div')
      newRowDiv.className = 'row__div'
      newRowDiv.id = `cell${colIdentifier}`
      newRowDiv.style.height = `${400 / gridNum}px`
      newRowDiv.style.width = `${400 / gridNum}px`
      newColDiv.appendChild(newRowDiv)
      row--
      colIdentifier++
    }
    col--
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
    let id = allRowElements[i].id
    let targetElement = document.getElementById(id)
    targetElement.addEventListener('mouseover', function () {
      if (mouseClick) targetElement.style.backgroundColor = givenColor
    })
    targetElement.addEventListener('mousedown', function () {
      targetElement.style.backgroundColor = givenColor
    })
  }
}

createGrid(givenRC)

let gridInput = () => {
  givenRC = document.getElementById('grid__value').value
  gridContainer.innerHTML = ''
  createGrid(givenRC)
}

let colorMode = () => {
  givenColor = document.getElementById('color__value').value
}

let eraseInput = () => {
  givenColor = '#fff'
}

let clearInput = () => {
  let allRowElements = document.getElementsByClassName('row__div')
  for (var i = 0; i < allRowElements.length; i++) {
    allRowElements[i].style.backgroundColor = '#fff'
  }
}
