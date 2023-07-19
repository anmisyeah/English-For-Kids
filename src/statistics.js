import { CARDS_LIST } from './categoryCard';
import * as words from './words';

const allWords = [...words.actionAWords, ...words.actionBWords,...words.actionCWords,...words.adjectiveWords,...words.animalAWords,...words.animalBWords,...words.clothesWords,...words.emotionWords]
let isClearButtonAdded = false;

class Statistics {
  constructor({
    word, translation, image, trainClicks, correct, mistake,
  }) {
    this.word = word;
    this.translation = translation;
    this.image = image;
    this.trainClicks = trainClicks;
    this.correct = correct;
    this.mistake = mistake;
  }

  CreateCard() {
    let template = '';
    const card = document.createElement('div');
    card.classList.add('card-stat');
    template += `<img class="card-stat__image" src=${this.image} alt="card">`;
    template += `<h3 class="card-stat__text">Word: ${this.word}</h3>`;
    template += `<h3 class="card-stat__text">Translation: ${this.translation}</h3>`;
    template += `<h3 class="card-stat__text">Clicks on train: ${this.trainClicks}</h3>`;
    template += `<h3 class="card-stat__text">Correct clicks: ${this.correct}</h3>`;
    template += `<h3 class="card-stat__text">Error clicks: ${this.mistake}</h3>`;
    template += `<h3 class="card-stat__text">Percent of errors: ${(this.correct === 0 && this.mistake === 0) ? 0 : Math.floor((this.mistake / (this.mistake + this.correct)) * 100)}%</h3>`;
    card.innerHTML = template;
    return card;
  }
}

function renderStatisticsToDOM(words) {
  addButtonsToPage();
  const container = document.querySelector('.cards-list');
  container.innerHTML = '';
  words.forEach((word) => {
    const storageData = localStorage.getItem(word.id);
    const { trainClicks, correct, mistake } = storageData ? JSON.parse(storageData) : { trainClicks: 0, correct: 0, mistake: 0 };
    const statistics = new Statistics({
      ...word,
      trainClicks: Number(trainClicks),
      correct: Number(correct),
      mistake: Number(mistake),
    });
    const card = statistics.CreateCard();
    container.appendChild(card);
  });
}








function createClearStatisticsButton() {
  const clearButton = document.createElement('button');
  clearButton.classList.add('clearButton');
  clearButton.textContent = 'Очистить статистику';
  clearButton.addEventListener('click', () => {
    allWords.forEach((word) => {
      localStorage.removeItem(word.id);
    });
    renderStatisticsToDOM(allWords);
  });
  return clearButton;
}


function createShowMostErrorWordsButton() {
  const showErrorsButton = document.createElement('button');
  showErrorsButton.classList.add('clearButton');
  showErrorsButton.textContent = 'Показать слова с наибольшим количеством ошибок';
  showErrorsButton.addEventListener('click', () => {
  
    const wordsWithErrors = allWords.slice().sort((a, b) => {
      const aErrorPercent = a.mistake / (a.mistake + a.correct);
      const bErrorPercent = b.mistake / (b.mistake + b.correct);
      return bErrorPercent - aErrorPercent;
    });


    renderStatisticsToDOM(wordsWithErrors);
  });
  return showErrorsButton;
}


function addButtonsToPage() {
  if (isClearButtonAdded) {
    return;
  }
  const buttonsContainer = document.createElement('div');
  buttonsContainer.classList.add('buttons');

  const clearStatisticsButton = createClearStatisticsButton();
  const showErrorsButton = createShowMostErrorWordsButton();
  buttonsContainer.appendChild(clearStatisticsButton);
  buttonsContainer.appendChild(showErrorsButton);


  const statsContainer = document.querySelector('.cards-list');

  
  statsContainer.parentNode.insertBefore(buttonsContainer, statsContainer);
  isClearButtonAdded = true;
}



export {renderStatisticsToDOM,};