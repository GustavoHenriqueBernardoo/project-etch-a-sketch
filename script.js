const container = document.getElementById('container')
const grid_container = document.getElementById('grid-container')

const square = 16

createSquare(square)

function createSquare(square) {
  let totalSquare = square * square
  for (let i = 0; i < totalSquare; i++) {
    const gridItem = document.createElement('div')
    gridItem.classList.add('grid-item')
    grid_container.style.gridTemplateRows = `repeat(${square}, 1fr)`
    grid_container.style.gridTemplateColumns = `repeat(${square}, 1fr)`
    grid_container.insertAdjacentElement("beforeend", gridItem)
    console.log(gridItem)
    gridItem.addEventListener('mouseenter', () => changeColor(gridItem))
  }
}

function changeColor(color) {
  color.style.backgroundColor = 'red'
}