const data = [
  {
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

const divPopup = document.getElementById('speakers-ul');
for (let i = 0; i < data.length; i += 1) {
  divPopup.innerHTML += `
    <div class="column2">
      <i><img class="speaker" src="${data[i].image}" alt=""></i>
      <div class="speaker-content">
        <h2>${data[i].name}</h2>
        <p class="about-title2">${data[i].title}</p>
        <hr>
        <p class="about-content">${data[i].description}</p>
      </div>
    </div>
  `;
}
