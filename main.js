const menuIcon = document.getElementById('menu-id');
menuIcon.addEventListener('click', () => {
  document.getElementById('pop-list').style.width = '100%';
});

const closeIcon = document.getElementById('close-Icon');
closeIcon.addEventListener('click', () => {
  document.getElementById('pop-list').style.width = '0';
});

const openPortfolio = document.getElementById('pop-buttons-1');
openPortfolio.addEventListener('click', () => {
  document.getElementById('pop-list').style.width = '0';
});

const openAbout = document.getElementById('pop-buttons-2');
openAbout.addEventListener('click', () => {
  document.getElementById('pop-list').style.width = '0';
});

const openContact = document.getElementById('pop-buttons-3');
openContact.addEventListener('click', () => {
  document.getElementById('pop-list').style.width = '0';
});