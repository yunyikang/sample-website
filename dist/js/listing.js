//Query listing container
const catalogue = document.querySelector('.catalogue');

//Data
const list = [
  'Pasir Ris Green',
  'Hougang View',
  'Bedok Heights',
  'a',
  'b',
  'c',
  'd'
];

//Make catalogue
list.forEach(item => {
  const card = document.createElement('article');
  const cardImg = document.createElement('img');
  const cardName = document.createElement('p');

  card.classList.add('catalogue-item');
  cardImg.src = 'img/image.png';
  cardName.innerHTML = item;

  card.appendChild(cardImg);
  card.appendChild(cardName);

  catalogue.appendChild(card);
});
