document.addEventListener('DOMContentLoaded', () => {
  //cards
  const cards = [
    {
      name: 'batman',
      image: './images/batman.jpeg'
    },
    {
      name: 'batman',
      image: './images/batman.jpeg'
    },
    {
      name: 'chicken',
      image: './images/chicken.jpeg'
    },
    {
      name: 'chicken',
      image: './images/chicken.jpeg'
    },
    {
      name: 'deadpool',
      image: './images/deadpool.jpeg'
    },
    {
      name: 'deadpool',
      image: './images/deadpool.jpeg'
    },
    {
      name: 'lion',
      image: './images/lion.jpeg'
    },
    {
      name: 'lion',
      image: './images/lion.jpeg'
    },
    {
      name: 'mushroom',
      image: './images/mushroom.jpeg'
    },
    {
      name: 'mushroom',
      image: './images/mushroom.jpeg'
    },
    {
      name: 'pizza',
      image: './images/pizza.jpeg'
    },
    {
      name: 'pizza',
      image: './images/pizza.jpeg'
    },
    {
      name: 'pony',
      image: './images/pony.jpeg'
    },
    {
      name: 'pony',
      image: './images/pony.jpeg'
    },
    {
      name: 'skull',
      image: './images/skull.jpeg'
    },
    {
      name: 'skull',
      image: './images/skull.jpeg'
    },
  ]
  cards.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('#grid')
  const result = document.querySelector("#result")
  const status = document.querySelector('#status')
  var cardSelected = [];
  var cardSelectedId = [];
  var cardsDone = [];

  // create board
  function createGrid() {
    for (let i = 0; i < cards.length; i++) {
      let card = document.createElement('img');
      card.setAttribute('src', 'images/unturned.jpeg')
      card.setAttribute('id-img', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('id-img')
    if (cardSelectedId[0] === cardId) {
      this.setAttribute('src', 'images/unturned.jpeg');
      cardSelected = [];
      cardSelectedId = [];
    } else {
      cardSelected.push(cards[cardId].name);
      cardSelectedId.push(cardId);
      this.setAttribute('src', cards[cardId].image);
      if (cardSelected.length === 2) {
        setTimeout(checkMatch, 500);
      }
    }

    function checkMatch() {
      var imgCard = document.querySelectorAll('img');
      const cardOne = cardSelectedId[0];
      const cardTwo = cardSelectedId[1];
      console.log(cardSelected);
      console.log(cardOne, cardTwo)
      if (cardSelected[0] === cardSelected[1]) {
        status.textContent = 'Match found'
        imgCard[cardOne].setAttribute('src', 'images/empty.jpeg')
        imgCard[cardOne].removeEventListener('click', flipCard)
        imgCard[cardTwo].setAttribute('src', 'images/empty.jpeg')
        imgCard[cardTwo].removeEventListener('click', flipCard)
        cardsDone.push(cardSelected)
      } else {
        imgCard[cardOne].setAttribute('src', 'images/unturned.jpeg')
        imgCard[cardTwo].setAttribute('src', 'images/unturned.jpeg')
        status.textContent = 'Sorry! try again'
      }
      cardSelected = [];
      cardSelectedId = [];
      result.textContent = cardsDone.length;
      if (cardsDone.length === cards.length / 2) {
        result.textContent = 'Finished!'
        status.textContent = 'You won! Refresh to play again'
      }
    }

  }
  createGrid()

})
