let sketchingBoard = document.querySelector('.sketchBoard')
let colorSelector = document.querySelector('#selectColor');
let clear = document.querySelector('#clearAll');
let erase = document.querySelector('#eraser');



for (let i=0 ; i < 256 ; i++ ){
    let cell = document.createElement('div');
    cell.classList= 'cells';
    cell.appendChild(document.createTextNode(''));
    sketchingBoard.appendChild(cell);
    cell.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `${colorSelector}`;
        console.log(e)
    })
} 
let changedCell = document.querySelectorAll('.cells')

// console.log(colorSelector)


clear.addEventListener('click', () => {
    changedCell.forEach(cell => {
    cell.style.backgroundColor= 'white'        
    });
})



