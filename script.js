const container = document.getElementById('container')
const grid_container = document.getElementById('grid-container')
const buttons_container = document.getElementById('buttons-container')
const titleSpans = document.querySelectorAll('span')

let square = 30
let defaultColor = 'black'

// Add random color for each span in the title
titleSpans.forEach(span => span.style.color = getRandomColor())

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

// Colors functions
function changeColor(item) {
  // item.style.backgroundColor = defaultColor
  // if (selectColor) {
  //   item.style.backgroundColor = selectColor.value
  // }
  item.style.backgroundColor = defaultColor
  // specialButton.classList.remove('active')
  item.style.backgroundColor = selectColor.value
}

function getRandomColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor}`
}

// function setToRandomColor() {
//   const gridItems = document.querySelectorAll('.grid-item')

//   specialButton.classList.add('active')
//   if (specialButton.classList.contains('active')) {
//     console.log('true')
//     gridItems.forEach(grid => grid.addEventListener('mouseenter', () => {
//       grid.style.backgroundColor = getRandomColor()
//     }))

//   }

// }

// Erase function, to clear all the grid
function clearGrid() {
  specialButton.classList.remove('active')
  const gridItems = document.querySelectorAll('.grid-item')
  gridItems.forEach(grid => grid.style.backgroundColor = '#fff')
}

// A function to choose the size of the grid
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
const selectorBtn = document.createElement('button')
const selectColor = document.createElement('input')
selectColor.type = 'color'
selectColor.classList.add('color-selector')
buttons_container.appendChild(selectColor)

// Special color button
const specialButton = document.createElement('button')
specialButton.classList.add('special')
specialButton.innerHTML = `
<span style="color:${getRandomColor()}">S</span>
<span style="color:${getRandomColor()}">p</span>
<span style="color:${getRandomColor()}">e</span>
<span style="color:${getRandomColor()}">c</span>
<span style="color:${getRandomColor()}">i</span>
<span style="color:${getRandomColor()}">a</span>
<span style="color:${getRandomColor()}">l</span>
`
// buttons_container.insertAdjacentElement("afterbegin", specialButton)


// Event Listeners
cleanBtn.addEventListener('click', clearGrid)
chooseSizeBtn.addEventListener('click', changeGrid)
specialButton.addEventListener('click', setToRandomColor)

