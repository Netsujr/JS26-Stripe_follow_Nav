const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handleEnter() {
  this.classList.add('trigger-enter');
  // the value of this is inherited from the function when using the arrow function
  setTimeout(() => this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
  // console.log('leave');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
