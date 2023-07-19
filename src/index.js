import './styles/styles.css';
import './styles/style.scss';
import { section, sectionsCards, categoryCard, category, CARDS_LIST, front_cry, back_cry, front_dance, back_dance, front_dive, back_dive, front_draw, back_draw, front_fish, back_fish, front_fly, back_fly, front_hug, back_hug, front_jump, back_jump, front_open, back_open, front_play, back_play, front_point, back_point, front_ride, back_ride, front_run, back_run, front_sing, back_sing, front_skip, back_skip, front_swim, back_swim, front_argue, back_argue, front_build, back_build, front_carry, back_carry, front_catch, back_catch, front_drive, back_drive, front_drop, back_drop, front_pull,back_pull, front_push, back_push, front_cat, back_cat, front_chick, back_chick, front_chicken, back_chicken, front_dog, back_dog, front_horse, back_horse, front_pig, back_pig, front_rabbit, back_rabbit, front_sheep, back_sheep, front_big, back_big, front_small, back_small, front_fast, back_fast, front_slow, back_slow, front_friendly, back_friendly, front_unfriendly, back_unfriendly, front_young, back_young, front_old, back_old, front_bird, back_bird, front_fish1, back_fish1, front_frog, back_frog, front_giraffe, back_giraffe, front_lion, back_lion, front_mouse, back_mouse, front_turtle, back_turtle, front_dolphin, back_dolphin, front_skirt, back_skirt, front_pants, back_pants, front_blouse, back_blouse, front_dress, back_dress, front_boot, back_boot, front_shirt, back_shirt, front_coat, back_coat, front_shoe, back_shoe, front_sad, back_sad, front_angry, back_angry, front_happy, back_happy, front_tired, back_tired, front_surprised, back_surprised, front_scared, back_scared, front_smile, back_smile, front_laugh, back_laugh,} from './categoryCard';
import {renderStatisticsToDOM} from './statistics';
import * as words from './words';

const allWords = [...words.actionAWords, ...words.actionBWords,...words.actionCWords,...words.adjectiveWords,...words.animalAWords,...words.animalBWords,...words.clothesWords,...words.emotionWords]

let menuNode = document.querySelector(".dropdown__menu");
let navbarToggler = document.querySelector('.navbar-toggler');
let menu = document.getElementById('menu');
let headerText = document.querySelector('.header__text');

navbarToggler.addEventListener('click', function(){
    this.classList.toggle("is-active");
    mobileMenuToggleByClick();
});


function mobileMenuToggleByClick(){
    function menuOpen() {
      menuNode.classList.add("menu__open");
      menu.classList.add('open');
    }
  
    function menuClose() {
      menuNode.classList.remove("menu__open");
      menu.classList.remove("open");
    }
    
    if (menuNode.classList.contains('menu__open')) {
         menuClose()
        } 
      else { 
        menuOpen()
    }
  }


  function dropdownTarget() {
    const dropDownMenuLink = document.querySelector('.dropdown__menu-list');
    dropDownMenuLink.addEventListener('click', function(event){
      if(event.target.closest('#actionA')){
        section.renderActionA();
        headerText.innerHTML = 'ActionA';
      }else if(event.target.closest('#actionB')){
        section.renderActionB();
        headerText.innerHTML = 'ActionB';
      }else if(event.target.closest('#actionC')){
        section.renderActionC();
        headerText.innerHTML = 'ActionC';
      }else if(event.target.closest('#adjective')){
        section.renderAdjectiveWords()
        headerText.innerHTML = 'Adjective';
      }else if (event.target.closest('#animalA')){
        section.renderAnimalAWords()
        headerText.innerHTML = 'AnimalA';
      }else if(event.target.closest('#animalB')){
        section.renderBnimalAWords()
        headerText.innerHTML = 'AnimalB';
      }else if(event.target.closest('#clothes')){
          section.renderClothesWords()
          headerText.innerHTML = 'Clothes';
      }else if(event.target.closest('#emotion')){
        section.renderEmotionWords()
        headerText.innerHTML = 'Emotion';
      }else if (event.target.closest('#menu')){
        category.render();
        headerText.innerHTML = 'Main page';
      }else if (event.target.closest('#statistics')){
        renderStatisticsToDOM(allWords)
      }
    });
  }
 dropdownTarget();
