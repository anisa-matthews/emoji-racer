const socket = io();

const player1Btn = document.querySelector('#player1Btn');
const player2Btn = document.querySelector('#player2Btn');

function advancePlayer1(e) {
    e.preventDefault();
    socket.emit('advance player 1', document.querySelector('#player1'));
    console.log('player 1', document.querySelector('#player1'));

    const left = document.querySelector('#player1').scrollLeft;
    document.querySelector('#player1').style.left = `${(parseInt(left)+10).toString()}px`;
}

function advancePlayer2(e) {
    e.preventDefault();
    socket.emit('advance player 2', document.querySelector('#player2'));
    console.log('player 2', document.querySelector('#player2'));

    const left = document.querySelector('#player2').scrollLeft;
    document.querySelector('#player2').style.left = `${(parseInt(left)+10).toString()}px`;
}

player1Btn.addEventListener('click', advancePlayer1);
player2Btn.addEventListener('click', advancePlayer2);

