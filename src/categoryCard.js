import { menuList } from "./menuList";
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
 import {isPlayMode, createPlayButton,} from "./playMode";
 


const headerText = document.querySelector('.header__text');


const CARDS_LIST = document.querySelector('.cards-list');


let front_cry;
let back_cry;
let front_dance;
let back_dance;
let front_dive;
let back_dive;
let front_draw;
let back_draw;
let front_fish;
let back_fish;
let front_fly;
let back_fly;
let front_hug;
let back_hug;
let front_jump;
let back_jump;

let front_open;
let back_open;
let front_play;
let back_play;
let front_point;
let back_point;
let front_ride;
let back_ride;
let front_run;
let back_run;
let front_sing;
let back_sing;
let front_skip;
let back_skip;
let front_swim;
let back_swim;

let front_argue;
let back_argue;
let front_build;
let back_build;
let front_carry;
let back_carry;
let front_catch;
let back_catch;
let front_drive;
let back_drive;
let front_drop;
let back_drop;
let front_pull;
let back_pull;
let front_push;
let back_push;

let front_cat;
let back_cat;
let front_chick;
let back_chick;
let front_chicken;
let back_chicken;
let front_dog;
let back_dog;
let front_horse;
let back_horse;
let front_pig;
let back_pig;
let front_rabbit;
let back_rabbit;
let front_sheep;
let back_sheep;

let front_big;
let back_big;
let front_small;
let back_small;
let front_fast;
let back_fast;
let front_slow;
let back_slow;
let front_friendly;
let back_friendly;
let front_unfriendly;
let back_unfriendly;
let front_young;
let back_young;
let front_old;
let back_old;

let front_bird;
let back_bird;
let front_fish1;
let back_fish1;
let front_frog;
let back_frog;
let front_giraffe;
let back_giraffe;
let front_lion;
let back_lion;
let front_mouse;
let back_mouse;
let front_turtle;
let back_turtle;
let front_dolphin;
let back_dolphin;

let front_skirt;
let back_skirt;
let front_pants;
let back_pants;
let front_blouse;
let back_blouse;
let front_dress;
let back_dress;
let front_boot;
let back_boot;
let front_shirt;
let back_shirt;
let front_coat;
let back_coat;
let front_shoe;
let back_shoe;

let front_sad;
let back_sad;
let front_angry;
let back_angry;
let front_happy;
let back_happy;
let front_tired;
let back_tired;
let front_surprised;
let back_surprised;
let front_scared;
let back_scared;
let front_smile;
let back_smile;
let front_laugh;
let back_laugh;



class categoryCard {

  render() { 
    let htmlCategory = '';

    
    menuList.forEach(({title, image, id}) => {
      htmlCategory += `
          <li class='card' id='${id}'>
            <span>${title}</span>
            <img class="img_action" src='${image}' />
          </li>
      `;
    });

    const html = `
      <ul class="category_ul">
        ${htmlCategory}
      </ul>
    `;
    CARDS_LIST.innerHTML = html;
  }
}

const category = new categoryCard();
category.render();


