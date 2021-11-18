// Menu-btn

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

// Pop-up see-project
const myProjects = [

  {
    name: 'Tonic',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './images/ex1.png',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './images/ex2.png',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Tonic',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './images/ex3.png',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

  {
    name: 'Multi-Post Stories',
    description: `A daily selection of privately'personalized reads; no accounts or sign-ups
    required.`,
    featuredImage: './images/ex4.png',
    technology: ['html', 'css', 'javascript', 'github', 'ruby', 'bootstrap'],
    liveVersion: '#',
    sourceCode: '#',
  },

];

const seeProjectBtn = document.querySelectorAll('.popup-cards');
seeProjectBtn.forEach((item, i) => {
  item.addEventListener('click', () => {
    const project = myProjects[i];
    const modalMenu = document.querySelector('#pop-up');
    const overlayDiv = document.querySelector('#ovelay');
    const projectTitle = modalMenu.querySelector('.modal-projectname');

    projectTitle.textContent = project.name;
    const projectDesc = modalMenu.querySelectorAll('.modal-details-paragraph');
    projectDesc.textContent = project.description;
    const projectDesktopImage = modalMenu.querySelector('#project-img-modal');
    projectDesktopImage.src = project.featuredImage;
    const liveLink = document.querySelector('.live-link');
    liveLink.href = project.liveVersion;
    const liveSourceCode = document.querySelector('.source-code');
    liveSourceCode.href = project.sourceCode;
    const allTech = document.querySelectorAll('.use');
    allTech.forEach((item, i) => {
      item.textContent = project.technology[i];
    });
    modalMenu.style.display = 'block';
    overlayDiv.style.width = '100%';
  });
});

const modalCancelBtn = document.querySelector('#close-Icon-modal');
modalCancelBtn.addEventListener('click', () => {
  const removeModalContainer = document.querySelector('#pop-up');
  const removeoverlayDIV = document.querySelector('#ovelay');
  removeoverlayDIV.style.width = '0';
  removeModalContainer.style.display = 'none';
});

