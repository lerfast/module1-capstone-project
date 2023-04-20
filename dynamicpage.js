const data = [{
  name: 'Yochai Benkler',
  title: 'Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker1.png',
},

{
  name: 'SohYeong Noh',
  title: 'Director of Art Centre Nabi and a board member of CC',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker2.png',

},

{
  name: 'Lila Tretikov',
  title: 'Executive Director of the Wikimedia Foundation',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker3.png',

},

{
  name: 'Kilnam Chon',
  title: 'Web Page programmer of Google Inc., Apple Inc., Amazon Inc., Netflix Inc.',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker4.png',

},

{
  name: 'Julia Leda',
  title: 'President of Young Pirates of Europe, National Security Expert',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker5.png',

},

{
  name: 'Ryan Merkley',
  title: 'CEO of Creative Commons, ex COO of the Mozilla Foundation',
  description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
  image: './images/speaker6.png',

},

];

const divPopup = document.getElementById('featured-speakers');
divPopup.innerHTML += `
<div class="container">

<div class="main-title">
        <p class="text-center speakers-p"><strong>Featured Speakers</strong><br></p>
        <hr class="hr2">
      </div>





</div>
<div class="accordion2">
<div class="container text-enter about-main-programs">

  <div class="column2 ">
    <i><img class="speaker" src="${data[0].image}" alt=""></i>
    <div class="speaker-content">
      <h2>${data[0].name}</h2>
      <p class="about-title2">${data[0].title}</p>
      <hr>
      <p class="about-content">${data[0].description}</p>
    </div>

  </div>

  <div class="column2 ">
    <i><img class="speaker" src="${data[1].image}" alt=""></i>
    <div class="speaker-content">
      <h2>${data[1].name}</h2>
      <p class="about-title2">${data[1].title} </p>
      <hr>
      <p class="about-content">${data[1].description}</p>
    </div>

  </div>



  </div>

  <div class="accordion" id="accordionExample">

    <div class="accordion-item">
      <h2 class="accordion-header">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
          data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          More
        </button>
      </h2>
      <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          <div class="column2 ">
            <i><img class="speaker" src="${data[2].image}" alt=""></i>
            <div class="speaker-content">
              <h2>${data[2].name}</h2>
              <p class="about-title2">${data[2].title}</p>
              <hr>
              <p class="about-content">${data[2].description}</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="${data[3].image}" alt=""></i>
            <div class="speaker-content">
              <h2>${data[3].name}</h2>
              <p class="about-title2">${data[3].title}</p>
              <hr>
              <p class="about-content">${data[3].description}</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="${data[4].image}" alt=""></i>
            <div class="speaker-content">
              <h2>${data[4].name}</h2>
              <p class="about-title2">${data[4].title}</p>
              <hr>
              <p class="about-content">${data[4].description}</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="${data[5].image}" alt=""></i>
            <div class="speaker-content">
              <h2>${data[5].name}</h2>
              <p class="about-title2">${data[5].title}</p>
              <hr>
              <p class="about-content">${data[5].description}</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>




</div>

</div>



<div class="more-desktop">
<div class="container text-enter about-main-programs">

  <div class="speaker-content1">
    <div class="column2 ">
      <i><img class="speaker" src="${data[0].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[0].name}</h2>
        <p class="about-title2">${data[0].title}</p>
        <hr>
        <p class="about-content">${data[0].description}</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="${data[1].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[1].name}</h2>
        <p class="about-title2">${data[1].title} </p>
        <hr>
        <p class="about-content">${data[1].description}</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="${data[2].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[2].name}</h2>
        <p class="about-title2">${data[2].title}</p>
        <hr>
        <p class="about-content">${data[2].description}</p>
      </div>

    </div>
  </div>

  <div class="speaker-content2">
    <div class="column2 ">
      <i><img class="speaker" src="${data[3].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[3].name}</h2>
        <p class="about-title2">${data[3].title}</p>
        <hr>
        <p class="about-content">${data[3].description}</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="${data[4].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[4].name}</h2>
        <p class="about-title2">${data[4].title}</p>
        <hr>
        <p class="about-content">${data[4].description}</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="${data[5].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[5].name}</h2>
        <p class="about-title2">${data[5].title}</p>
        <hr>
        <p class="about-content">${data[5].description}</p>
      </div>

    </div>
  </div>`;

const speakersContainer = document.querySelectorAll('.speakers');
for (let i = 0; i < data.length; i += 1) {
  const speaker = data[i];
  const speakerDiv = document.createElement('div');
  speakerDiv.classList.add('column2');
  speakerDiv.innerHTML = `
    <i><img class="speaker" src="${speaker.image}" alt=""></i>
    <div class="speaker-content">
      <h2>${speaker.name}</h2>
      <p class="about-title2">${speaker.title}</p>
      <hr>
      <p class="about-content">${speaker.description}</p>
    </div>
  `;
  speakersContainer.forEach((container) => container.appendChild(speakerDiv.cloneNode(true)));
}
