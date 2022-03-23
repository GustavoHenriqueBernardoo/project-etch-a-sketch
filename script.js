const container = document.getElementById('container')
const grid_container = document.getElementById('grid-container')

const rows = 16
console.log(rows)

for (let i = 0; i < rows; i++) {
  const gridItem = document.createElement('div')
  gridItem.classList.add('grid-item')
  grid_container.appendChild(gridItem)
}