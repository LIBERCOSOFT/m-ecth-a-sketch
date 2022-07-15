let gridContainer = document.getElementById('grid__container')

let col = 16
while (col > 0) {
  let newColDiv = document.createElement('div')
  newColDiv.id = 'col__div'
  gridContainer.appendChild(newColDiv)
  let row = 16
  while (row > 0) {
    let newRowDiv = document.createElement('div')
    newRowDiv.id = 'row__div'
    newColDiv.appendChild(newRowDiv)
    row--
  }
  col--
}
