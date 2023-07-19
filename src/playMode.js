import { 
  actionAWords,
  actionBWords,
  actionCWords,
  adjectiveWords,
  animalAWords,
  animalBWords,
  clothesWords,
  emotionWords,
 } from "./words";
 
 
 function createPlayButton(wordsArray) {
  console.log(wordsArray);
  let CARDS_LIST = document.querySelector('.cards-list');
  let selectedCards = [];
  let availableElements = wordsArray.slice();
  let correctAnswersCount = 0;
  let totalCardsCount = wordsArray.length;
  let currentElement = null;
  let incorrectAttempts = 0;
  let isGameActive = false;
  
  
  function resetGame() {
    selectedCards = [];
    availableElements = wordsArray.slice();
    correctAnswersCount = 0;
    currentElement = null;
    incorrectAttempts = 0;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  const playButton = document.createElement('button');
  playButton.classList.add('play-button__button');
  playButton.textContent = 'Play';

  playButton.addEventListener('click', () => {
    if (isGameActive) { // Проверяем активность игры
      return; // Если игра уже активна, выходим из функции
    }
    isGameActive = true;
    selectedCards = [];
    availableElements = wordsArray.slice();
    function createStarContainer() {
      const starContainer = document.createElement('div');
      starContainer.classList.add('star-container');
      return starContainer;
    }
    
    // Функция для обновления контейнера со звездами
    function updateStarContainer(isCorrect) {
      const starContainer = document.querySelector('.star-container');
    
      const starImage = document.createElement('img');
      starImage.src = isCorrect ? './img/star-win.svg' : './img/star.svg';
      starImage.classList.add('star-image');
    
      starContainer.appendChild(starImage);
    }

    function updateLocalStorageData(word) {
      const storageData = localStorage.getItem(word.id);
      let { trainClicks, correct, mistake } = storageData ? JSON.parse(storageData) : { trainClicks: 0, correct: 0, mistake: 0 };
    
      trainClicks += word.trainClicks;
      correct += word.correct;
      mistake += word.mistake;
    
      localStorage.setItem(word.id, JSON.stringify({ trainClicks, correct, mistake }));
    }

    function handleArrayItemClick(element) {
      const correctSound = new Audio('./audio/playmode/correct.mp3');
      const errorSound = new Audio('./audio/playmode/error.mp3');
    
      // Проверяем, правильно ли выбран элемент
      if (currentElement && element && element.id === currentElement.id) {
        element.correct++;
        element.trainClicks++;
        correctAnswersCount++
        updateLocalStorageData(element);
    
        console.log('correctAnswersCount:', correctAnswersCount);
        console.log('incorrectAttempts:', incorrectAttempts);
        if (element.correct < wordsArray.length) {
          playRandomSoundFromActionAWords();
        }
    
        updateStarContainer(true);
        correctSound.play();
      } else {
        element.mistake++;
        incorrectAttempts++;
        updateLocalStorageData(element);
    
        console.log('correctAnswersCount:', correctAnswersCount);
        console.log('incorrectAttempts:', incorrectAttempts);
        updateStarContainer(false);
        errorSound.play();
      }
    
      

  
      selectedCards.push(element);
    
      // Проверяем, завершена ли игра
      if (correctAnswersCount === correctAnswersCount+incorrectAttempts) {
        showResultImage(true);
      } else if (correctAnswersCount < correctAnswersCount+incorrectAttempts  ) {
        showResultImage(false);
      }
    }
    
    // Функция для отображения изображения результата
    function showResultImage(isSuccess) {
      if (correctAnswersCount === totalCardsCount ) {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');
    
        const resultImage = document.createElement('img');
        resultImage.classList.add('result-image');
        resultImage.src = isSuccess ? './img/success.jpg' : './img/failure.jpg';
        const audioResult = new Audio(isSuccess ? './audio/playmode/success.mp3' : './audio/playmode/failure.mp3');
        audioResult.play();
    
        resultContainer.appendChild(resultImage);
        document.body.appendChild(resultContainer);
        resetGame()
        isGameActive = false; 
      }
    }
    
    // Кнопка "Repeat"
    const repeatButton = document.createElement('button');
    repeatButton.classList.add('play-button__button');
    repeatButton.textContent = 'Repeat';
    
    // Функция для повтора последнего звука
    function repeatLastSound() {
      if (currentElement) {
        playSound(currentElement);
      }
    }
    
    // Кнопка "Play"
    
    
    // Функция для проигрывания звука
    function playSound(element) {
      const audio = new Audio(element.sound);
      audio.play();
      currentElement = element;
    }
    
    // Функция для получения случайного уникального элемента
    function getRandomUniqueElement() {
      if (availableElements.length === 0) {
        return null;
      }
    
      const randomIndex = Math.floor(Math.random() * availableElements.length);
      const randomElement = availableElements[randomIndex];
      availableElements.splice(randomIndex, 1);
    
      return randomElement;
    }
    
    // Функция для проигрывания случайного звука из массива actionAWords
    function playRandomSoundFromActionAWords() {
      currentElement = getRandomUniqueElement();
      if (currentElement) {
        playSound(currentElement);
      }
    }
    
    // Создаем контейнер со звездами и помещаем его перед списком карточек
    
    
    // Получаем все элементы массива и назначаем им обработчики клика
    const arrayItems = document.querySelectorAll('.wordCard');
    arrayItems.forEach((item) => {
      item.addEventListener('click', () => {
        const itemId = item.id;
        const clickedElement = wordsArray.find((element) => element.id === itemId);
        handleArrayItemClick(clickedElement);
      });
    });
    const starContainer = createStarContainer();
    CARDS_LIST.parentNode.insertBefore(starContainer, CARDS_LIST);
    playRandomSoundFromActionAWords();

    playButton.replaceWith(repeatButton);
    repeatButton.addEventListener('click', repeatLastSound);
  });

   return playButton;
 }


const isPlayMode = () => document.querySelector('.switch__input').checked;





export{isPlayMode,createPlayButton,};








/*
 function createPlayButton(wordsArray) {
  console.log(wordsArray);
  let CARDS_LIST = document.querySelector('.cards-list');
  let selectedCards = [];
  let availableElements = wordsArray.slice();
  let correctAnswersCount = 0;
  let totalCardsCount = wordsArray.length;
  let currentElement = null;
  let incorrectAttempts = 0;
  
  function resetGame() {
    selectedCards = [];
    availableElements = wordsArray.slice();
    correctAnswersCount = 0;
    currentElement = null;
    incorrectAttempts = 0;
    setTimeout(() => {
      location.reload();
    }, 3000);
  }
  const playButton = document.createElement('button');
  playButton.classList.add('play-button__button');
  playButton.textContent = 'Play';

  playButton.addEventListener('click', () => {
    selectedCards = [];
    availableElements = wordsArray.slice();
    function createStarContainer() {
      const starContainer = document.createElement('div');
      starContainer.classList.add('star-container');
      return starContainer;
    }
    
    // Функция для обновления контейнера со звездами
    function updateStarContainer(isCorrect) {
      const starContainer = document.querySelector('.star-container');
    
      const starImage = document.createElement('img');
      starImage.src = isCorrect ? './img/star-win.svg' : './img/star.svg';
      starImage.classList.add('star-image');
    
      starContainer.appendChild(starImage);
    }

    function handleArrayItemClick(element) {
      const correctSound = new Audio('./audio/playmode/correct.mp3');
      const errorSound = new Audio('./audio/playmode/error.mp3');
    
      // Проверяем, правильно ли выбран элемент
      if (currentElement && element && element.id === currentElement.word) {
        element.correct++;
        element.trainClicks++;
        correctAnswersCount++
    
        console.log('correctAnswersCount:', correctAnswersCount);
        console.log('incorrectAttempts:', incorrectAttempts);
    
        if (element.correct < wordsArray.length) {
          playRandomSoundFromActionAWords();
        }
    
        updateStarContainer(true);
        correctSound.play();
      } else {
        element.mistake++;
        incorrectAttempts++;
    
        console.log('correctAnswersCount:', correctAnswersCount);
        console.log('incorrectAttempts:', incorrectAttempts);
    
        updateStarContainer(false);
        errorSound.play();
      }
    
      selectedCards.push(element);
    
      // Проверяем, завершена ли игра
      if (correctAnswersCount === correctAnswersCount+incorrectAttempts) {
        showResultImage(true);
      } else if (correctAnswersCount < correctAnswersCount+incorrectAttempts  ) {
        showResultImage(false);
      }
    }
    
    // Функция для отображения изображения результата
    function showResultImage(isSuccess) {
      if (correctAnswersCount === totalCardsCount ) {
        const resultContainer = document.createElement('div');
        resultContainer.classList.add('result-container');
    
        const resultImage = document.createElement('img');
        resultImage.classList.add('result-image');
        resultImage.src = isSuccess ? './img/success.jpg' : './img/failure.jpg';
        const audioResult = new Audio(isSuccess ? './audio/playmode/success.mp3' : './audio/playmode/failure.mp3');
        audioResult.play();
    
        resultContainer.appendChild(resultImage);
        document.body.appendChild(resultContainer);
        resetGame()
        
      }
    }
    
    // Кнопка "Repeat"
    const repeatButton = document.createElement('button');
    repeatButton.classList.add('play-button__button');
    repeatButton.textContent = 'Repeat';
    
    // Функция для повтора последнего звука
    function repeatLastSound() {
      if (currentElement) {
        playSound(currentElement);
      }
    }
    
    // Кнопка "Play"
    
    
    // Функция для проигрывания звука
    function playSound(element) {
      const audio = new Audio(element.sound);
      audio.play();
      currentElement = element;
    }
    
    // Функция для получения случайного уникального элемента
    function getRandomUniqueElement() {
      if (availableElements.length === 0) {
        return null;
      }
    
      const randomIndex = Math.floor(Math.random() * availableElements.length);
      const randomElement = availableElements[randomIndex];
      availableElements.splice(randomIndex, 1);
    
      return randomElement;
    }
    
    // Функция для проигрывания случайного звука из массива actionAWords
    function playRandomSoundFromActionAWords() {
      currentElement = getRandomUniqueElement();
      if (currentElement) {
        playSound(currentElement);
      }
    }
    
    // Создаем контейнер со звездами и помещаем его перед списком карточек
    
    
    // Получаем все элементы массива и назначаем им обработчики клика
    const arrayItems = document.querySelectorAll('.wordCard');
    arrayItems.forEach((item) => {
      item.addEventListener('click', () => {
        const itemId = item.id;
        const clickedElement = wordsArray.find((element) => element.id === itemId);
        handleArrayItemClick(clickedElement);
      });
    });
    const starContainer = createStarContainer();
    CARDS_LIST.parentNode.insertBefore(starContainer, CARDS_LIST);
    playRandomSoundFromActionAWords();

    playButton.replaceWith(repeatButton);
    repeatButton.addEventListener('click', repeatLastSound);
  });

   return playButton;
 }



*/