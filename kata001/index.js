const characters = [
  ['Ryu', 'E.Honda', 'Blanka', 'Guile', 'Balrog', 'Vega'],
  ['Ken', 'Chun Li', 'Zangief', 'Dhalsim', 'Sagat', 'M.Bison']
];

console.log(characters)

let currentCharacter = characters[0][0];

console.log(currentCharacter)

let rowCount = 0;

let columnCount = 0;

const stdin = process.stdin;
stdin.setRawMode(true);
stdin.resume();
stdin.setEncoding('utf8');

stdin.on('data', function(key){
    if (key == '\u001B\u005B\u0041') {
        columnCount--;
        if (columnCount <= 0) {
          columnCount = 0;
        }
        currentCharacter = characters[columnCount][rowCount];
        console.log(currentCharacter);
    }
    if (key == '\u001B\u005B\u0043') {
        rowCount++;
        if (rowCount >= characters[0].length) {
          rowCount = 0;
        }
        currentCharacter = characters[columnCount][rowCount];
        console.log(currentCharacter);
    }
    if (key == '\u001B\u005B\u0042') {
        columnCount++;
        if (columnCount >= characters.length -1) {
          columnCount = characters.length -1;
        }
        currentCharacter = characters[columnCount][rowCount];
        console.log(currentCharacter);
    }
    if (key == '\u001B\u005B\u0044') {
        rowCount--;
        if (rowCount < 0) {
          rowCount = characters[0].length -1;
        }
        currentCharacter = characters[0][rowCount];
        console.log(currentCharacter);
    }

    if (key == '\u0003') { process.exit(); } 
  }
);
