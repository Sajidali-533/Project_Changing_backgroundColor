let button = document.getElementById('btn');
let color = document.querySelector('.color');

// creat a hex colour arrays
let Hex = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f'
]

button.addEventListener('click', () => {
    // hexcolor
    let hexColor = generatecolor();
    document.body.style.backgroundColor = hexColor;
    color.textContent = hexColor;

})

function generatecolor(){
     let hexColor = '#'
     for (i=0; i<6; i++){
        hexColor += Hex[generateRandomNo()];
     }
     return hexColor;
}

 function generateRandomNo(){
    return Math.floor(Math.random()* Hex.length);
}

