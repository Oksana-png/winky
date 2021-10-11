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
 }
});

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


// $(document).ready(function(){
//   $('.main-slider').slick();
// });