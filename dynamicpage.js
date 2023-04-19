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

},

];

const divPopup = document.getElementById('featured-speakers');
divPopup.innerHTML += `
<div class="container">

<hader>
  <p class="text-center speakers-p"><strong>Featured Speakers </strong> </p> <br>
  <div class="red-bar"></div>
  </header>




</div>
<div class="accordion2">
<div class="container text-enter about-main-programs">

  <div class="column2 ">
    <i><img class="speaker" src="${data[0].image}" alt=""></i>
    <div class="speaker-content">
      <h2>Yochai Benkler</h2>
      <p class="about-title2">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
      <hr>
      <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
        Wealth of Networks in 2006.</p>
    </div>

  </div>

  <div class="column2 ">
    <i><img class="speaker" src="./images/speaker2.png" alt=""></i>
    <div class="speaker-content">
      <h2>SohYeong Noh</h2>
      <p class="about-title2">Director of Art Centre Nabi and a board member of CC </p>
      <hr>
      <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
        Wealth of Networks in 2006.</p>
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
            <i><img class="speaker" src="./images/speaker3.png" alt=""></i>
            <div class="speaker-content">
              <h2>Lila Tretikov</h2>
              <p class="about-title2">Executive Director of the Wikimedia Foundation</p>
              <hr>
              <p class="about-content">Benkler studies commons-bades peer production, and published his semnial
                book The Wealth of Networks in 2006.</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="./images/speaker4.png" alt=""></i>
            <div class="speaker-content">
              <h2>Kilnam Chon</h2>
              <p class="about-title2">Web Page programmer</p>
              <hr>
              <p class="about-content">Benkler studies commons-bades peer production, and published his semnial
                book The Wealth of Networks in 2006.</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="./images/speaker5.png" alt=""></i>
            <div class="speaker-content">
              <h2>Julia Leda</h2>
              <p class="about-title2">President of Young Pirates of Europe</p>
              <hr>
              <p class="about-content">Benkler studies commons-bades peer production, and published his semnial
                book The Wealth of Networks in 2006.</p>
            </div>

          </div>

          <div class="column2 ">
            <i><img class="speaker" src="./images/speaker6.png" alt=""></i>
            <div class="speaker-content">
              <h2>Ryan Merkley</h2>
              <p class="about-title2">CEO of Creative Commons, ex COO of the Mozilla Foundation</p>
              <hr>
              <p class="about-content">Benkler studies commons-bades peer production, and published his semnial
                book The Wealth of Networks in 2006.</p>
            </div>

          </div>
        </div>
      </div>
    </div>

  </div>




</div>

</div>

<div class="badges-contenedor text-center">
<span class="badge  text-bg-danger">Join to our 2023 program, right now!!!</span>
</div>

<div class="more-desktop">
<div class="container text-enter about-main-programs">

  <div class="speaker-content1">
    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker1.png" alt=""></i>
      <div class="speaker-content">
        <h2>Yochai Benkler</h2>
        <p class="about-title2">Berkman Professor of Entrepreneurial Legal Studies at Harvard Law School</p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker2.png" alt=""></i>
      <div class="speaker-content">
        <h2>SohYeong Noh</h2>
        <p class="about-title2">Director of Art Centre Nabi and a board member of CC </p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker3.png" alt=""></i>
      <div class="speaker-content">
        <h2>Lila Tretikov</h2>
        <p class="about-title2">Executive Director of the Wikimedia Foundation</p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>
  </div>

  <div class="speaker-content2">
    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker4.png" alt=""></i>
      <div class="speaker-content">
        <h2>Kilnam Chon</h2>
        <p class="about-title2">Web Page programmer</p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker5.png" alt=""></i>
      <div class="speaker-content">
        <h2>Julia Leda</h2>
        <p class="about-title2">President of Young Pirates of Europe</p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>

    <div class="column2 ">
      <i><img class="speaker" src="./images/speaker6.png" alt=""></i>
      <div class="speaker-content">
        <h2>Ryan Merkley</h2>
        <p class="about-title2">CEO of Creative Commons, ex COO of the Mozilla Foundation</p>
        <hr>
        <p class="about-content">Benkler studies commons-bades peer production, and published his semnial book The
          Wealth of Networks in 2006.</p>
      </div>

    </div>
  </div>`;
