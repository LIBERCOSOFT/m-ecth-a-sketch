let gridContainer = document.getElementById('grid__container')

let col = 16
while (col > 0) {
  let newColDiv = document.createElement('div')
  newColDiv.className = 'col__div'
  gridContainer.appendChild(newColDiv)
  let row = 16
  while (row > 0) {
    let newRowDiv = document.createElement('div')
    newRowDiv.className = 'row__div'
    newColDiv.appendChild(newRowDiv)
    row--
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
  allRowElements[i].onmouseover = () => {
    if (mouseClick) console.log('hallo')
  }
}
