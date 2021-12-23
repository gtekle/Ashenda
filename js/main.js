const NUMBER_OF_SPEAKERS_ON_LOAD = 2;

const mobileNavMenu = document.querySelector('.mobile-nav-menu');
const btnMenuOpen = document.querySelector('.btn-mobile-menu');
const btnMenuClose = document.querySelector('.btn-menu-close');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-list .nav-link');
const body = document.querySelector('body');

btnMenuOpen.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'flex';
  body.style.overflow = 'hidden';
});

btnMenuClose.addEventListener('click', (event) => {
  event.preventDefault();
  mobileNavMenu.style.display = 'none';
  body.style.overflow = '';
});

mobileNavLinks.forEach((navLink) => {
  navLink.addEventListener('click', () => {
    mobileNavMenu.style.display = 'none';
    body.style.overflow = '';
  });
});

const speakers = [
  {
    title: 'H.E',
    fullName: 'Sahle-Work Zewde',
    thumbnailImage: './img/president-sahle-work-zewdie.jpg',
    currentJob: 'President of Federal Democratic Republic of Ethiopia',
    introduction:
      'Sahle-Work Zewde is an Ethiopian politician and diplomat who is the 5th and current President of Ethiopia since 2018, being the first woman to hold the office. ',
  },
  {
    title: 'Artist',
    fullName: 'Solomon Bayre',
    thumbnailImage: './img/artist-somon-bayre-pic.png',
    currentJob: 'Renowned Tigrinya Singer',
    introduction:
      'Solomon Bayre (Wedi Bayre) is a well-known Ethiopian artist/band. Some of his popular songs are Zebibey, Alekum Do, Tium Zena, Serdo',
  },
  {
    title: 'Artist',
    fullName: 'Tirhas Tareke',
    thumbnailImage: './img/artist-tirhase-tareke-pic.png',
    currentJob: 'Renowned Tigrinya Singer',
    introduction:
      'Born in Eritrea and raised in Adigrat Tirhas Tareke (Kobeley) Awliey started as a circus performer before becoming a renowned traditional Tigrigna musician.',
  },
  {
    title: 'Artist',
    fullName: 'Nigussie Abadi',
    thumbnailImage: './img/artist-niguse-abadi-pic.png',
    currentJob: 'Renowned Tigrinya Singer',
    introduction:
      'Nigussie Abadi (aka Zemay) is a well-known Ethiopian artist. Some of his popular songs are Taga and Zemay',
  },
  {
    title: 'Artist',
    fullName: 'Eden Gebreselassie',
    thumbnailImage: './img/artist-eden-gebreselassie-pic.png',
    currentJob: 'Renowned Tigrinya Singer',
    introduction:
      'Eden Gebreselassie is a popular Ethiopian artist, better known with the songs: "Aytneknkni", "Wesene".',
  },
  {
    title: 'Artist',
    fullName: 'Timnit Welday',
    thumbnailImage: './img/artist-timnit-welday-pic.png',
    currentJob: 'Renowned Tigrinya Singer',
    introduction:
      'Timnit Welday is a popular Ethiopian artist, better known with the songs: "Ashenda", "Weni", "Wenani".',
  },
];

const featuredSpeakersContainer = document.querySelector('.speaker-container');

function generateSpeakers(from, to) {
  for (let i = from; i < to; i += 1) {
    const speakerHTML = document.createElement('div');
    speakerHTML.className = 'speaker';
    speakerHTML.innerHTML = `<div class="thumbnail-image">
              <img
                class="black-white-pattern-bg"
                src="./img/black-and-white-square-mat.png"
                alt="black and white squared back shade"
              />
              <img
                class="black-white-pattern-bg-blur"
                src="./img/black-and-white-square-mat-blur.png"
                alt="black and white squared back shade"
              />
              <img
                class="thumbnail"
                src=${speakers[i].thumbnailImage}
                alt="${speakers[i].title} ${speakers[i].fullName} photo"
              />
            </div>
            <div class="speaker-info">
              <h4 class="name">${speakers[i].title} ${speakers[i].fullName}</h4>
              <p class="job-title">${speakers[i].currentJob}</p>
              <p class="introduction">
                ${speakers[i].introduction}
              </p>
            </div>`;
    featuredSpeakersContainer.appendChild(speakerHTML);
  }
}

const btnMore = document.querySelector('.btn-more');

function isScreenSmall() {
  if (window.screen.width < 768) {
    return true;
  }
  return false;
}

window.addEventListener('resize', () => {
  if (isScreenSmall()) {
    btnMore.style.display = 'block';
    featuredSpeakersContainer.innerHTML = '';
    generateSpeakers(0, NUMBER_OF_SPEAKERS_ON_LOAD);
  } else {
    btnMore.style.display = 'none';
    featuredSpeakersContainer.innerHTML = '';
    generateSpeakers(0, speakers.length);
  }
});

window.addEventListener('load', () => {
  if (isScreenSmall()) {
    btnMore.style.display = 'block';
    featuredSpeakersContainer.innerHTML = '';
    generateSpeakers(0, NUMBER_OF_SPEAKERS_ON_LOAD);
  } else {
    btnMore.style.display = 'none';
    featuredSpeakersContainer.innerHTML = '';
    generateSpeakers(0, speakers.length);
  }
});

btnMore.addEventListener('click', () => {
  if (!btnMore.classList.contains('less')) {
    btnMore.classList.add('less');
    btnMore.innerHTML = 'Less <i class="fas fa-angle-up"></i>';
    generateSpeakers(NUMBER_OF_SPEAKERS_ON_LOAD, speakers.length);
  } else {
    btnMore.classList.remove('less');
    btnMore.innerHTML = 'More <i class="fas fa-angle-down"></i>';
    featuredSpeakersContainer.innerHTML = '';
    generateSpeakers(0, NUMBER_OF_SPEAKERS_ON_LOAD);
  }
});
