"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const IMAGES = [
  { src: "images/astronaut.jpg", id: "astronaut" },
  { src: "images/flower.jpg", id: "flower" },
  { src: "images/cat.jpg", id: "cat" },
  { src: "images/dog.jpg", id: "dog" },
  { src: "images/donuts.jpg", id: "donuts" },
  { src: "images/ice_cream.jpg", id: "ice-cream" },
  { src: "images/oranges.jpg", id: "oranges" },
  { src: "images/pineapple_with_shades.jpg", id: "pineapple" },
  { src: "images/astronaut.jpg", id: "astronaut" },
  { src: "images/flower.jpg", id: "flower" },
  { src: "images/cat.jpg", id: "cat" },
  { src: "images/dog.jpg", id: "dog" },
  { src: "images/donuts.jpg", id: "donuts" },
  { src: "images/ice_cream.jpg", id: "ice-cream" },
  { src: "images/oranges.jpg", id: "oranges" },
  { src: "images/pineapple_with_shades.jpg", id: "pineapple" }
];
const backOfCardImage = "images/card_design.jpg";

const images = shuffle(IMAGES);

const gameBoard = document.querySelector('#game');

createCards(images);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}

/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - a click event listener for each card to handleCardClick
 */

function createCards(images) {
  const gameBoard = document.getElementById("game");

  for (let image of images) {
    const card = document.createElement('div');
    const faceOfCard = document.createElement('img');
    const backOfCard = document.createElement('img');

    card.classList.add('card');
    faceOfCard.classList.add('faceOfCard');
    backOfCard.classList.add('backOfCard');

    faceOfCard.setAttribute('src', image.src);
    faceOfCard.setAttribute('id', image.id);
    backOfCard.setAttribute('src', backOfCardImage);

    card.append(faceOfCard, backOfCard);
    gameBoard.append(card);
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  card.classList.toggle('flipCard');
  card.classList.toggle('faceUp');
}

/** Flip a card face-down. */

function unFlipCard(card) {
  card.classList.toggle('flipCard');
  card.classList.toggle('faceUp');
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(e) {
  if (e.target.classList.contains('card')) {
    const card = e.target;
    if (!card.classList.contains('faceUp')) {
      flipCard(card);
    } else {
      unFlipCard(card);
    }
    checkMatch(e);
  }
}

/** Check to see if flipped cards match */

function checkMatch(e) {
  const faceUpCards = gameBoard.querySelectorAll('.faceUp');
  if (faceUpCards.length === 2) {
    if (faceUpCards[0].firstChild.getAttribute('id') === faceUpCards[1].firstChild.getAttribute('id')) {
      faceUpCards.forEach(card => {
        card.classList.add('match');
        card.classList.remove('faceUp');
      });
    } else {
      faceUpCards.forEach(card => {
        setTimeout(() => card.classList.remove('flipCard', 'faceUp'), 1000);
      });
    }
  }
}

/** Gameboard event listener */

gameBoard.addEventListener('click', handleCardClick);
