const characters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];

let currentCharacter = characters[0][0];

const firstRow = document.querySelectorAll('.first-row > div');
const secondRow = document.querySelectorAll('.second-row > div');
const flags = document.querySelectorAll('.flag');
const characterName = document.querySelector('.player-character-name');
const characterPortrait = document.querySelector('.player-character-image');

const charactersGrid = [firstRow,secondRow];
let DOMCurrentCharacter = charactersGrid[0][0];

DOMCurrentCharacter.classList.add('current');

function flagChange(characterFlag) {
  flags.forEach(flag => {
    flag.style.display = 'none';
    if (flag.classList.contains(characterFlag)) {
      flag.style.display = 'block';
    }
  })

}

flagChange('japan-south');


function characterChange() {
  if (DOMCurrentCharacter.classList.contains('ryu')) {
    characterName.style.backgroundImage = "url('./images/Names/Ryu.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Ryu.png')";
    flagChange('japan-south');
  } else if (DOMCurrentCharacter.classList.contains('honda')) {
    characterName.style.backgroundImage = "url('./images/Names/Honda.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Honda.png')";
    flagChange('japan-north');
  } else if (DOMCurrentCharacter.classList.contains('blanka')) {
    characterName.style.backgroundImage = "url('./images/Names/Blanka.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Blanka.png')";
    flagChange('brazil');
  } else if (DOMCurrentCharacter.classList.contains('guile')) {
    characterName.style.backgroundImage = "url('./images/Names/Guile.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Guile.png')";
    flagChange('usa-west');
  } else if (DOMCurrentCharacter.classList.contains('balrog')) {
    characterName.style.backgroundImage = "url('./images/Names/Balrog.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Balrog.png')";
    flagChange('usa-east');
  } else if (DOMCurrentCharacter.classList.contains('vega')) {
    characterName.style.backgroundImage = "url('./images/Names/Vega.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Vega.png')";
    flagChange('spain');
  } else if (DOMCurrentCharacter.classList.contains('ken')) {
    characterName.style.backgroundImage = "url('./images/Names/Ken.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Ken.png')";
    flagChange('usa-north');
  } else if (DOMCurrentCharacter.classList.contains('chunli')) {
    characterName.style.backgroundImage = "url('./images/Names/ChunLi.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/ChunLi.png')";
    flagChange('china');
  } else if (DOMCurrentCharacter.classList.contains('zangief')) {
    characterName.style.backgroundImage = "url('./images/Names/Zangief.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Zangief.png')";
    flagChange('ussr');
  } else if (DOMCurrentCharacter.classList.contains('dhaslim')) {
    characterName.style.backgroundImage = "url('./images/Names/Dhaslim.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Dhaslim.png')";
    flagChange('india');
  } else if (DOMCurrentCharacter.classList.contains('sagat')) {
    characterName.style.backgroundImage = "url('./images/Names/Sagat.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Sagat.png')";
    flagChange('thailand');
  } else if (DOMCurrentCharacter.classList.contains('bison')) {
    characterName.style.backgroundImage = "url('./images/Names/Bison.png')";
    characterPortrait.style.backgroundImage = "url('./images/Characters/Portraits/Bison.png')"
    flagChange('');
  }
}

characterChange();

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
    characterChange();
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
    characterChange();
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
    characterChange();
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
    characterChange();
  }
});
