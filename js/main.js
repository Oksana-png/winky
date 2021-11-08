const buttonOpenMenu = document.querySelector('.button-open-nav');
const buttonOpenAccount = document.querySelector('.button-open-account');
const chatMessage = document.querySelector('.chat-messages');


const openMenu = () => {
  document.querySelector('.nav').classList.add('nav-open');
};
const closeMenu = () => {
  document.querySelector('.nav').classList.remove('nav-open');
  
};
const openMenuAccount = () => {
  document.querySelector('.header').classList.add('nav-open');
};
const closeMenuAccount = () => {
  document.querySelector('.header').classList.remove('nav-open');
}
const navigationAccount = (str) => {
  const navAccount = document.querySelectorAll('.profile-nav__item');
  const buttonActive = document.querySelectorAll(`[data-nav="${str}"]`);
  const allBlock = document.querySelectorAll('.profile > div');
  allBlock.forEach((item, i) => {
    if (i === 0) {
      return;
    }
    item.style.display = 'none';
  });

  navAccount.forEach(item => {
    item.classList.remove('profile-nav__item--active');
  });

  buttonActive.forEach(item => {
    item.classList.add('profile-nav__item--active');
  });

  if (str === "account") {
    document.querySelector('.profile-info').style.display = 'flex';
    document.querySelector('.wheel-acc').style.display = 'block';
  } else if (str === "history") {
    document.querySelector('.history-play').style.display = 'block';
    document.querySelector('.transactions').style.display = 'block';
  } else if (str === "safety") {
    document.querySelector('.safety').style.display = 'flex';
  } else if (str === "referral-program") {
    document.querySelector('.referral-program').style.display = 'flex';
  }
  document.querySelector('.header').classList.remove('nav-open');
};

// показать уведомление
const showNotification = (str) => {
  let notification = document.createElement('div');
  notification.classList.add('notification');

  notification.innerHTML = `
    <h4 class="notification__title">Пополнение</h4>
    <span class="notification__text">Ваш счет пополнен на ${str}</span>
  `;

  document.body.append(notification);
  setTimeout(() => {
    document.querySelector('.notification').style.animation = 'delete 1.5s 1';
    setTimeout(() => {
      notification.remove();
    }, 1500);
  }, 4000);
};
// открывает модальное окно с телеграмом
const openTelegram = () => {
  document.querySelector('.telegram').classList.add('modal-open');
};
// закрывает модальное окно с телеграмом
const closeTelegram = () => {
  document.querySelector('.telegram').classList.remove('modal-open');
};

const openModalMoney = (elem) => {
  const buttonsMoney = document.querySelectorAll('.modal-money__button-nav');
  const contents = document.querySelectorAll('.modal-money-form');

  buttonsMoney.forEach((item, i) => {

    
    if (item !== elem) {
      item.classList.remove('modal-money__button-nav--active');
      contents[i].classList.remove('modal-money-form--open');
    } else {
      item.classList.add('modal-money__button-nav--active');
      contents[i].classList.add('modal-money-form--open');
    }
  });
};

buttonOpenMenu.addEventListener('click', openMenu);
buttonOpenAccount.addEventListener('click', openMenuAccount);

document.addEventListener('click', (e) => {
 const target = e.target;

 if (target.closest('.nav-shadow-mobile')) {
  closeMenu();
 } else if (target.closest('.header-shadow-mobile')) {
  closeMenuAccount();
 } else if (target.closest('.profile-nav__item')) {
  navigationAccount(target.closest('.profile-nav__item').dataset.nav);
 } else if (target.classList.contains('telegram')) {
   closeTelegram();
 } else if (target.closest('.chat')) {
   openTelegram();
 } else if (target.closest('.modal-money__button-nav')) {
   if (target.closest('.modal-money__button-nav').classList.contains('modal-money__button-nav--active')) {
     return;
   }
   openModalMoney(target.closest('.modal-money__button-nav'));
 }
});