function audioListener() {
  CARDS_LIST.addEventListener('click', function(event) {
    // Проверяем состояние переключателя
    let switchInput = document.getElementById('switch_input');
    if (!switchInput.checked) {
      // Переключатель неактивен (снят), воспроизводим звук
      if (event.target.closest('#cry')) {
        const audio = new Audio('./audio/actionA/cry.mp3');
        audio.play();
      } else if (event.target.closest('#dance')) {
        const audio = new Audio('./audio/actionA/dance.mp3');
        audio.play();
      } else if(event.target.closest('#dive')){
        const audio = new Audio('./audio/actionA/dive.mp3');
        audio.play()
      } else if(event.target.closest('#draw')){
        const audio = new Audio('./audio/actionA/draw.mp3');
        audio.play()
      }else if (event.target.closest('#fish')){
        const audio = new Audio('./audio/actionA/fish.mp3');
        audio.play()
      }else if(event.target.closest('#hug')){
        const audio = new Audio('./audio/actionA/hug.mp3');
        audio.play()
      }else if(event.target.closest('#jump')){
        const audio = new Audio('./audio/actionA/jump.mp3');
        audio.play()
      }else if(event.target.closest('#fly')){
        const audio = new Audio('./audio/actionA/fly.mp3');
        audio.play()
      }else if(event.target.closest('#open')){
        const audio = new Audio('./audio/actionB/open.mp3');
        audio.play()
      }else if(event.target.closest('#play')){
        const audio = new Audio('./audio/actionB/play.mp3');
        audio.play()
      }else if(event.target.closest('#point')){
        const audio = new Audio('./audio/actionB/point.mp3');
        audio.play()
      }else if(event.target.closest('#ride')){
        const audio = new Audio('./audio/actionB/ride.mp3');
        audio.play()
      }else if(event.target.closest('#run')){
        const audio = new Audio('./audio/actionB/run.mp3');
        audio.play()
      }else if(event.target.closest('#sing')){
        const audio = new Audio('./audio/actionB/sing.mp3');
        audio.play()
      }else if(event.target.closest('#skip')){
        const audio = new Audio('./audio/actionB/skip.mp3');
        audio.play()
      }else if(event.target.closest('#swim')){
        const audio = new Audio('./audio/actionB/swim.mp3');
        audio.play()
      }else if(event.target.closest('#argue')){
        const audio = new Audio('./audio/actionC/argue.mp3');
        audio.play()
      }else if(event.target.closest('#build')){
        const audio = new Audio('./audio/actionC/build.mp3');
        audio.play()
      }else if(event.target.closest('#carry')){
        const audio = new Audio('./audio/actionC/carry.mp3');
        audio.play()
      }else if(event.target.closest('#catch')){
        const audio = new Audio('./audio/actionC/catch.mp3');
        audio.play()
      }else if(event.target.closest('#drive')){
        const audio = new Audio('./audio/actionC/drive.mp3');
        audio.play()
      }else if(event.target.closest('#drop')){
        const audio = new Audio('./audio/actionC/drop.mp3');
        audio.play()
      }else if(event.target.closest('#pull')){
        const audio = new Audio('./audio/actionC/pull.mp3');
        audio.play()
      }else if(event.target.closest('#push')){
        const audio = new Audio('./audio/actionC/push.mp3');
        audio.play()
      }else if(event.target.closest('#big')){
        const audio = new Audio('./audio/adjective/big.mp3');
        audio.play()
      }else if(event.target.closest('#small')){
        const audio = new Audio('./audio/adjective/small.mp3');
        audio.play()
      }else if(event.target.closest('#fast')){
        const audio = new Audio('./audio/adjective/fast.mp3');
        audio.play()
      }else if(event.target.closest('#slow')){
        const audio = new Audio('./audio/adjective/slow.mp3');
        audio.play()
      }else if(event.target.closest('#friendly')){
        const audio = new Audio('./audio/adjective/friendly.mp3');
        audio.play()
      }else if(event.target.closest('#unfriendly')){
        const audio = new Audio('./audio/adjective/unfriendly.mp3');
        audio.play()
      }else if(event.target.closest('#young')){
        const audio = new Audio('./audio/adjective/young.mp3');
        audio.play()
      }else if(event.target.closest('#old')){
        const audio = new Audio('./audio/adjective/old.mp3');
        audio.play()
      }else if(event.target.closest('#cat')){
        const audio = new Audio('./audio/animalA/cat.mp3');
        audio.play()
      }else if(event.target.closest('#chick')){
        const audio = new Audio('./audio/animalA/chick.mp3');
        audio.play()
      }else if(event.target.closest('#chicken')){
        const audio = new Audio('./audio/animalA/chicken.mp3');
        audio.play()
      }else if(event.target.closest('#dog')){
        const audio = new Audio('./audio/animalA/dog.mp3');
        audio.play()
      }else if(event.target.closest('#horse')){
        const audio = new Audio('./audio/animalA/horse.mp3');
        audio.play()
      }else if(event.target.closest('#pig')){
        const audio = new Audio('./audio/animalA/pig.mp3');
        audio.play()
      }else if(event.target.closest('#rabbit')){
        const audio = new Audio('./audio/animalA/rabbit.mp3');
        audio.play()
      }else if(event.target.closest('#sheep')){
        const audio = new Audio('./audio/animalA/sheep.mp3');
        audio.play()
      }else if(event.target.closest('#bird')){
        const audio = new Audio('./audio/animalB/bird.mp3');
        audio.play()
      }else if(event.target.closest('#fish')){
        const audio = new Audio('./audio/animalB/fish.mp3');
        audio.play()
      }else if(event.target.closest('#frog')){
        const audio = new Audio('./audio/animalB/frog.mp3');
        audio.play()
      }else if(event.target.closest('#giraffe')){
        const audio = new Audio('./audio/animalB/giraffe.mp3');
        audio.play()
      }else if(event.target.closest('#lion')){
        const audio = new Audio('./audio/animalB/lion.mp3');
        audio.play()
      }else if(event.target.closest('#mouse')){
        const audio = new Audio('./audio/animalB/mouse.mp3');
        audio.play()
      }else if(event.target.closest('#turtle')){
        const audio = new Audio('./audio/animalB/turtle.mp3');
        audio.play()
      }else if(event.target.closest('#dolphin')){
        const audio = new Audio('./audio/animalB/dolphin.mp3');
        audio.play()
      }else if(event.target.closest('#skirt')){
        const audio = new Audio('./audio/clothes/skirt.mp3');
        audio.play()
      }else if(event.target.closest('#pants')){
        const audio = new Audio('./audio/clothes/pants.mp3');
        audio.play()
      }else if(event.target.closest('#blouse')){
        const audio = new Audio('./audio/clothes/blouse.mp3');
        audio.play()
      }else if(event.target.closest('#dress')){
        const audio = new Audio('./audio/clothes/dress.mp3');
        audio.play()
      }else if(event.target.closest('#boot')){
        const audio = new Audio('./audio/clothes/boot.mp3');
        audio.play()
      }else if(event.target.closest('#shirt')){
        const audio = new Audio('./audio/clothes/shirt.mp3');
        audio.play()
      }else if(event.target.closest('#coat')){
        const audio = new Audio('./audio/clothes/coat.mp3');
        audio.play()
      }else if(event.target.closest('#shoe')){
        const audio = new Audio('./audio/clothes/shoe.mp3');
        audio.play()
      }else if(event.target.closest('#sad')){
        const audio = new Audio('./audio/emotion/sad.mp3');
        audio.play()
      }else if(event.target.closest('#angry')){
        const audio = new Audio('./audio/emotion/angry.mp3');
        audio.play()
      }else if(event.target.closest('#happy')){
        const audio = new Audio('./audio/emotion/happy.mp3');
        audio.play()
      }else if(event.target.closest('#tired')){
        const audio = new Audio('./audio/emotion/tired.mp3');
        audio.play()
      }else if(event.target.closest('#surprised')){
        const audio = new Audio('./audio/emotion/surprised.mp3');
        audio.play()
      }else if(event.target.closest('#scared')){
        const audio = new Audio('./audio/emotion/scared.mp3');
        audio.play()
      }else if(event.target.closest('#smile')){
        const audio = new Audio('./audio/emotion/smile.mp3');
        audio.play()
      }else if(event.target.closest('#laugh')){
        const audio = new Audio('./audio/emotion/laugh.mp3');
        audio.play()
      }
      // Добавьте остальные условия для остальных звуков
    }
  });
}

