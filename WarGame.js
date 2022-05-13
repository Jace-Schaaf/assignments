const SUITS = ["Spades", "Clubs", "Diamonds", "Hearts"]
const VALUES = [
    { name: "2", value: 2 },
    { name: "3", value: 3 },
    { name: "4", value: 4 },
    { name: "5", value: 5 },
    { name: "6", value: 6 },
    { name: "7", value: 7 },
    { name: "8", value: 8 },
    { name: "9", value: 9 },
    { name: "10", value: 10 },
    { name: "Jack", value: 11 },
    { name: "Queen", value: 12 },
    { name: "King", value: 13 },
    { name: "Ace", value: 14 }
];

 
class Deck {
    constructor() {
        this.cards = this.freshDeck()
    }
    freshDeck() {
        return SUITS.flatMap(suit => {
            return VALUES.map(value => {
                return new Card(suit, value)
            })
        })
    }
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
 }
 
 
class Card {
    constructor(suit, value) {
        this.suit = suit
        this.cardValue = value
    } 
    
}


let deck = new Deck()
let player1, player2
deck.shuffle()

const deckMidpoint = Math.ceil(deck.cards.length / 2)
player1 = (deck.cards.slice(0, deckMidpoint))
player2 = (deck.cards.slice(deckMidpoint, deck.cards.length))

let player1Score = 0
let player2Score = 0

for (i = 0; i < player1.length && player2.length; i++) {
    console.log("player1: %s of %s", player1[i].cardValue.name, player1[i].suit)
    console.log("player2: %s of %s", player2[i].cardValue.name, player2[i].suit)

    if (player1[i].cardValue.value > player2[i].cardValue.value) {
        player1Score += 1
    } else if (player1[i].cardValue.value < player2[i].cardValue.value) {
        player2Score += 1
    } else {

    }
}

console.log("Player One Score: %s", player1Score);
console.log("Player Two Score: %s", player2Score);



function combineCard(Suit,Value) {
   return Value + " of " + Suit;
}
let kingOfHearts = combineCard('Hearts', 'King')
console.log(kingOfHearts)