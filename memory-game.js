"use strict";

/** Memory game: find matching pairs of cards and flip both of them. */

const FOUND_MATCH_WAIT_MSECS = 1000;
const IMAGES = [
  { src: "images/astronaut.jpg", name: "astronaut" },
  { src: "images/bonsai_tree.jpg", name: "bonsai" },
  { src: "images/cat.jpg", name: "cat" },
  { src: "images/dog.jpg", name: "dog" },
  { src: "images/donuts.jpg", name: "donuts" },
  { src: "images/ice_cream.jpg", name: "ice-cream" },
  { src: "images/oranges.jpg", name: "oranges" },
  { src: "images/pineapple_with_shades.jpg", name: "pineapple" },
  { src: "images/astronaut.jpg", name: "astronaut" },
  { src: "images/bonsai_tree.jpg", name: "bonsai" },
  { src: "images/cat.jpg", name: "cat" },
  { src: "images/dog.jpg", name: "dog" },
  { src: "images/donuts.jpg", name: "donuts" },
  { src: "images/ice_cream.jpg", name: "ice-cream" },
  { src: "images/oranges.jpg", name: "oranges" },
  { src: "images/pineapple_with_shades.jpg", name: "pineapple" }
];
const backOfCardImage = "images/card_design.jpg";

const images = shuffle(IMAGES);

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
    backOfCard.setAttribute('src', backOfCardImage);

    card.append(faceOfCard, backOfCard);
    gameBoard.append(card);
  }
}

/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // ... you need to write this ...
}