document.querySelector('.dice-field__input').addEventListener('input', function () {
  document.querySelector('style').remove();

  const th = document.querySelector('.dice-field__input');
  let val = (th.value - th.getAttribute('min')) / (th.getAttribute('max') - th.getAttribute('min'));
  let st = document.createElement('style');
  
  st.innerHTML = `.dice-field__input[type='range']::-webkit-slider-runnable-track {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']:focus::-webkit-slider-runnable-track {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']::-moz-range-track {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']::-ms-fill-lower {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']::-ms-fill-upper {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']:focus::-ms-fill-lower {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
                  .dice-field__input[type='range']:focus::-ms-fill-upper {background-image: -webkit-gradient(linear, left top, right top, color-stop(${val}, #179F3D), color-stop(${val}, #FF6166));}
  `;

  document.body.prepend(st);
})


chatMessage.addEventListener('scroll', () => {
  const blurEffect = document.querySelector('.blur');
  if ((chatMessage.clientHeight + chatMessage.scrollTop) >= chatMessage.scrollHeight) {
    blurEffect.classList.remove('blur-on');
  } else {
    blurEffect.classList.add('blur-on');
  }
});

const swiper = new Swiper('.swiper', {
  loop: true,

  // If we need pagination
  pagination: {
    el: '.pagination',
    type: 'bullets',
    bulletClass: 'pagination-elem',
    bulletActiveClass: 'pagination-elem-active',
    bulletElement: 'div',
    clickable: true,
    
  },
});

showNotification('1500$');

const sectors = [
  
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', // СИНИЙ
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', // СИНИЙ
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий 
  },
  {
    color: '#E2E706', //желтый
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий 
  },
  {
    color: '#E2E706', //желтый
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый 
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#000C26', //темный
  },
  {
    color: '#2D55E1', //синий  //
  },
  {
    color: '#000C26', //темный //
  },
  {
    color: '#329005', //зеленый
  },
  {
    color: '#DE564D', //красный
  },
];

var results = [
  {name: "Удовлетворён", count: 1, color: "lightblue"},
  {name: "Нейтральное", count: 1, color: "lightgreen"},
  {name: "Не удовлетворён", count: 1, color: "pink"},
  {name: "Без комментариев", count: 1, color: "silver"}
];
const wheel = document.querySelector('.wheel-spiner');
const ctx = wheel.getContext('2d');
const deg = 360 / sectors.length;





var total = sectors.reduce(function(sum, choice) {
  
  return sum + 1; //choice.count
}, 0);

// Start at the top
var currentAngle = -0.5 * Math.PI;
sectors.forEach(function(result) {
  var sliceAngle = (1 / total) * 2 * Math.PI;
  ctx.beginPath();
  // center=100,100, radius=100
  // from current angle, clockwise by slice's angle
  ctx.arc(135, 135, 135,
         currentAngle, currentAngle + sliceAngle);
  currentAngle += sliceAngle;
  ctx.lineTo(135, 135);
  ctx.fillStyle = result.color;
  ctx.fill();
});



const rotateWheel = (sector) => {
  sector = sector - 1;
  let plus = 0;
  const turnovers = Math.floor(Math.random() * 2 + 2) * 360;
  
  let degs = parseInt(wheel.style.transform.replace(/[^0-9]/g, '')) ? parseInt(wheel.style.transform.replace(/[^0-9]/g, '')) : 0; // старое значение угла
  let start = degs + turnovers;


  let sectorDeg = sector * deg;
  if (start % 360 !== 0) {

    if (start % 360 > sectorDeg) {
      console.log(sectorDeg);
      plus = (360 - start % 360) + sectorDeg;
      
      wheel.style.transform = `rotate(${Math.floor(start + plus)}deg)`;

      return;
    } else {
      plus = start % 360 - sectorDeg;
      
      wheel.style.transform = `rotate(${Math.floor(start + plus)}deg)`;
      return;
    }
    
  }

  wheel.style.transform = `rotate(${Math.floor(start + sectorDeg)}deg)`;
  
};

rotateWheel(34);

setTimeout(() => { rotateWheel(16) }, 6000)