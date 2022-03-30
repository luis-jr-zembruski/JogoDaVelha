let player = null

getNextPlayer('X')

function selectSquare(id) {
  let square = document.getElementById(id)

  if (square.innerHTML === '-') {
    square.innerHTML = player
    square.style.color = '#000'

    if (player === 'X') {
      getNextPlayer('O')
    } else {
      getNextPlayer('X')
    }
  }
  checkWinner()
}

function checkWinner() {
  let square1 = document.getElementById('1')
  let square2 = document.getElementById('2')
  let square3 = document.getElementById('3')
  let square4 = document.getElementById('4')
  let square5 = document.getElementById('5')
  let square6 = document.getElementById('6')
  let square7 = document.getElementById('7')
  let square8 = document.getElementById('8')
  let square9 = document.getElementById('9')

  if (checkSequence(square1, square2, square3)) {
    changeColorSquare(square1, square2, square3)
    changeWinner(square1)
    return
  } else if (checkSequence(square4, square5, square6)) {
    changeColorSquare(square4, square5, square6)
    changeWinner(square4)
    return
  } else if (checkSequence(square7, square8, square9)) {
    changeColorSquare(square7, square8, square9)
    changeWinner(square7)
    return
  } else if (checkSequence(square1, square4, square7)) {
    changeColorSquare(square1, square4, square7)
    changeWinner(square1)
    return
  } else if (checkSequence(square2, square5, square8)) {
    changeColorSquare(square2, square5, square8)
    changeWinner(square2)
    return
  } else if (checkSequence(square3, square6, square9)) {
    changeColorSquare(square3, square6, square9)
    changeWinner(square3)
    return
  } else if (checkSequence(square1, square5, square9)) {
    changeColorSquare(square1, square5, square9)
    changeWinner(square1)
    return
  } else if (checkSequence(square3, square5, square7)) {
    changeColorSquare(square3, square5, square7)
    changeWinner(square3)
  }
}

function changeWinner(square) {
  let winner = document.getElementById('winner-selected')
  winner.innerHTML = square.innerHTML
  alert('Winner is player ' + winner.innerHTML)
  rebootGame()
}

function changeColorSquare(square1, square2, square3) {
  square1.style.backgroundColor = '#0f0'
  square2.style.backgroundColor = '#0f0'
  square3.style.backgroundColor = '#0f0'
}

function checkSequence(square1, square2, square3) {
  let equals = false

  if (
    square1.innerHTML === square2.innerHTML &&
    square2.innerHTML === square3.innerHTML &&
    square3.innerHTML !== '-'
  ) {
    equals = true
  }

  return equals
}

function getNextPlayer(value) {
  let playerSelected = document.getElementById('player-selected')
  player = value
  playerSelected.innerHTML = player
}

function rebootGame() {
  location.reload()
}
