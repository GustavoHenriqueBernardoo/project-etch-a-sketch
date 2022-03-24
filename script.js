const container = document.getElementById('container')
const grid_container = document.getElementById('grid-container')
const buttons_container = document.getElementById('buttons-container')

let square = 30
let defaultColor = 'black'

createSquare(square)

function createSquare(square) {
  let totalSquare = square * square
  for (let i = 0; i < totalSquare; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid_container.style.gridTemplateRows = `repeat(${square}, auto)`
    grid_container.style.gridTemplateColumns = `repeat(${square}, auto)`
    grid_container.insertAdjacentElement("beforeend", gridItem)
    // console.log(gridItem)
    gridItem.addEventListener('mouseenter', () => changeColor(gridItem))
  }
}


function changeColor(color) {
  color.style.backgroundColor = defaultColor
  if (selectColor) {
    color.style.backgroundColor = selectColor.value
  }
}

function clearGrid() {
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(grid => grid.style.backgroundColor = '#fff')
}

function changeGrid() {
  let newSquareNumber = +(window.prompt('Please Enter a number from 1 to 100'))
  if (newSquareNumber === 0 || newSquareNumber > 100) {
    window.alert(`Sorry! ${newSquareNumber} is not allowed. Please Enter a number from 1 to 100`)
  } else if (newSquareNumber > 0 && newSquareNumber <= 100) {
    const gridItems = document.querySelectorAll('.grid-item')
    gridItems.forEach(grid => grid.remove())
    createSquare(newSquareNumber)

  }
}


// New Elements //

// Erase Button
const cleanBtn = document.createElement('button')
cleanBtn.classList.add('erase')
cleanBtn.innerText = 'Erase'
buttons_container.appendChild(cleanBtn)

// Choose Size Button
const chooseSizeBtn = document.createElement('button')
chooseSizeBtn.classList.add('delete')
chooseSizeBtn.innerText = 'Choose Size'
buttons_container.appendChild(chooseSizeBtn)

// Choose Color
const selectColor = document.createElement('input')
selectColor.type = 'color'
selectColor.classList.add('color-selector')
console.log(selectColor.value)
buttons_container.appendChild(selectColor)


// Event Listeners
cleanBtn.addEventListener('click', clearGrid)
chooseSizeBtn.addEventListener('click', changeGrid)