audioListener();
 
 
function rotateListener(){
  CARDS_LIST.addEventListener('click', function(event){
    if(event.target.closest('#cry_rotate')){
      front_cry.classList.add("front_rotate");
      back_cry.classList.add("back_rotate");
      back_cry.addEventListener('mouseleave', () =>{
        front_cry.classList.remove("front_rotate");
        back_cry.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#dance_rotate')){
      front_dance.classList.add("front_rotate");
      back_dance.classList.add("back_rotate");
      back_dance.addEventListener('mouseleave', () =>{
        front_dance.classList.remove("front_rotate");
        back_dance.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#dive_rotate')){
      front_dive.classList.add("front_rotate");
      back_dive.classList.add("back_rotate");
      back_dive.addEventListener('mouseleave', () =>{
        front_dive.classList.remove("front_rotate");
        back_dive.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#draw_rotate')){
      front_draw.classList.add("front_rotate");
      back_draw.classList.add("back_rotate");
      back_draw.addEventListener('mouseleave', () =>{
        front_draw.classList.remove("front_rotate");
        back_draw.classList.remove("back_rotate");
      })
    }else if (event.target.closest('#fish_rotate')){
      front_fish.classList.add("front_rotate");
      back_fish.classList.add("back_rotate");
      back_fish.addEventListener('mouseleave', () =>{
        front_fish.classList.remove("front_rotate");
        back_fish.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#hug_rotate')){
      front_hug.classList.add("front_rotate");
      back_hug.classList.add("back_rotate");
      back_hug.addEventListener('mouseleave', () =>{
        front_hug.classList.remove("front_rotate");
        back_hug.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#jump_rotate')){
      front_jump.classList.add("front_rotate");
      back_jump.classList.add("back_rotate");
      back_jump.addEventListener('mouseleave', () =>{
        front_jump.classList.remove("front_rotate");
        back_jump.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#fly_rotate')){
      front_fly.classList.add("front_rotate");
      back_fly.classList.add("back_rotate");
      back_fly.addEventListener('mouseleave', () =>{
        front_fly.classList.remove("front_rotate");
        back_fly.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#open_rotate')){
      front_open.classList.add("front_rotate");
      back_open.classList.add("back_rotate");
      back_open.addEventListener('mouseleave', () =>{
        front_open.classList.remove("front_rotate");
        back_open.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#play_rotate')){
      front_play.classList.add("front_rotate");
      back_play.classList.add("back_rotate");
      back_play.addEventListener('mouseleave', () =>{
        front_play.classList.remove("front_rotate");
        back_play.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#point_rotate')){
      front_point.classList.add("front_rotate");
      back_point.classList.add("back_rotate");
      back_point.addEventListener('mouseleave', () =>{
        front_point.classList.remove("front_rotate");
        back_point.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#ride_rotate')){
      front_ride.classList.add("front_rotate");
      back_ride.classList.add("back_rotate");
      back_ride.addEventListener('mouseleave', () =>{
        front_ride.classList.remove("front_rotate");
        back_ride.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#run_rotate')){
      front_run.classList.add("front_rotate");
      back_run.classList.add("back_rotate");
      back_run.addEventListener('mouseleave', () =>{
        front_run.classList.remove("front_rotate");
        back_run.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#sing_rotate')){
      front_sing.classList.add("front_rotate");
      back_sing.classList.add("back_rotate");
      back_sing.addEventListener('mouseleave', () =>{
        front_sing.classList.remove("front_rotate");
        back_sing.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#skip_rotate')){
      front_skip.classList.add("front_rotate");
      back_skip.classList.add("back_rotate");
      back_skip.addEventListener('mouseleave', () =>{
        front_skip.classList.remove("front_rotate");
        back_skip.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#swim_rotate')){
      front_swim.classList.add("front_rotate");
      back_swim.classList.add("back_rotate");
      back_swim.addEventListener('mouseleave', () =>{
        front_swim.classList.remove("front_rotate");
        back_swim.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#argue_rotate')){
      front_argue.classList.add("front_rotate");
      back_argue.classList.add("back_rotate");
      back_argue.addEventListener('mouseleave', () =>{
        front_argue.classList.remove("front_rotate");
        back_argue.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#build_rotate')){
      front_build.classList.add("front_rotate");
      back_build.classList.add("back_rotate");
      back_build.addEventListener('mouseleave', () =>{
        front_build.classList.remove("front_rotate");
        back_build.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#carry_rotate')){
      front_carry.classList.add("front_rotate");
      back_carry.classList.add("back_rotate");
      back_carry.addEventListener('mouseleave', () =>{
        front_carry.classList.remove("front_rotate");
        back_carry.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#catch_rotate')){
      front_catch.classList.add("front_rotate");
      back_catch.classList.add("back_rotate");
      back_catch.addEventListener('mouseleave', () =>{
        front_catch.classList.remove("front_rotate");
        back_catch.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#drive_rotate')){
      front_drive.classList.add("front_rotate");
      back_drive.classList.add("back_rotate");
      back_drive.addEventListener('mouseleave', () =>{
        front_drive.classList.remove("front_rotate");
        back_drive.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#drop_rotate')){
      front_drop.classList.add("front_rotate");
      back_drop.classList.add("back_rotate");
      back_drop.addEventListener('mouseleave', () =>{
        front_drop.classList.remove("front_rotate");
        back_drop.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#pull_rotate')){
      front_pull.classList.add("front_rotate");
      back_pull.classList.add("back_rotate");
      back_pull.addEventListener('mouseleave', () =>{
        front_pull.classList.remove("front_rotate");
        back_pull.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#push_rotate')){
      front_push.classList.add("front_rotate");
      back_push.classList.add("back_rotate");
      back_push.addEventListener('mouseleave', () =>{
        front_push.classList.remove("front_rotate");
        back_push.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#cat_rotate')){
      front_cat.classList.add("front_rotate");
      back_cat.classList.add("back_rotate");
      back_cat.addEventListener('mouseleave', () =>{
        front_cat.classList.remove("front_rotate");
        back_cat.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#chick_rotate')){
      front_chick.classList.add("front_rotate");
      back_chick.classList.add("back_rotate");
      back_chick.addEventListener('mouseleave', () =>{
        front_chick.classList.remove("front_rotate");
        back_chick.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#chicken_rotate')){
      front_chicken.classList.add("front_rotate");
      back_chicken.classList.add("back_rotate");
      back_chicken.addEventListener('mouseleave', () =>{
        front_chicken.classList.remove("front_rotate");
        back_chicken.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#dog_rotate')){
      front_dog.classList.add("front_rotate");
      back_dog.classList.add("back_rotate");
      back_dog.addEventListener('mouseleave', () =>{
        front_dog.classList.remove("front_rotate");
        back_dog.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#horse_rotate')){
      front_horse.classList.add("front_rotate");
      back_horse.classList.add("back_rotate");
      back_horse.addEventListener('mouseleave', () =>{
        front_horse.classList.remove("front_rotate");
        back_horse.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#pig_rotate')){
      front_pig.classList.add("front_rotate");
      back_pig.classList.add("back_rotate");
      back_pig.addEventListener('mouseleave', () =>{
        front_pig.classList.remove("front_rotate");
        back_pig.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#rabbit_rotate')){
      front_rabbit.classList.add("front_rotate");
      back_rabbit.classList.add("back_rotate");
      back_rabbit.addEventListener('mouseleave', () =>{
        front_rabbit.classList.remove("front_rotate");
        back_rabbit.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#pig_rotate')){
      front_pig.classList.add("front_rotate");
      back_pig.classList.add("back_rotate");
      back_pig.addEventListener('mouseleave', () =>{
        front_pig.classList.remove("front_rotate");
        back_pig.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#rabbit_rotate')){
      front_rabbit.classList.add("front_rotate");
      back_rabbit.classList.add("back_rotate");
      back_rabbit.addEventListener('mouseleave', () =>{
        front_rabbit.classList.remove("front_rotate");
        back_rabbit.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#sheep_rotate')){
      front_sheep.classList.add("front_rotate");
      back_sheep.classList.add("back_rotate");
      back_sheep.addEventListener('mouseleave', () =>{
        front_sheep.classList.remove("front_rotate");
        back_sheep.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#bird_rotate')){
      front_bird.classList.add("front_rotate");
      back_bird.classList.add("back_rotate");
      back_bird.addEventListener('mouseleave', () =>{
        front_bird.classList.remove("front_rotate");
        back_bird.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#fishrotate')){
      
      front_fish1.classList.add("front_rotate");
      back_fish1.classList.add("back_rotate");
      back_fish1.addEventListener('mouseleave', () =>{
        front_fish1.classList.remove("front_rotate");
        back_fish1.classList.remove("back_rotate");
        console.log(front_fish1)
      })
    }else if(event.target.closest('#frog_rotate')){
      front_frog.classList.add("front_rotate");
      back_frog.classList.add("back_rotate");
      back_frog.addEventListener('mouseleave', () =>{
        front_frog.classList.remove("front_rotate");
        back_frog.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#giraffe_rotate')){
      front_giraffe.classList.add("front_rotate");
      back_giraffe.classList.add("back_rotate");
      back_giraffe.addEventListener('mouseleave', () =>{
        front_giraffe.classList.remove("front_rotate");
        back_giraffe.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#lion_rotate')){
      front_lion.classList.add("front_rotate");
      back_lion.classList.add("back_rotate");
      back_lion.addEventListener('mouseleave', () =>{
        front_lion.classList.remove("front_rotate");
        back_lion.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#mouse_rotate')){
      front_mouse.classList.add("front_rotate");
      back_mouse.classList.add("back_rotate");
      back_mouse.addEventListener('mouseleave', () =>{
        front_mouse.classList.remove("front_rotate");
        back_mouse.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#turtle_rotate')){
      front_turtle.classList.add("front_rotate");
      back_turtle.classList.add("back_rotate");
      back_turtle.addEventListener('mouseleave', () =>{
        front_turtle.classList.remove("front_rotate");
        back_turtle.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#dolphin_rotate')){
      front_dolphin.classList.add("front_rotate");
      back_dolphin.classList.add("back_rotate");
      back_dolphin.addEventListener('mouseleave', () =>{
        front_dolphin.classList.remove("front_rotate");
        back_dolphin.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#skirt_rotate')){
      front_skirt.classList.add("front_rotate");
      back_skirt.classList.add("back_rotate");
      back_skirt.addEventListener('mouseleave', () =>{
        front_skirt.classList.remove("front_rotate");
        back_skirt.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#pants_rotate')){
      front_pants.classList.add("front_rotate");
      back_pants.classList.add("back_rotate");
      back_pants.addEventListener('mouseleave', () =>{
        front_pants.classList.remove("front_rotate");
        back_pants.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#blouse_rotate')){
      front_blouse.classList.add("front_rotate");
      back_blouse.classList.add("back_rotate");
      back_blouse.addEventListener('mouseleave', () =>{
        front_blouse.classList.remove("front_rotate");
        back_blouse.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#dress_rotate')){
      front_dress.classList.add("front_rotate");
      back_dress.classList.add("back_rotate");
      back_dress.addEventListener('mouseleave', () =>{
        front_dress.classList.remove("front_rotate");
        back_dress.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#boot_rotate')){
      front_boot.classList.add("front_rotate");
      back_boot.classList.add("back_rotate");
      back_boot.addEventListener('mouseleave', () =>{
        front_boot.classList.remove("front_rotate");
        back_boot.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#shirt_rotate')){
      front_shirt.classList.add("front_rotate");
      back_shirt.classList.add("back_rotate");
      back_shirt.addEventListener('mouseleave', () =>{
        front_shirt.classList.remove("front_rotate");
        back_shirt.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#coat_rotate')){
      front_coat.classList.add("front_rotate");
      back_coat.classList.add("back_rotate");
      back_coat.addEventListener('mouseleave', () =>{
        front_coat.classList.remove("front_rotate");
        back_coat.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#shoe_rotate')){
      front_shoe.classList.add("front_rotate");
      back_shoe.classList.add("back_rotate");
      back_shoe.addEventListener('mouseleave', () =>{
        front_shoe.classList.remove("front_rotate");
        back_shoe.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#sad_rotate')){
      front_sad.classList.add("front_rotate");
      back_sad.classList.add("back_rotate");
      back_sad.addEventListener('mouseleave', () =>{
        front_sad.classList.remove("front_rotate");
        back_sad.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#angry_rotate')){
      front_angry.classList.add("front_rotate");
      back_angry.classList.add("back_rotate");
      back_angry.addEventListener('mouseleave', () =>{
        front_angry.classList.remove("front_rotate");
        back_angry.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#happy_rotate')){
      front_happy.classList.add("front_rotate");
      back_happy.classList.add("back_rotate");
      back_happy.addEventListener('mouseleave', () =>{
        front_happy.classList.remove("front_rotate");
        back_happy.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#tired_rotate')){
      front_tired.classList.add("front_rotate");
      back_tired.classList.add("back_rotate");
      back_tired.addEventListener('mouseleave', () =>{
        front_tired.classList.remove("front_rotate");
        back_tired.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#surprised_rotate')){
      front_surprised.classList.add("front_rotate");
      back_surprised.classList.add("back_rotate");
      back_surprised.addEventListener('mouseleave', () =>{
        front_surprised.classList.remove("front_rotate");
        back_surprised.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#scared_rotate')){
      front_scared.classList.add("front_rotate");
      back_scared.classList.add("back_rotate");
      back_scared.addEventListener('mouseleave', () =>{
        front_scared.classList.remove("front_rotate");
        back_scared.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#smile_rotate')){
      front_smile.classList.add("front_rotate");
      back_smile.classList.add("back_rotate");
      back_smile.addEventListener('mouseleave', () =>{
        front_smile.classList.remove("front_rotate");
        back_smile.classList.remove("back_rotate");
      })
    }else if(event.target.closest('#laugh_rotate')){
      front_laugh.classList.add("front_rotate");
      back_laugh.classList.add("back_rotate");
      back_laugh.addEventListener('mouseleave', () =>{
        front_laugh.classList.remove("front_rotate");
        back_laugh.classList.remove("back_rotate");
      })
    }
    });
}
rotateListener();


