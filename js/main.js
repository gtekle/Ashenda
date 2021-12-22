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
    'title': 'H.E',
    'fullName': 'Sahle-Work Zewde',
    'thumbnailImage': './img/president-sahle-work-zewdie.jpg',
    'currentJob': 'President of Federal Democratic Republic of Ethiopia',
    'introduction':
      'Sahle-Work Zewde is an Ethiopian politician and diplomat who is the 5th and current President of Ethiopia since 2018, being the first woman to hold the office. ',
  },
  {
    'title': 'Artist',
    'fullName': 'Solomon Bayre',
    'thumbnailImage': './img/artist-somon-bayre-pic.png',
    'currentJob': 'Renowned Tigrinya Singer',
    'introduction':
      'Solomon Bayre (Wedi Bayre) is a well-known Ethiopian artist/band. Some of his popular songs are Zebibey, Alekum Do, Tium Zena, Serdo',
  },
  {
    'title': 'Artist',
    'fullName': 'Tirhas Tareke',
    'thumbnailImage': './img/artist-tirhase-tareke-pic.png',
    'currentJob': 'Renowned Tigrinya Singer',
    'introduction':
      'Born in Eritrea and raised in Adigrat Tirhas Tareke (Kobeley) Awliey started as a circus performer before becoming a renowned traditional Tigrigna musician.',
  },
  {
    'title': 'Artist',
    'fullName': 'Nigussie Abadi',
    'thumbnailImage': './img/artist-niguse-abadi-pic.png',
    'currentJob': 'Renowned Tigrinya Singer',
    'introduction':
      'Solomon Bayre (aka Zemay) is a well-known Ethiopian artist.',
  },
  {
    'title': 'Artist',
    'fullName': 'Eden Gebreselassie',
    'thumbnailImage': './img/artist-eden-gebreselassie-pic.png',
    'currentJob': 'Renowned Tigrinya Singer',
    'introduction':
      'Eden Gebreselassie is a popular Ethiopian artist, better known with the songs: "Aytneknkni", "Wesene".',
  },
  {
    'title': 'Artist',
    'fullName': 'Timnit Welday',
    'thumbnailImage': './img/artist-timnit-welday-pic.png',
    'currentJob': 'Renowned Tigrinya Singer',
    'introduction':
      'Timnit Welday is a popular Ethiopian artist, better known with the songs: "Ashenda", "Weni", "Wenani".',
  },
];

const featuredSpeakersContainer = document.querySelector('.speaker-container');

speakers.forEach((speaker) => {
  const speakerHTML = document.createElement('div');
  speakerHTML.className = 'speaker';
  speakerHTML.innerHTML = `<div class="thumbnail-image">
              <img
                class="black-white-pattern-bg"
                src="./img/black-and-white-square-mat.png"
                alt=""
              />
              <img
                class="black-white-pattern-bg-blur"
                src="./img/black-and-white-square-mat-blur.png"
                alt=""
              />
              <img
                class="thumbnail"
                src=${speaker.thumbnailImage}
                alt="${speaker.title} ${speaker.fullName} photo"
              />
            </div>
            <div class="speaker-info">
              <h4 class="name">${speaker.title} ${speaker.fullName}</h4>
              <p class="job-title">${speaker.currentJob}</p>
              <p class="program-description">
                ${speaker.introduction}
              </p>
            </div>`;
  featuredSpeakersContainer.appendChild(speakerHTML);
});
