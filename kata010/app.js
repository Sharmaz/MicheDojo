const characters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];

let currentCharacter = characters[0][0];

const firstRow = document.querySelectorAll('.first-row > div');
const secondRow = document.querySelectorAll('.second-row > div');

const charactersGrid = [firstRow,secondRow];
let DOMCurrentCharacter = charactersGrid[0][0];

console.log(currentCharacter);
console.log(DOMCurrentCharacter);

DOMCurrentCharacter.classList.add('current');

let rowCount = 0;
let columnCount = 0;

window.addEventListener('keydown', (e) => {
  if (e.code === 'ArrowUp') {
    DOMCurrentCharacter.classList.remove('current');
    columnCount--;
    if (columnCount <= 0) {
      columnCount = 0;
    }
    
    currentCharacter = characters[columnCount][rowCount];
    DOMCurrentCharacter = charactersGrid[columnCount][rowCount];
    DOMCurrentCharacter.classList.add('current');
  }
  if (e.code === 'ArrowRight') {
    DOMCurrentCharacter.classList.remove('current');
    rowCount++;
    if (rowCount >= characters[0].length) {
      rowCount = 0;
    }
    currentCharacter = characters[columnCount][rowCount];
    DOMCurrentCharacter = charactersGrid[columnCount][rowCount];
    DOMCurrentCharacter.classList.add('current');
  }
  if (e.code === 'ArrowDown') {
    DOMCurrentCharacter.classList.remove('current');
    columnCount++;
    if (columnCount >= characters.length -1) {
      columnCount = characters.length -1;
    }
    currentCharacter = characters[columnCount][rowCount];
    DOMCurrentCharacter = charactersGrid[columnCount][rowCount];
    DOMCurrentCharacter.classList.add('current');
  }
  if (e.code === 'ArrowLeft') {
    DOMCurrentCharacter.classList.remove('current');
    rowCount--;
    if (rowCount < 0) {
      rowCount = characters[0].length -1;
    }
    currentCharacter = characters[columnCount][rowCount];
    DOMCurrentCharacter = charactersGrid[columnCount][rowCount];
    DOMCurrentCharacter.classList.add('current');
  }
});
