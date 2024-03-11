document.addEventListener('DOMContentLoaded', () => {
    const gridSquares = document.querySelectorAll('.grid div'); // Renamed 'squares' to 'gridSquares'
    const scoreDisplay = document.querySelector('span');
    const startButton = document.querySelector('.start'); // Renamed 'startBtn' to 'startButton'
  
    const width = 10 ;
    let currentIndex = 0;
    let appleIndex = 0;
    let snakeBody = [2, 1, 0];
    let direction = 1;
    let score = 0;
    let speed = 0.9;
    let intervalTime = 0;
    let gameInterval = 0;
  
    // Function to start and restart the game
    function startGame() {
      snakeBody.forEach(index => gridSquares[index].classList.remove('snake'));
      gridSquares[appleIndex].classList.remove('apple');
      clearInterval(gameInterval);
      score = 0;
      randomApple();
      direction = 1;
      scoreDisplay.innerText = score;
      intervalTime = 1000;
      snakeBody = [2, 1, 0];
      currentIndex = 0;
      snakeBody.forEach(index => gridSquares[index].classList.add('snake'));
      gameInterval = setInterval(moveOutcomes, intervalTime);
    }
  
    // Function to handle various move outcomes of the snake
    function moveOutcomes() {
      // ... (unchanged code)
  
      // ... (unchanged code)
  
      gridSquares[currentSnake[0]].classList.add('snake'); // Renamed 'currentSnake' to 'snakeBody'
    }
  
    // Function to generate a new apple once the apple is eaten
    function randomApple() {
      do {
        appleIndex = Math.floor(Math.random() * gridSquares.length);
      } while (gridSquares[appleIndex].classList.contains('snake'));
      gridSquares[appleIndex].classList.add('apple');
    }
  
    // Function to handle keyboard controls
    function control(e) {
      gridSquares[currentIndex].classList.remove('snake');
  
      if (e.keyCode === 39) {
        direction = 1;
      } else if (e.keyCode === 38) {
        direction = -width;
      } else if (e.keyCode === 37) {
        direction = -1;
      } else if (e.keyCode === 40) {
        direction = +width;
      }
    }

    // alternation

    console.log(direction) 
  
    document.addEventListener('keyup', control);
    startButton.addEventListener('click', startGame);
  });
  