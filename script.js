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
  eraseSquares()
  deleteSquares()
}

function changeColor(color) {
  color.style.backgroundColor = 'red'
}

// Getting all grid-item elements
const gridItems = document.querySelectorAll('.grid-item')


function eraseSquares() {
  const cleanBtn = document.createElement('button')
  cleanBtn.classList.add('erase')
  cleanBtn.innerText = 'Erase'
  cleanBtn.addEventListener('click', () => {
    gridItems.forEach(grid => {
      grid.style.backgroundColor = '#fff'
    })
  })
  buttons_container.appendChild(cleanBtn)
}
function deleteSquares() {
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('delete')
  deleteBtn.innerText = 'Delete'
  deleteBtn.addEventListener('click', () => {
    gridItems.forEach(grid => {
      grid.remove()
      // grid_container.remove()
    })
  })
  buttons_container.appendChild(deleteBtn)
}


console.log(square)