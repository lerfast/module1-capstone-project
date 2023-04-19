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
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC',
    description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
    image: './images/speaker2.png',

},

{
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC',
    description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
    image: './images/speaker2.png',

},

{
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC',
    description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
    image: './images/speaker2.png',

},

{
    name: 'SohYeong Noh',
    title: 'Director of Art Centre Nabi and a board member of CC',
    description: 'Benkler studies commons-bades peer production, and published his semnial book The Wealth of Networks in 2006.',
    image: './images/speaker2.png',

}

];

const divPopup = document.getElementById('accordion2');
divPopup.innerHTML += `
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
            <p class="about-title2">${data[1].title}</p>
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



        
      </div>`;