class sectionsCards {
  
  
  renderActionA() {
    let templateFront = '';
    
    
    actionAWords.forEach(({word, translation, image}) =>{
      templateFront += `
        
          <li class='wordCard' id='${word}'>
          <div id="front_${word}" class="front">
            <div class="word_rotate">
              <span>${word}</span>
              <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
            </div>
            <img class='word_img' src='${image}' />
              
          </div>

          <div id="back_${word}" class="back">
          <img class="category-card__image" src=${image} alt="card">
          <span class="category-card__name">${translation}</span>
          </div>
          </li>
        
        
      `;
    });
    const htmlA = `
        <ul class="category_ul">
          ${templateFront}
        </ul>
    `;
    CARDS_LIST.innerHTML = htmlA;
    let frontCry = document.getElementById('front_cry');
    let backCry = document.getElementById('back_cry');
    front_cry = frontCry;
    back_cry = backCry;

    let frontDance = document.getElementById('front_dance');
    let backDance = document.getElementById('back_dance');
    front_dance = frontDance;
    back_dance = backDance;

    let frontDive = document.getElementById('front_dive');
    let backDive = document.getElementById('back_dive');
    front_dive = frontDive;
    back_dive = backDive;

    let frontDraw = document.getElementById('front_draw');
    let backDraw = document.getElementById('back_draw');
    front_draw = frontDraw;
    back_draw = backDraw;

    let frontFish = document.getElementById('front_fish');
    let backFish = document.getElementById('back_fish');
    front_fish = frontFish;
    back_fish = backFish;

    let frontFly = document.getElementById('front_fly');
    let backFly = document.getElementById('back_fly');
    front_fly = frontFly;
    back_fly = backFly;

    let frontHug = document.getElementById('front_hug');
    let backHug = document.getElementById('back_hug');
    front_hug = frontHug;
    back_hug = backHug;

    let frontJump = document.getElementById('front_jump');
    let backJump = document.getElementById('back_jump');
    front_jump = frontJump;
    back_jump = backJump;
    

    
    let front = document.querySelectorAll('.front');
    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(actionAWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }
  renderActionB(){
    let templateFront = '';
    actionBWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlB = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlB;

    let frontOpen = document.getElementById('front_open');
    let backOpen = document.getElementById('back_open');
    front_open = frontOpen;
    back_open = backOpen;

    let frontPlay = document.getElementById('front_play');
    let backPlay = document.getElementById('back_play');
    front_play = frontPlay;
    back_play = backPlay;

    let frontPoint = document.getElementById('front_point');
    let backPoint = document.getElementById('back_point');
    front_point = frontPoint;
    back_point = backPoint;

    let frontRide = document.getElementById('front_ride');
    let backRide = document.getElementById('back_ride');
    front_ride = frontRide;
    back_ride = backRide;

    let frontRun = document.getElementById('front_run');
    let backRun = document.getElementById('back_run');
    front_run = frontRun;
    back_run = backRun;

    let frontSing = document.getElementById('front_sing');
    let backSing = document.getElementById('back_sing');
    front_sing = frontSing;
    back_sing = backSing;

    let frontSkip = document.getElementById('front_skip');
    let backSkip = document.getElementById('back_skip');
    front_skip = frontSkip;
    back_skip = backSkip;

    let frontSwim = document.getElementById('front_swim');
    let backSwim = document.getElementById('back_swim');
    front_swim = frontSwim;
    back_swim = backSwim;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');

    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(actionBWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderActionC(){
    let templateFront = '';
    actionCWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlC = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlC;

    let frontArgue = document.getElementById('front_argue');
    let backArgue = document.getElementById('back_argue');
    front_argue = frontArgue;
    back_argue = backArgue;

    let frontBuild = document.getElementById('front_build');
    let backBuild = document.getElementById('back_build');
    front_build = frontBuild;
    back_build = backBuild;

    let frontCarry = document.getElementById('front_carry');
    let backCarry = document.getElementById('back_carry');
    front_carry = frontCarry;
    back_carry = backCarry;

    let frontCatch = document.getElementById('front_catch');
    let backCatch = document.getElementById('back_catch');
    front_catch = frontCatch;
    back_catch = backCatch;

    let frontDrive = document.getElementById('front_drive');
    let backDrive = document.getElementById('back_drive');
    front_drive = frontDrive;
    back_drive = backDrive;

    let frontDrop = document.getElementById('front_drop');
    let backDrop = document.getElementById('back_drop');
    front_drop = frontDrop;
    back_drop = backDrop;

    let frontPull = document.getElementById('front_pull');
    let backPull = document.getElementById('back_pull');
    front_pull = frontPull;
    back_pull = backPull;

    let frontPush = document.getElementById('front_push');
    let backPush = document.getElementById('back_push');
    front_push = frontPush;
    back_push = backPush;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');
    
    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(actionCWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderAdjectiveWords(){
    let templateFront = '';
    adjectiveWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmladjectiveWords = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmladjectiveWords;

    let frontBig = document.getElementById('front_big');
    let backBig = document.getElementById('back_big');
    front_big = frontBig;
    back_big = backBig;

    let frontSmall = document.getElementById('front_small');
    let backSmall = document.getElementById('back_small');
    front_small = frontSmall;
    back_small = backSmall;

    let frontFast = document.getElementById('front_fast');
    let backFast = document.getElementById('back_fast');
    front_fast = frontFast;
    back_fast = backFast;

    let frontSlow = document.getElementById('front_slow');
    let backSlow = document.getElementById('back_slow');
    front_slow = frontSlow;
    back_slow = backSlow;

    let frontFriendly = document.getElementById('front_friendly');
    let backFriendly = document.getElementById('back_friendly');
    front_friendly = frontFriendly;
    back_friendly = backFriendly;

    let frontYoung = document.getElementById('front_young');
    let backYoung = document.getElementById('back_young');
    front_young = frontYoung;
    back_young = backYoung;

    let frontUnfriendly = document.getElementById('front_unfriendly');
    let backUnfriendly = document.getElementById('back_unfriendly');
    front_unfriendly = frontUnfriendly;
    back_unfriendly = backUnfriendly;

    let frontOld = document.getElementById('front_old');
    let backOld = document.getElementById('back_old');
    front_old = frontOld;
    back_old = backOld;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');
    
    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(adjectiveWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderAnimalAWords(){
    let templateFront = '';
    animalAWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlAnimalAWords = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlAnimalAWords;
    
    let frontCat = document.getElementById('front_cat');
    let backCat = document.getElementById('back_cat');
    front_cat = frontCat;
    back_cat = backCat;

    let frontChick = document.getElementById('front_chick');
    let backChick = document.getElementById('back_chick');
    front_chick = frontChick;
    back_chick = backChick;

    let frontChicken = document.getElementById('front_chicken');
    let backChicken = document.getElementById('back_chicken');
    front_chicken = frontChicken;
    back_chicken = backChicken;

    let frontDog = document.getElementById('front_dog');
    let backDog = document.getElementById('back_dog');
    front_dog = frontDog;
    back_dog = backDog;

    let frontHorse = document.getElementById('front_horse');
    let backHorse = document.getElementById('back_horse');
    front_horse = frontHorse;
    back_horse = backHorse;

    let frontPig = document.getElementById('front_pig');
    let backPig = document.getElementById('back_pig');
    front_pig = frontPig;
    back_pig = backPig;

    let frontRabbit = document.getElementById('front_rabbit');
    let backRabbit = document.getElementById('back_rabbit');
    front_rabbit = frontRabbit;
    back_rabbit = backRabbit;

    let frontSheep = document.getElementById('front_sheep');
    let backSheep = document.getElementById('back_sheep');
    front_sheep = frontSheep;
    back_sheep = backSheep;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');

    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(animalAWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderBnimalAWords(){
    let templateFront = '';
    animalBWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front ${word}front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img ${word}rotate" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back ${word}back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlAnimalAWords = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlAnimalAWords;

    let frontBird = document.getElementById('front_bird');
    let backBird = document.getElementById('back_bird');
    front_bird = frontBird;
    back_bird = backBird;

    let frontFish1 = document.getElementById('front_fish');
    let backFish1 = document.getElementById('front_fish');
    front_fish1 = frontFish1;
    back_fish1 = backFish1;

    let frontFrog = document.getElementById('front_frog');
    let backFrog = document.getElementById('back_frog');
    front_frog = frontFrog;
    back_frog = backFrog;

    let frontGiraffe = document.getElementById('front_giraffe');
    let backGiraffe = document.getElementById('back_giraffe');
    front_giraffe = frontGiraffe;
    back_giraffe = backGiraffe;

    let frontLion = document.getElementById('front_lion');
    let backLion = document.getElementById('back_lion');
    front_lion = frontLion;
    back_lion = backLion;

    let frontMouse = document.getElementById('front_mouse');
    let backMouse = document.getElementById('back_mouse');
    front_mouse = frontMouse;
    back_mouse = backMouse;

    let frontTurtle = document.getElementById('front_turtle');
    let backTurtle = document.getElementById('back_turtle');
    front_turtle = frontTurtle;
    back_turtle = backTurtle;

    let frontDolphin = document.getElementById('front_dolphin');
    let backDolphin = document.getElementById('back_dolphin');
    front_dolphin = frontDolphin;
    back_dolphin = backDolphin;

   let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');

    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(animalBWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderClothesWords(){
    let templateFront = '';
    clothesWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlClothesWords = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlClothesWords;

    let frontSkirt = document.getElementById('front_skirt');
    let backSkirt = document.getElementById('back_skirt');
    front_skirt = frontSkirt;
    back_skirt = backSkirt;

    let frontPants = document.getElementById('front_pants');
    let backPants = document.getElementById('back_pants');
    front_pants = frontPants;
    back_pants = backPants;

    let frontBlouse = document.getElementById('front_blouse');
    let backBlouse = document.getElementById('back_blouse');
    front_blouse = frontBlouse;
    back_blouse = backBlouse;

    let frontDress = document.getElementById('front_dress');
    let backDress = document.getElementById('back_dress');
    front_dress = frontDress;
    back_dress = backDress;

    let frontBoot = document.getElementById('front_boot');
    let backBoot = document.getElementById('back_boot');
    front_boot = frontBoot;
    back_boot = backBoot;

    let frontShirt = document.getElementById('front_shirt');
    let backShirt = document.getElementById('back_shirt');
    front_shirt = frontShirt;
    back_shirt = backShirt;

    let frontCoat = document.getElementById('front_coat');
    let backCoat = document.getElementById('back_coat');
    front_coat = frontCoat;
    back_coat = backCoat;

    let frontShoe = document.getElementById('front_shoe');
    let backShoe = document.getElementById('back_shoe');
    front_shoe = frontShoe;
    back_shoe = backShoe;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');

    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(clothesWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }

  renderEmotionWords(){
    let templateFront = '';
    emotionWords.forEach(({word, translation, image}) =>{
      templateFront += `
      <li class='wordCard' id='${word}'>
      <div id="front_${word}" class="front">
      <div class="word_rotate">
        <span>${word}</span>
        <img id="${word}_rotate" class="rotate_img" src='./img/rotate.svg' />
      </div>
      <img src='${image}' />
        
    </div>

    <div id="back_${word}" class="back">
    <img class="category-card__image" src=${image} alt="card">
    <span class="category-card__name">${translation}</span>
    </div>
    </li>
  
  
`;
});
    const htmlEmotionWords = `
      <ul class="category_ul">
        ${templateFront}
      </ul>
    `;
    CARDS_LIST.innerHTML = htmlEmotionWords;
    
    let frontSad = document.getElementById('front_sad');
    let backSad = document.getElementById('back_sad');
    front_sad = frontSad;
    back_sad = backSad;

    let frontAngry = document.getElementById('front_angry');
    let backAngry = document.getElementById('back_angry');
    front_angry = frontAngry;
    back_angry = backAngry;

    let frontHappy = document.getElementById('front_happy');
    let backHappy = document.getElementById('back_happy');
    front_happy = frontHappy;
    back_happy = backHappy;

    let frontTired = document.getElementById('front_tired');
    let backTired = document.getElementById('back_tired');
    front_tired = frontTired;
    back_tired = backTired;

    let frontSurprised = document.getElementById('front_surprised');
    let backSurprised = document.getElementById('back_surprised');
    front_surprised = frontSurprised;
    back_surprised = backSurprised;

    let frontScared = document.getElementById('front_scared');
    let backScared = document.getElementById('back_scared');
    front_scared = frontScared;
    back_scared = backScared;

    let frontSmile = document.getElementById('front_smile');
    let backSmile = document.getElementById('back_smile');
    front_smile = frontSmile;
    back_smile = backSmile;

    let frontLaugh = document.getElementById('front_laugh');
    let backLaugh = document.getElementById('back_laugh');
    front_laugh = frontLaugh;
    back_laugh = backLaugh;

    let wordRotate = document.querySelectorAll('.word_rotate');
    let switchInput = document.getElementById('switch_input');
    let front = document.querySelectorAll('.front');

    switchInput.addEventListener('change', (event)=>{
      const isChecked = event.target.checked;
      if (!isPlayMode()) {
        location.reload();
      }
      wordRotate.forEach(elem => {
        elem.classList.toggle('display_none');
      });
      front.forEach((elem)=>{
        elem.classList.toggle('front_play');
      });
      if(isChecked){
        const playButton = createPlayButton(emotionWords);
        CARDS_LIST.appendChild(playButton);
      } else {
        const playButton = CARDS_LIST.querySelector('.play-button__button');
        if (playButton) {
          CARDS_LIST.removeChild(playButton);
        }
      }
    });
  }
}


const section = new sectionsCards();


function eventTarget() {
  const categoryUl = document.querySelector('.category_ul');
  categoryUl.addEventListener('click', function(event){
    if(event.target.closest('#actionA')){
      section.renderActionA();
      headerText.innerHTML = 'actionA'
    }else if(event.target.closest('#actionB')){
      section.renderActionB();
      headerText.innerHTML = 'actionB'
    }else if(event.target.closest('#actionC')){
      section.renderActionC();
      headerText.innerHTML = 'actionC'
    }else if(event.target.closest('#adjective')){
      section.renderAdjectiveWords()
      headerText.innerHTML = 'adjective'
    }else if (event.target.closest('#animalA')){
      section.renderAnimalAWords()
      headerText.innerHTML = 'animalA'
    }else if(event.target.closest('#animalB')){
      section.renderBnimalAWords()
      headerText.innerHTML = 'animalB'
    }else if(event.target.closest('#clothes')){
        section.renderClothesWords()
        headerText.innerHTML = 'clothes'
    }else if(event.target.closest('#emotion')){
      section.renderEmotionWords()
      headerText.innerHTML = 'emotion'
    }
  });
}
eventTarget()


export {sectionsCards, categoryCard, section, category, front_cry, back_cry, front_dance, back_dance, front_dive, back_dive, front_draw, back_draw, front_fish, back_fish, front_fly, back_fly, front_hug, back_hug, front_jump, back_jump, front_open, back_open, front_play, back_play, front_point, back_point, front_ride, back_ride, front_run, back_run, front_sing, back_sing, front_skip, back_skip, front_swim, back_swim, front_argue, back_argue, front_build, back_build, front_carry, back_carry, front_catch, back_catch, front_drive, back_drive, front_drop, back_drop, front_pull, back_pull, front_push, back_push, front_cat, back_cat, front_chick, back_chick, front_chicken, back_chicken, front_dog, back_dog, front_horse, back_horse, front_pig, back_pig, front_rabbit, back_rabbit, front_sheep, back_sheep, front_big, back_big, front_small, back_small, front_fast, back_fast, front_slow, back_slow, front_friendly, back_friendly, front_unfriendly, back_unfriendly, front_young, back_young, front_old, back_old, front_bird, back_bird, front_fish1, back_fish1, front_frog, back_frog, front_giraffe, back_giraffe, front_lion, back_lion, front_mouse, back_mouse, front_turtle, back_turtle, front_dolphin, back_dolphin, front_skirt, back_skirt, front_pants, back_pants, front_blouse, back_blouse, front_dress, back_dress, front_boot, back_boot, front_shirt, back_shirt, front_coat, back_coat, front_shoe, back_shoe, front_sad, back_sad, front_angry, back_angry, front_happy, back_happy, front_tired, back_tired, front_surprised, back_surprised, front_scared, back_scared, front_smile, back_smile, front_laugh, back_laugh, };
export {CARDS_LIST}; 