const container = document.getElementById('container')
const grid_container = document.getElementById('grid-container')
const buttons_container = document.getElementById('buttons-container')

let square = 16

createSquare(square)

function createSquare(square) {
  let totalSquare = square * square
  for (let i = 0; i < totalSquare; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid_container.style.gridTemplateRows = `repeat(${square}, 1fr)`
    grid_container.style.gridTemplateColumns = `repeat(${square}, 1fr)`
    grid_container.insertAdjacentElement("beforeend", gridItem)
    // console.log(gridItem)
    gridItem.addEventListener('mouseenter', () => changeColor(gridItem))
  }
}

// Getting all grid-item elements
const gridItems = document.querySelectorAll('.grid-item')



function changeColor(color) {
  color.style.backgroundColor = 'red'
}

function clearGrid() {
  gridItems.forEach(grid => grid.style.backgroundColor = '#fff')
}

function changeGrid() {
  gridItems.forEach(grid => grid.remove())
  let newSquareNumber = +(window.prompt('Enter a number'))
  if (newSquareNumber === 0) {
    newSquareNumber = +(window.prompt(`Sorry! ${newSquareNumber} is not allowed. Please Enter a number from 1 to 100`))
  } else if (newSquareNumber > 100) {
    newSquareNumber = +(window.prompt(`Sorry! ${newSquareNumber} is not allowed. Please Enter a number from 1 to 100`))
  }
  createSquare(newSquareNumber)
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


// Event Listeners
cleanBtn.addEventListener('click', clearGrid)
chooseSizeBtn.addEventListener('click', changeGrid)

